import { Playlist } from './playlist';

export class User {
    username: string;
    password: string;
    name: string;
    avatarURL: string;
    playlists: Playlist[];
}
