import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DatabaseService } from '../../shared/services/database.service';
import { ModalService } from '../../shared/services/modal.service';
import { ServerService } from '../../shared/services/server.service';
import { User } from '../../shared/model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit, OnDestroy {
  @Output('onCloseModal') closeModalEvent = new EventEmitter();
  x: string;
  subscription: Subscription ;

  constructor(
    private dbService: DatabaseService,
    private mdService: ModalService,
    private svService: ServerService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  CreatePlaylist(name: string) {
    this.subscription = this.svService.loggedInUser.subscribe(
      (user: User) => {
        this.dbService.CreateNewPlaylist(user.username, name);
      }
    );
  }

  CloseModal() {
    this.mdService.HideModal()
  }

}
