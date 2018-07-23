import { Component } from '@angular/core';
import { Playlist } from '../model/playlist';
import { PlaybackService } from '../shared/services/playback.service';

@Component({
    selector: 'app-my-playlist',
    templateUrl: './my-playlist.component.html',
    styleUrls: ['./my-playlist.component.css'],
})

export class MyPlaylistComponent {
    myPlaylists: Playlist[];
    
    constructor(private pbService: PlaybackService) {
        this.myPlaylists = pbService.GetMyPlaylists();
    }
}
