import { Component } from '@angular/core';

import { Playlist } from '../shared/model/playlist';
import { PlaybackService } from '../shared/services/playback.service';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css'],
})

export class QueueComponent {
    queue: Playlist;

    constructor(pbService: PlaybackService) {
        this.queue = pbService.GetQueue();
    }
}
