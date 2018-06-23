import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import { AnswerPaymentResult, AnswerPayment } from '../../models/AnswerPayment';
import { AnswerPaymentService } from '../../services/answer-payment.service';

@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {

    selectedFile: File | undefined;
   
    constructor() { }

    onFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
    }

    onUpload() {
        console.log(this.selectedFile);
    }
}