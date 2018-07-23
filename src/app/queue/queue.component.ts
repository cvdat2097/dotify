import { Component, OnDestroy } from '@angular/core';
import { DatabaseService } from '../shared/services/database.service';
import { Playlist } from '../model/playlist';
import { Song } from '../model/song';
import { Subscription } from 'rxjs';
import { PlaybackService } from '../shared/services/playback.service';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css'],
})

export class QueueComponent {
    queue: Playlist;

    constructor(private dbService: DatabaseService, pbService: PlaybackService) {
        this.queue = pbService.GetQueue();
    }
}
