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
}
