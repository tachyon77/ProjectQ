import { Component, Inject, Input, Output, EventEmitter, AfterViewInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

interface LinkFormData {
    link: string;
}

@Component({
    selector: 'content-editor',
    templateUrl: './contenteditor.component.html',
    styleUrls:['./contenteditor.component.css'],
})
export class ContentEditorComponent implements AfterViewInit{
    imgURL: string | undefined;
    editPosition: Range | undefined;
    curContent: SafeHtml | undefined;
    public newContent: string = "";
    insertLinkModal: BsModalRef | undefined;
    linkForm: FormGroup | undefined;
    private _enableRedaction: boolean = false;

    @Output() contentChanged = new EventEmitter();
    public emitFocusEvent = new EventEmitter<boolean>();

    @Input()
    set content(c: string) {
        this.curContent = this.sanitizer.bypassSecurityTrustHtml(c);
        this.newContent = c;
    }

    @Input()
    set enableRedaction(e: boolean) {
        this._enableRedaction = e;
    }

    get content() {
        return this.newContent;
    }

    get enableRedaction() {
        return this._enableRedaction;
    }


    ngAfterViewInit() {
        this.emitFocusEvent.emit(true);
        this.saveSelection();
    }

    constructor(
        private sanitizer: DomSanitizer,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
    ) {
        this.enableRedaction = false;
    }

    onShowInsertLink(template: TemplateRef<any>) {

        this.linkForm = this.formBuilder.group({
            link: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
        });

        const initialState = {
        };
        this.insertLinkModal = this.modalService.show(
            template, { initialState }
        );
    }


    onContentChange(event: any) {
        this.contentChanged.emit(this.newContent); 
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

    onUnorderedList() {
        this.formatText('insertUnorderedList');
    }

    onOrderedList() {
        this.formatText('insertOrderedList');
    }

    onInsertLink(formData: LinkFormData) {
        this.restoreSelection();
        var link = formData.link;
        if (link.startsWith("http")) {

        } else {
            link = "https://" + link;
        }

        document.execCommand('createLink', false, link);
        // Guarded by ngIf
        this.insertLinkModal!.hide();
    }


    formatText(command: string) {
        document.execCommand(command, false, null);
    }
}