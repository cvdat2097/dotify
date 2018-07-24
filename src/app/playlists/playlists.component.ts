import { Component, OnInit } from '@angular/core';
import { Playlist } from '../shared/model/playlist';
import { DatabaseService } from '../shared/services/database.service';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html',
    styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
    playlists: Playlist[];

    constructor(private dbService: DatabaseService) {
        this.playlists = this.dbService.GetPlaylists();
    }

    ngOnInit() {
    }

}
