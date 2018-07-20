import { Playlist } from './playlist';
import { User } from './user';

export class Artist {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public categories: string[],
        public avatarURL: string,
        public albums: Playlist[] = [],
        public followers: User[] = []
    ) { }
}
