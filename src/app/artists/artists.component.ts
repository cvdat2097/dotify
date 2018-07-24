import { Component } from '@angular/core';

import { Artist } from '../shared/model/artist';


import { DatabaseService } from '../shared/services/database.service';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css'],
})

export class ArtistComponent {
    artists: Artist[] = [];

    constructor(private dbService: DatabaseService) {
        this.artists = this.dbService.GetArtists();
    }
}
