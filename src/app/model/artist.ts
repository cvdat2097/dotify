import { Playlist } from './playlist';
import { User } from './user';

export class Artist {
    name: string;
    description: string;
    categories: string[];
    avatarURL: string;
    albums: Playlist[];
    followers: User[];
}
