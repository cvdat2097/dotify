import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../../shared/model/song';
import { DatabaseService } from '../../shared/services/database.service';
import { Playlist } from '../../shared/model/playlist';
import { User } from '../../shared/model/user';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-add-to-playlist',
  templateUrl: './add-to-playlist.component.html',
  styleUrls: ['./add-to-playlist.component.css']
})
export class AddToPlaylistComponent implements OnInit {
  @Input('song') song: Song;
  @Input('userID') userID: number;
  @Output('onCloseModal') closeModalEvent = new EventEmitter();
  x: string;

  user: User;

  constructor(
    private dbService: DatabaseService,
    private mdService: ModalService
  ) {
  }

  ngOnInit() {
    this.user = this.dbService.GetUser(this.userID);
  }

  AddToPlaylist(playlistID: number) {
    this.dbService.GetUser(this.userID).playlists[playlistID].AddSong(this.song);
    console.log('Song added');
    return true;
  }

  CloseModal() {
    this.mdService.HideModal();
  }
}
