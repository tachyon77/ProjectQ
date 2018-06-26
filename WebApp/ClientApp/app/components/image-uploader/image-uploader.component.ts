import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import { ImageStoreService } from '../../services/image-store.service';

@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {

    selectedFile: File | undefined;

    constructor(private imageStoreService: ImageStoreService) {
    }

    onFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
    }

    onUpload() {
        console.log(this.selectedFile);
        const fd = new FormData();
        fd.append('image', this.selectedFile!, "alpha");
        this.imageStoreService.upload(fd)
            .subscribe(() => { });

    }
}