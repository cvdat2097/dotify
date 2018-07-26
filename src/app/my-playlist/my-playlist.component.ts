import { Component } from '@angular/core';
import { Playlist } from '../shared/model/playlist';
import { DatabaseService } from '../shared/services/database.service';
import { ServerService } from '../shared/services/server.service';
import { User } from '../shared/model/user';

@Component({
    selector: 'app-my-playlist',
    templateUrl: './my-playlist.component.html',
    styleUrls: ['./my-playlist.component.css'],
})

export class MyPlaylistComponent {
    myPlaylists: Playlist[] = [];

    constructor(
        private dbService: DatabaseService,
        private svService: ServerService
    ) {
        this.dbService.SignUp('bamboak', '123456', 'Dat', '#');
        this.svService.GetLoggedUser().subscribe(
            (user: User) => {
                if (user != null) {
                    this.myPlaylists = this.dbService.GetUserByUsername(user.username).playlists;
                } else {
                    this.myPlaylists = [];
                }
            }
        )

    }
}
