import { Component } from '@angular/core';
import { Playlist } from '../shared/model/playlist';
import { PlaybackService } from '../shared/services/playback.service';
import { DatabaseService } from '../shared/services/database.service';

@Component({
    selector: 'app-my-playlist',
    templateUrl: './my-playlist.component.html',
    styleUrls: ['./my-playlist.component.css'],
})

export class MyPlaylistComponent {
    myPlaylists: Playlist[];

    constructor(private dbService: DatabaseService, private pbService: PlaybackService) {
        this.myPlaylists = this.dbService.GetUser(1).playlists;
    }
}
