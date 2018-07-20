import { Playlist } from './playlist';

export class User {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public name: string,
        public avatarURL: string,
        public playlists: Playlist[] = [],
    ) { }
}
