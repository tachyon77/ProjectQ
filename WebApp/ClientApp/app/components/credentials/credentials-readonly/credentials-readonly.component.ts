import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'credential-readonly',
    templateUrl: './credentials-readonly.component.html',
    styleUrls: ['./credentials-readonly.component.css']
})
export class CredentialsReadonlyComponent implements OnInit {
    name: string;
    credentials: string[] = [];

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {
        this.credentials.push('sample');
    }
}
