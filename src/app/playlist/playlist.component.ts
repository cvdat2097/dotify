import { Component, Input } from '@angular/core';

import { Playlist } from '../model/playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  @Input('playlist') playlist: Playlist; 
  
  constructor() { }

}
