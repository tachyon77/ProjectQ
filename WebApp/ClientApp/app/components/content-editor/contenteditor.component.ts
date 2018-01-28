import { Component, Inject, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'


@Component({
    selector: 'content-editor',
    templateUrl: './contenteditor.component.html',
    styleUrls:['./contenteditor.component.css'],
})
export class ContentEditorComponent implements AfterViewInit{
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

    selectionIsBold() {
        var isBold = false;
        if (document.queryCommandState) {
            isBold = document.queryCommandState("bold");
        }
        return isBold;
    }

    onContentChange(event: any) {
        this.contentChanged.emit(this.newContent);     
    }

    onBold(event: MouseEvent) {
        let isBold = this.selectionIsBold();
        var sel, range;
        if (event.view.getSelection) {
            sel = event.view.getSelection();
            let originalText = sel.toString();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                let node: Element = document.createElement("bold");
                if (isBold) {
                    node.innerHTML = "<span style='font-weight:normal'>"
                        + originalText + "</span>";
                } else {
                    node.innerHTML = "<span style='font-weight:bold'>"
                        + originalText + "</span>";
                }

                range.insertNode(node);
                let editor: Element = document
                    .getElementById("editor-777") as Element;
                this.newContent = editor.innerHTML;
                this.onContentChange(event);

            }
        } 
    }
}