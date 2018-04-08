import { Component, Inject, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'


@Component({
    selector: 'inline-text-editor',
    templateUrl: './inlinetexteditor.component.html',
    styleUrls:['./inlinetexteditor.component.css'],
})
export class InlineTextEditorComponent implements AfterViewInit{
    curContent: SafeHtml;
    public newContent: string;
    @Output() contentChanged = new EventEmitter();
    public emitFocusEvent = new EventEmitter<boolean>();

    @Input()
    set content(c: string) {
        this.curContent = this.sanitizer.bypassSecurityTrustHtml(c);
        this.newContent = c;
    }

    get content() {
        return this.newContent;
    }

    ngAfterViewInit() {
        this.emitFocusEvent.emit(true);
    }

    constructor(private sanitizer: DomSanitizer) {
    }

    onContentChange(event: any) {
        this.contentChanged.emit(this.newContent); 
    }
}