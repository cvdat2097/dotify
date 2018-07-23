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
        private currentSong: number = 0,
    ) { }

    AddSong(song: Song) {
        this.songs.push(song);
    }

    Remove(index: number) {
        this.songs.splice(index);
    }

    GetNextSong() {
        if (this.currentSong + 1 < this.songs.length) {
            this.currentSong++;
            return this.songs[this.currentSong];
        } else {
            return null;
        }
    }

    GetPreviousSong() {
        if (this.currentSong - 1 >= 0) {
            this.currentSong--;
            return this.songs[this.currentSong];
        } else {
            return null;
        }
    }
}
