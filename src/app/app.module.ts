import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';
import { ArtistComponent } from './artists/artists.component';
import { LoginComponent } from './login/login.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { Mp3PlayerComponent } from './shared/components/mp3-player/mp3-player.component';
import { QueueComponent } from './queue/queue.component';
import { SettingsComponent } from './settings/settings.component';
import { SongsComponent } from './songs/songs.component';

import { DatabaseService } from './shared/services/database.service';

import { BackgroundImageDirective } from './shared/directives/background-image.directive';
import { PlaylistComponent } from './shared/components/playlist/playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongComponent } from './shared/components/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailComponent,
    ArtistComponent,
    LoginComponent,
    MyPlaylistComponent,
    Mp3PlayerComponent,
    QueueComponent,
    QueueComponent,
    SettingsComponent,
    SongsComponent,
    BackgroundImageDirective,
    PlaylistComponent,
    PlaylistsComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
