import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  @Output('onCloseModal') closeModalEvent = new EventEmitter();
  x: string;

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
  }

  CreatePlaylist(name: string) {
    console.log(name);
    this.dbService.CreateNewPlaylist(1, name);
  }

  CloseModal() {
    this.closeModalEvent.emit(true);
  }

}
