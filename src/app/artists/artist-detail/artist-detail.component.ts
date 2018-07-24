import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DatabaseService } from '../../shared/services/database.service';
import { Artist } from '../../shared/model/artist';

@Component({
    selector: 'app-artist-detail',
    templateUrl: './artist-detail.component.html',
    styleUrls: ['./artist-detail.component.css'],
})

export class ArtistDetailComponent implements OnInit {
    artist: Artist;

    constructor(
        private route: ActivatedRoute,
        private dbService: DatabaseService,
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(
            (params: Params) => {
                var artistID = params['id'];
                this.artist = this.dbService.GetArtist(artistID);
            }
        )
    }
}
