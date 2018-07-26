import { Component } from '@angular/core';

import { ModalService } from './shared/services/modal.service';
import { ServerService } from './shared/services/server.service';
import { User } from './shared/model/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    modal: string = "";
    modalParams: any;
    loggedInUser: User = null;

    constructor(
        private mdService: ModalService,
        private svService: ServerService
    ) {
        this.mdService.GetModalSource().subscribe(
            (modalType: any) => {
                // Show modal
                this.modal = modalType.selector;
                this.modalParams = modalType.params;
            }
        );

        this.svService.GetLoggedUser().subscribe(
            (user: User) => {
                this.loggedInUser = user;
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

    Logout() {
        this.svService.Logout();
    }
}
