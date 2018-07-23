import { Component } from '@angular/core';
import { Song } from '../model/song';
import { DatabaseService } from '../shared/services/database.service';
import { PlaybackService } from '../shared/services/playback.service';

@Component({
    selector: 'app-songs',
    templateUrl: './songs.component.html',
    styleUrls: ['./songs.component.css'],
})

export class SongsComponent {
    songs: Song[] = this.dbService.GetSongs();
    constructor(private dbService: DatabaseService ,private pbService: PlaybackService) { }

    PlaySong(song: Song) {
        this.pbService.SendToPlayer(song);
        this.pbService.AddToQueue(song);
    }
}
