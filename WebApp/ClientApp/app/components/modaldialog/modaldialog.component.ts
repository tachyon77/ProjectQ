import { Component } from '@angular/core';

@Component({
    selector: 'modal-dialog',
    templateUrl: './modaldialog.component.html',
    styleUrls: ['./modaldialog.component.css']
})
export class ModalDialogComponent {

    public visible = false;

    constructor() { }

    public show(): void {
        this.visible = true;
    }

    public hide(): void {
        this.visible = false;
    }

    public onContainerClicked(event: MouseEvent): void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
            this.hide();
        }
    }

}