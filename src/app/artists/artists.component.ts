import { Component } from '@angular/core';

import { Artist } from '../model/artist';

import { DatabaseService } from '../shared/services/database.service';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css'],
})

export class ArtistComponent {
    artists: Artist[] = [];

    constructor(private dbService: DatabaseService) {
        this.artists = dbService.GetArtists();
    }
}
