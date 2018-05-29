/*import { Directive, Output, EventEmitter, ElementRef, Inject, NgZone }
    from '@angular/core';

@Directive({
    selector: '[viewport-watcher]'
})
export class ViewPortWatcherDirective {

    @Output('onViewportEvent') public action: EventEmitter<any>;

    constructor(
        @Inject(ElementRef) private element: ElementRef,
        private ngZone: NgZone) {

        // list of options
        let options = {
            root: void 0,
            threshold: 0.5
        };

        // instantiate a new Intersection Observer
        let observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => this.ngZone.run(() => this.onChanges(entries)),
            options);

        observer.observe(this.element.nativeElement);

        this.action = new EventEmitter<boolean>();
        
    }

    onChanges(entries: IntersectionObserverEntry[]) {
        entries.forEach(
            (entry) => {
                if (entry.isIntersecting) {
                    console.log(entry.intersectionRatio);
                    this.action.emit(true);
                }
            }
        );
    }
}
*/

import {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Output,
    PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { InViewportConfig, ViewportWatcherService } from './viewport-watcher.service';

export const InViewportMetadata = Symbol('InViewportMetadata');

@Directive({
    selector: '[in-viewport], [inViewport]'
})
export class ViewPortWatcherDirective implements AfterViewInit, OnDestroy {
    private config: InViewportConfig;
    private subscription: Subscription = new Subscription();

    @Output('inViewportAction') public action$: EventEmitter<any>;

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private elementRef: ElementRef,
        private inViewportService: ViewportWatcherService
    ) {
        this.config = new InViewportConfig();
        this.action$ = new EventEmitter();
    }

    @Input('inViewportOptions')
    set updateConfig(value: any) {
        if (value && Object.prototype.toString.call(value) === '[object Object]') {
            if (value.rootElement instanceof Element) {
                this.config.rootElement = value.rootElement;
            }
            if ('partial' in value) {
                this.config.partial = value.partial;
            }
            if ('direction' in value) {
                this.config.direction = value.direction;
            }
        }
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.subscription.add(
                this.inViewportService.trigger$.subscribe((entry: IntersectionObserverEntry) => this.check(entry))
            );
            this.inViewportService.addTarget(this.elementRef.nativeElement, this.config.rootElement);
        } else {
            this.check(undefined, true);
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        if (isPlatformBrowser(this.platformId)) {
            this.inViewportService.removeTarget(this.elementRef.nativeElement, this.config.rootElement);
        }
    }

    check(entry?: IntersectionObserverEntry, force?: boolean) {
        if (force || (entry && entry.target === this.elementRef.nativeElement)) {
            const value = force || (this.config.partial ? entry!.intersectionRatio > 0 : entry!.intersectionRatio === 1);
            console.log("Firing...");
            this.action$.emit({
                entry: { entry },
                target: this.elementRef.nativeElement,
                value
            });
        }
    }
}
