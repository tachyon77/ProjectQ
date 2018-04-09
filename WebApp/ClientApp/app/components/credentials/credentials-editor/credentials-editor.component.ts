import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Education, Employment } from '../../../services/application-user.service';

@Component({
    selector: 'credential-editor',
    templateUrl: './credentials-editor.component.html',
    styleUrls: ['./credentials-editor.component.css']
})
export class CredentialsEditorComponent implements OnInit {
    name: string;
    educations: Education[] = [];
    employments: Employment[] = [];

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {

    }
}
