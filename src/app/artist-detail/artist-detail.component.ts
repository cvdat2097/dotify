import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DatabaseService } from '../shared/services/database.service';
import { Artist } from '../model/artist';

@Component({
    selector: 'app-artist-detail',
    templateUrl: './artist-detail.component.html',
    styleUrls: ['./artist-detail.component.css'],
})

export class ArtistDetailComponent implements OnInit {
    artist: Artist;
    @ViewChild('banner') banner: HTMLDivElement;

    constructor(
        private route: ActivatedRoute,
        private dbService: DatabaseService,
        private renderer: Renderer2
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
