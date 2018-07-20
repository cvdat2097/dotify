import { Song } from './song';

export class Playlist {
    name: string;
    description: string;
    likes: number;
    playbackTimes: number;
    songs: Song[];
}
