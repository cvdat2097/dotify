import { Component } from '@angular/core';
import { Song } from '../shared/model/song';
import { DatabaseService } from '../shared/services/database.service';
import { ModalService } from '../shared/services/modal.service';
import { PlaybackService } from '../shared/services/playback.service';

@Component({
    selector: 'app-songs',
    templateUrl: './songs.component.html',
    styleUrls: ['./songs.component.css'],
})

export class SongsComponent {
    songs: Song[] = this.dbService.GetSongs();

    constructor(
        private dbService: DatabaseService, 
        private mdService: ModalService,
        private pbService: PlaybackService
    ) { }

    AddToPlaylist(song: Song) {
        this.mdService.ShowModal('app-add-to-playlist', song);
    }
}
