﻿import { Component, Inject, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'


@Component({
    selector: 'content-editor',
    templateUrl: './contenteditor.component.html',
    styleUrls:['./contenteditor.component.css'],
})
export class ContentEditorComponent implements AfterViewInit{
    imgURL: string;
    editPosition: Range;
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
        this.saveSelection();
    }

    constructor(private sanitizer: DomSanitizer) {
    }


    onContentChange(event: any) {
        this.contentChanged.emit(this.newContent); 
    }

    saveSelection() {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.editPosition = sel.getRangeAt(0);
                console.log("saving");
            }
        } 
    }

    restoreSelection() {
        if (this.editPosition) {
             console.log("restoring");
            if (window.getSelection) {
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(this.editPosition);
            } 
        }
    }

    onInsertImage() {
        this.restoreSelection();
        var html = "<img class='img-fluid' src='" + this.imgURL + "'>";
        document.execCommand("insertHTML", false, html);
    }

    onBlur() {
        this.saveSelection();
    }

    onBold() {
        this.formatText('bold');
    }

    onItalic() {
        this.formatText('italic');
    }

    onRedact() {
        let range = document.createRange();
        range = window.getSelection().getRangeAt(0);
        console.log(range);

        document.execCommand("removeFormat", false, null);
        document.execCommand("foreColor", false, "lightgrey");
        document.execCommand("hiliteColor", false, "lightgrey");
    }

    onUnRedact() {
        document.execCommand("hiliteColor", false, "white");
        document.execCommand("foreColor", false, "black");
    }

    onUnderline() {
        this.formatText('underline');
    }

    formatText(command: string) {
        document.execCommand(command, false, null);
    }
}