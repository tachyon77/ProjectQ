import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface InViewportServiceRegistryObject {
    targets: Element[];
    rootElement: Element;
    observer: IntersectionObserver;
}

@Injectable()
export class ViewportWatcherService {
    private registry: InViewportServiceRegistryObject[] = [];
    public readonly trigger$: Subject<IntersectionObserverEntry> = new Subject<IntersectionObserverEntry>();

    constructor(private ngZone: NgZone) { }

    public addTarget(target: Element, rootElement?: Element): void {
        this.ngZone.runOutsideAngular(() => this.register(target, rootElement));
    }

    public removeTarget(target: Element, rootElement?: Element): void {
        this.ngZone.runOutsideAngular(() => this.unregister(target, rootElement));
    }

    private getRootElement(element: any) {
        return element && element.nodeType === 1 ? element : null;
    }

    private findRegistryEntry(rootElement?: Element) {
        return this.registry.find((item) => item.rootElement === this.getRootElement(rootElement));
    }

    private onChanges(entries: IntersectionObserverEntry[]): void {
        if (Array.isArray(entries) && entries.length) {
            entries.forEach((entry) => this.trigger$.next(entry));
        }
    }

    private register(target: Element, rootElement?: Element): void {
        let registryEntry = this.findRegistryEntry(rootElement);
        if (!registryEntry) {
            const registryEntryObserverOptions: any = {
                root: this.getRootElement(rootElement),
                threshold: 1.0
            };
            registryEntry = {
                targets: [target],
                rootElement: this.getRootElement(rootElement),
                observer: new IntersectionObserver(
                    (entries: IntersectionObserverEntry[]) => this.ngZone.run(() => this.onChanges(entries)),
                    registryEntryObserverOptions
                )
            };
            registryEntry.observer.observe(target);
            this.registry.push(registryEntry);
        } else if (registryEntry.targets.indexOf(target) < 0) {
            registryEntry.targets.push(target);
            registryEntry.observer.observe(target);
        }
    }

    private unregister(target: Element, rootElement?: Element): void {
        const registryEntry = this.findRegistryEntry(rootElement);
        if (registryEntry) {
            const registryEntryIdx = this.registry.indexOf(registryEntry);
            const targetIdx = registryEntry.targets.indexOf(target);
            if (targetIdx >= 0) {
                registryEntry.observer.unobserve(target);
                registryEntry.targets.splice(targetIdx, 1);
            }
            if (registryEntry.targets.length === 0) {
                registryEntry.observer.disconnect();
                this.registry.splice(registryEntryIdx, 1);
            }
        }
    }
}


export enum InViewportConfigDirection {
    Both,
    Vertical,
    Horizontal
}

export interface InViewportConfigOptions {
    rootElement?: any;
    partial?: boolean;
    direction?: InViewportConfigDirection;
}

export class InViewportConfig {
    protected _rootElement!: Element;
    protected _partial!: boolean;
    protected _direction!: InViewportConfigDirection;

    constructor(options?: InViewportConfigOptions) {
        this.rootElement = options && options.rootElement instanceof Element ? options.rootElement : void 0;

        this.partial = options && 'partial' in options ? options.partial : true;

        this.direction = options && 'direction' in options ? options.direction : InViewportConfigDirection.Both;
    }

    get rootElement(): Element | undefined {
        return this._rootElement;
    }

    set rootElement(value: Element | undefined) {
        if (value) {
            this._rootElement = value;
        }
    }

    get partial(): boolean | undefined {
        return this._partial;
    }

    set partial(value: boolean | undefined) {
        this._partial = !!value;
    }

    get direction(): InViewportConfigDirection | undefined{
        return this._direction;
    }

    set direction(value: InViewportConfigDirection | undefined) {
        if (value) {
            this._direction = value;
        }
    }
}
