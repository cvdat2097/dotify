import { Song } from './song';

export class Playlist {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public songs: Song[] = [],
        public avatarURL: string = "",
        public likes: number = 0,
        public playbackTimes: number = 0,
    ) { }

    AddSong(song: Song) {
        this.songs.push(song);
    }

    Remove(index: number) {
        this.songs.splice(index);
    }

    GetSong(id: number) {
        if (id < this.songs.length && id >= 0) {
            return this.songs[id];
        } else {
            return null;
        }
    }

    IsEmpty() {
        return this.songs.length == 0;
    }

    HaveSong(song: Song) {
        return this.songs.indexOf(song) != -1;
    } 
}
