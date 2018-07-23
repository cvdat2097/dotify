import { Injectable, OnInit } from '@angular/core';

import { Artist } from '../../model/artist';
import { Playlist } from '../../model/playlist';
import { Song } from '../../model/song';
import { User } from '../../model/user';
import { Subject, Observable } from 'rxjs';

class MyClass {
    constructor(public name: string) { }
}

@Injectable({
    providedIn: 'root',
})

export class DatabaseService{
    dbSong: Song[] = [];
    dbPlaylist: Playlist[] = [];
    dbUser: User[] = [];
    dbArtist: Artist[] = [];
    queue: Playlist = new Playlist(0, 'queue', 'Now playing songs');
    

    constructor() {
        this.FetchData();
        
    }


    // Getters
    GetSongs() {
        return this.dbSong;
    }
    GetSong(id: number) {
        return this.dbSong[id - 1];
    }

    GetPlaylists() {
        return this.dbPlaylist;
    }
    GetPlaylist(id: number) {
        return this.dbPlaylist[id - 1];
    }

    GetUsers() {
        return this.dbUser;
    }
    GetUser(id: number) {
        return this.dbUser[id - 1];
    }

    GetArtists() {
        return this.dbArtist;
    }
    GetArtist(id: number) {
        return this.dbArtist[id - 1];
    }

    FetchData() {
        this.dbSong = [
            new Song(1, 'Vai lan don dua', '365 Band', '/assets/mp3/vai-lan-don-dua.mp3'),
            new Song(2, 'Treat you better', 'Shawn Mendes', '/assets/mp3/treat-you-better.mp3'),
            new Song(3, 'Hon Anh', 'Trang - Khoa Vu', '/assets/mp3/hon-anh.mp3'),
            new Song(4, 'Meow Meow Meow', 'Unknown', '/assets/mp3/meow-meow-meow.mp3'),
        ];

        this.dbPlaylist = [
            new Playlist(1, 'Playlist 1', 'Short description', [this.dbSong[0], this.dbSong[3]], 'assets/images/albums/1.jpg'),
            new Playlist(2, 'Playlist 2', 'Short description', [this.dbSong[1], this.dbSong[3]], 'assets/images/albums/1.jpg'),
            new Playlist(3, 'Playlist 3', 'Short description', [this.dbSong[0], this.dbSong[2]], 'assets/images/albums/1.jpg'),
            new Playlist(4, 'Playlist 4', 'Short description', [this.dbSong[2], this.dbSong[3]], 'assets/images/albums/1.jpg'),
            new Playlist(5, 'Playlist 5', 'Short description', [this.dbSong[1], this.dbSong[2]], 'assets/images/albums/1.jpg'),
        ];

        this.dbUser = [
            new User(1, 'user1', '123', 'Nguyen Van A', '#', [this.dbPlaylist[0], this.dbPlaylist[2]]),
            new User(2, 'user2', '123', 'Nguyen Van B', '#', [this.dbPlaylist[1], this.dbPlaylist[3], this.dbPlaylist[3], this.dbPlaylist[3]]),
            new User(3, 'user3', '123', 'Nguyen Van C', '#', [this.dbPlaylist[2], this.dbPlaylist[1]]),
            new User(4, 'user4', '123', 'Nguyen Van D', '#', [this.dbPlaylist[3], this.dbPlaylist[0]]),
        ];

        this.dbArtist = [
            new Artist(1, 'Jason Derulo',
                'Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding',
                ['Jazz', 'House', 'Country'],
                'assets/images/artists/1.jpg',
                [this.dbPlaylist[0], this.dbPlaylist[1], this.dbPlaylist[3]],
                [this.dbUser[0], this.dbUser[2], this.dbUser[3]]
            ),
            new Artist(2, 'Keane',
                'Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding',
                ['Jazz', 'House', 'Country'],
                'assets/images/artists/2.jpg',
                [this.dbPlaylist[1], this.dbPlaylist[1], this.dbPlaylist[3]],
                [this.dbUser[0], this.dbUser[2], this.dbUser[3]]
            ),
            new Artist(3, 'Lecrea Gravity',
                'Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding',
                ['Jazz', 'House', 'Country'],
                'assets/images/artists/3.jpg',
                [this.dbPlaylist[2], this.dbPlaylist[1], this.dbPlaylist[3]],
                [this.dbUser[0], this.dbUser[2], this.dbUser[3]]
            ),
            new Artist(4, 'King of the mood',
                'Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding',
                ['Jazz', 'House', 'Country'],
                'assets/images/artists/4.jpg',
                [this.dbPlaylist[3], this.dbPlaylist[1], this.dbPlaylist[3]],
                [this.dbUser[0], this.dbUser[2], this.dbUser[3]]
            ),
            new Artist(5, 'Mark Ronson',
                'Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding',
                ['Jazz', 'House', 'Country'],
                'assets/images/artists/5.jpg',
                [this.dbPlaylist[2], this.dbPlaylist[1], this.dbPlaylist[3]],
                [this.dbUser[0], this.dbUser[2], this.dbUser[3]]
            ),
        ];
    }
}
