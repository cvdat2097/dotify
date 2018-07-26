import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../../shared/model/song';
import { DatabaseService } from '../../shared/services/database.service';
import { Playlist } from '../../shared/model/playlist';
import { User } from '../../shared/model/user';
import { ModalService } from '../../shared/services/modal.service';
import { ServerService } from '../../shared/services/server.service';

@Component({
  selector: 'app-add-to-playlist',
  templateUrl: './add-to-playlist.component.html',
  styleUrls: ['./add-to-playlist.component.css']
})
export class AddToPlaylistComponent implements OnInit {
  @Input('song') song: Song;
  @Output('onCloseModal') closeModalEvent = new EventEmitter();


  user: User = null;

  constructor(
    private dbService: DatabaseService,
    private mdService: ModalService,
    private svService: ServerService
  ) {
  }

  ngOnInit() {
    this.svService.GetLoggedUser().subscribe(
      (user: User) => {
        this.user = user;
      }
    )
  }

  AddToPlaylist(playlistID: number) {

    this.dbService.GetUserByUsername(this.user.username).playlists[playlistID].AddSong(this.song);
    console.log('Song added');
    return true;
  }

  CloseModal() {
    this.mdService.HideModal();
  }
}
