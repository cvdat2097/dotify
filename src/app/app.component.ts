import { Component, ViewChild } from '@angular/core';

import { ModalService } from './shared/services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    modal: string = "";
    modalParams: any;
    userLoggedIn: boolean = true;

    constructor(private mdService: ModalService) {
        this.mdService.GetModalSource().subscribe(
            (modalType: any) => {
                // Show modal
                this.modal = modalType.selector;
                this.modalParams = modalType.params;
            }
        )
    }

    ShowModal(modalType: string) {
        this.mdService.ShowModal(modalType);
    }

    HideModal($event) {
        if ($event.currentTarget === $event.target) {
            this.mdService.HideModal();
        }
    }
}
