import { Component, Inject, Input, Output, EventEmitter, AfterViewInit, TemplateRef, Optional } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ImageStoreService } from '../../services/image-store.service';
import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';

interface LinkFormData {
    link: string;
}

@Component({
    selector: 'content-editor',
    templateUrl: './contenteditor.component.html',
    styleUrls:['./contenteditor.component.css'],
})
export class ContentEditorComponent implements AfterViewInit{
    editPosition: Range | undefined;
    curContent: SafeHtml | undefined;
    public newContent: string = "";
    insertLinkModal: BsModalRef | undefined;
    insertImageModal: BsModalRef | undefined;
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

    baseUrl: string | undefined;

  constructor(
    @Optional() @Inject(APP_BASE_HREF) baseUrl: string,
        private sanitizer: DomSanitizer,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private imageStoreService: ImageStoreService,
    ) {
        this.enableRedaction = false;
        this.baseUrl = baseUrl;
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

    onShowInsertImage(template: TemplateRef<any>) {
        const initialState = {
        };
        this.insertImageModal = this.modalService.show(
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

    selectedFile: File | undefined;
    imageUrl: string | undefined;

    onImageFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
        console.log(this.selectedFile);
        this.imageUrl = this.selectedFile!.name;
    }

    upload(): Observable<any> {
        const formData = new FormData();
        formData.append('image', this.selectedFile!, this.selectedFile!.name);
        return this.imageStoreService.upload(formData);
    }

    onInsertImage() {

        this.restoreSelection();

        if (this.imageUrl) {
            let imageUrlLowerCase = this.imageUrl.toLowerCase();
            if (imageUrlLowerCase.startsWith("http://") || imageUrlLowerCase.startsWith("https://")) {
                var html = "<img class='img-fluid' src='" + this.imageUrl + "'>";
                document.execCommand("insertHTML", false, html);
                // Guarded by ngIf
                this.insertImageModal!.hide();
            } else {
                this.upload().subscribe(
                    (imagePath) => {
                        this.imageUrl = "/api/imagestore/" + imagePath;
                        var html = "<img class='img-fluid' src='" + this.imageUrl + "'>";
                        document.execCommand("insertHTML", false, html);
                        // Guarded by ngIf
                        this.insertImageModal!.hide();
                    });
            }
        }
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
