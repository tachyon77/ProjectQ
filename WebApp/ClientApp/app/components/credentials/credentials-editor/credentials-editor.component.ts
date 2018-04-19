import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Education, Employment } from '../../../services/application-user.service';
import { EducationEditorComponent } from '../../credentials/education-editor/education-editor.component';

@Component({
    selector: 'credential-editor',
    templateUrl: './credentials-editor.component.html',
    styleUrls: ['./credentials-editor.component.css']
})
export class CredentialsEditorComponent implements OnInit {
    name: string;
    educations: Education[] = [];
    employments: Employment[] = [];

    constructor(
        private modalService: BsModalService,
        public selfModalRef: BsModalRef) { }

    onOpenEducationEditor() {
        const initialState = {
            name: this.name
        };
        this.modalService.show(EducationEditorComponent, { initialState });
    }

    ngOnInit() {

    }
}
