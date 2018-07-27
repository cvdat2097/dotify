import { Component,Input, OnInit } from '@angular/core';
import { Song } from '../../shared/model/song';
import { PlaybackService } from '../../shared/services/playback.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input('song') song: Song;
  
  constructor(
    private pbService: PlaybackService,
    private mdService: ModalService
  ) { }

  ngOnInit() {
  }

  PlaySong(song: Song) {
    this.pbService.AddToQueue(song, true);
  }

  AddToQueue(song: Song) {
    this.pbService.AddToQueue(song);
  }

  AddToPlaylist(song: Song) {
    this.mdService.ShowModal('app-add-to-playlist', song);
}
}
