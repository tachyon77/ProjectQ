import { Component, Inject, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'content-editor',
    templateUrl: './contenteditor.component.html',
    styleUrls:['./contenteditor.component.css'],
})
export class ContentEditorComponent implements AfterViewInit{
    public curContent: string;
    public newContent: string;
    @Output() contentChanged = new EventEmitter();
    public emitFocusEvent = new EventEmitter<boolean>();

    @Input()
    set content(c: string) {
        this.curContent = c;
        this.newContent = c;
    }

    get content() {
        return this.newContent;
    }

    ngAfterViewInit() {
        this.emitFocusEvent.emit(true);
    }

    constructor(
        private formBuilder: FormBuilder) {
    }

    onContentChange() {
        this.contentChanged.emit(this.newContent);     
    }

    ngOnInit() {
        
    }
}