import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'credential-readonly',
    templateUrl: './credentials-readonly.component.html',
    styleUrls: ['./credential-readonly.component.css']
})
export class CredentialsReadonlyComponent {
    userName: string;
    credentials: string[] = [];

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {
        this.credentials.push('sample');
    }
}
