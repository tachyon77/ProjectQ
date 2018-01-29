import { Component, Inject, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'


@Component({
    selector: 'content-editor',
    templateUrl: './contenteditor.component.html',
    styleUrls:['./contenteditor.component.css'],
})
export class ContentEditorComponent implements AfterViewInit{
    imgURL: string;
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


    onInsertImage() {
        this.emitFocusEvent.emit(true);
        var html = "<img class='img-fluid' src='" + this.imgURL + "'>";
        document.execCommand("insertHTML", false, html);
    }

    onBold() {
        this.formatText('bold');
    }

    onItalic() {
        this.formatText('italic');
    }

    onUnderline() {
        this.formatText('underline');
    }

    formatText(command: string) {
        document.execCommand(command, false, null);
    }
}