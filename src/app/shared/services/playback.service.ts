import { Injectable } from '@angular/core';
import { Playlist } from '../../shared/model/playlist';
import { Song } from '../../shared/model/song';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlaybackService {
    queue: Playlist = new Playlist(0, 'queue', 'Now playing...');
    songsToPlay: Subject<Song> = new Subject<Song>();
    currentSong: number = -1;

    constructor() {
    }

    // Observable
    AddToQueue(song: Song, play: boolean = false) {
        // TODO - Bug: CurrentSong in queue
        if (this.queue.IsEmpty() || play) {

            this.SendToPlayer(song);
        }

        if (!this.queue.HaveSong(song)) {
            this.queue.AddSong(song);
        } else {
            if (play == false) {
                console.log('This song is currently in the queue');
            }
        }
    }

    SendToPlayer(song: Song) {
        this.songsToPlay.next(song);
        this.currentSong = this.queue.songs.indexOf(song);
    }

    GetSongsToPlay(): Observable<Song> {
        return this.songsToPlay.asObservable();
    }

    GetQueue() {
        return this.queue;
    }

    NextSong() {
        var song: Song = this.queue.GetSong(this.currentSong + 1)
        this.songsToPlay.next(song);

        if (song != null) {
            this.currentSong++;
        }
    }

    PreviousSong() {
        var song: Song = this.queue.GetSong(this.currentSong - 1);
        this.songsToPlay.next(song);

        if (song != null) {
            this.currentSong--;
        }
    }
}
