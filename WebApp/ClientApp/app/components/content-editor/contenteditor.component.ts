import { Component, Inject, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
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
        var parser = new DOMParser();
        var doc = parser.parseFromString(this.newContent, "text/html") as DocumentFragment;
        console.log(doc.childElementCount);
        var root = doc.children.item(0) as HTMLElement;
        this.removeRedacted(root);
        //console.log(root.innerHTML);
        //console.log(root.innerText);
    }

    saveSelection() {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.editPosition = sel.getRangeAt(0);
            }
        } 
    }

    restoreSelection() {
        if (this.editPosition) {
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
        document.execCommand("foreColor", false, "#d3d3d3");
        document.execCommand("hiliteColor", false, "#d3d3d3");
    }

    onUnRedact() {
        document.execCommand("hiliteColor", false, "#ffffff");
        document.execCommand("foreColor", false, "#000000");
    }

    onUnderline() {
        this.formatText('underline');
    }

    formatText(command: string) {
        document.execCommand(command, false, null);
    }


    removeRedacted(root: HTMLElement) {
        var done = false;
        while (!done) {
            done = true;
            for (var i = 0; i < root.children.length; i++) {
                var child = root.children.item(i) as HTMLElement;
                let color = child.style.backgroundColor;
                if (color == 'rgb(211, 211, 211)') {
                    child.remove();
                    done = false;
                    break;
                } 
            }
        }

        for (var i = 0; i < root.children.length; i++) {
            var child = root.children.item(i) as HTMLElement;
            this.removeRedacted(child);
        }
    }

}