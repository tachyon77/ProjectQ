﻿import { Directive, Input, EventEmitter, ElementRef, Renderer, Inject }
    from '@angular/core';

@Directive({
    selector: '[focus]'
})
export class FocusDirective {
    @Input('focus') focusEvent: EventEmitter<boolean> = new EventEmitter();

    constructor(
        @Inject(ElementRef) private element: ElementRef,
        private renderer: Renderer) {
    }

    ngOnInit() {
        this.focusEvent.subscribe(
            () => {
                this.renderer.invokeElementMethod(
                    this.element.nativeElement, 'focus', []);
        });
    }


}