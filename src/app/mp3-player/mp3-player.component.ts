import { Component, ViewChild, ElementRef } from '@angular/core';
import { Song } from '../model/song';
import { PlaybackService } from '../shared/services/playback.service';

@Component({
    selector: 'app-mp3-player',
    templateUrl: './mp3-player.component.html',
    styleUrls: ['./mp3-player.component.css'],
})

export class Mp3PlayerComponent {
    song: Song;
    volume: number = 80;
    isPlaying: boolean = false;
    @ViewChild('mp3File') mp3: ElementRef<HTMLAudioElement>;

    constructor(private pbService: PlaybackService) {
        this.pbService.GetSongsToPlay().subscribe(
            (song: Song) => {
                if (song != null) {
                    this.song = song;
                    this.mp3.nativeElement.src = song.fileURL;
                    this.Play();
                }
            }
        );
    }

    TogglePlay() {
        if (this.song) {
            if (this.isPlaying) {
                this.Pause();
            } else {
                this.Play();
            }
        }
    }

    Play() {
        this.isPlaying = true;
        this.mp3.nativeElement.volume = this.volume / 100;
        this.mp3.nativeElement.play();
    }

    Pause() {
        this.isPlaying = false;
        this.mp3.nativeElement.pause();
    }

    ChangeVolume(event: any) {
        this.mp3.nativeElement.volume = event.srcElement.value / 100;
    }

    NextSong() {
        this.pbService.NextSong();
    }

    PreviousSong() {
        this.pbService.PreviousSong();
    }
}
