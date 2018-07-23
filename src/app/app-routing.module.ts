import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { LoginComponent } from './login/login.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { QueueComponent } from './queue/queue.component';
import { SettingsComponent } from './settings/settings.component';
import { SongsComponent } from './songs/songs.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
    { path: '', redirectTo: '/artists', pathMatch: 'full' },
    { path: 'artists', component: ArtistComponent },
    { path: 'artists/detail', component: ArtistDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'my-playlist', component: MyPlaylistComponent },
    { path: 'queue', component: QueueComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'songs', component: SongsComponent },
    { path: 'playlists', component: PlaylistsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
