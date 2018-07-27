import { Component, Input } from '@angular/core';

import { Playlist } from '../../model/playlist';
import { Song } from '../../model/song';
import { PlaybackService } from '../../services/playback.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  @Input('playlist') playlist: Playlist; 
  
  constructor() {
   }
}
