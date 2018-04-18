import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Education, Employment } from '../../../services/application-user.service';

@Component({
    selector: 'education-editor',
    templateUrl: './education-editor.component.html',
    styleUrls: ['./education-editor.component.css']
})
export class EducationEditorComponent implements OnInit {
    name: string;
    educations: Education[] = [];
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public bsModalRef: BsModalRef) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            school: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
        });
    }
}
