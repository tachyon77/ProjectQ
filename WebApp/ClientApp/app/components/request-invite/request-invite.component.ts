import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ReqInvite } from '../../models/RequestInvite';
import { RequestInviteService } from '../../services/request-invite.service';

@Component({
    selector: 'request-invite',
    templateUrl: './request-invite.component.html',
    styleUrls: ['./request-invite.component.css']
})
export class RequestInviteComponent implements OnInit {
    form: FormGroup | undefined;
    @Output() inviteReqSubmitted = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private reqInviteService: RequestInviteService
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Name: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            Email: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),

        });
    }


    onSubmit(req: ReqInvite) {
        this.reqInviteService.requestInvitation(req)
            .subscribe(
            (result) => {
                this.inviteReqSubmitted.emit();
            });
    }


}
