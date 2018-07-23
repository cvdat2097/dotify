import { Injectable } from '@angular/core';
import { Playlist } from '../../model/playlist';
import { Song } from '../../model/song';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlaybackService {
    queue: Playlist = new Playlist(0, 'queue', 'Now playing...');
    myPlaylists: Playlist[] = [this.queue];
    songsToPlay: Subject<Song> = new Subject<Song>();

    constructor() {
    }

    // Observable
    AddToQueue(song: Song) {
        this.queue.AddSong(song);
    }

    SendToPlayer(song: Song) {
        this.songsToPlay.next(song);
    }

    GetSongsToPlay(): Observable<Song> {
        return this.songsToPlay.asObservable();
    }

    GetQueue() {
        return this.queue;
    }

    GetMyPlaylists() {
        return this.myPlaylists;
    }

    NextSong() {
        var song: Song = this.queue.GetNextSong();
        this.songsToPlay.next(song);
    }

    PreviousSong() {
        var song: Song = this.queue.GetPreviousSong();
       this.songsToPlay.next(song);
    }
}
