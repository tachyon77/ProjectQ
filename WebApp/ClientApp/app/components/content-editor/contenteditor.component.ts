import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'content-editor',
    templateUrl: './contenteditor.component.html',
    styleUrls:['./contenteditor.component.css'],
})
export class ContentEditorComponent {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        
    }
}