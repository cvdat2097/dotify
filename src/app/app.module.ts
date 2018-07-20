import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistComponent } from './artists/artists.component';
import { LoginComponent } from './login/login.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { PlaybackBarComponent } from './playback-bar/playback-bar.component';
import { QueueComponent } from './queue/queue.component';
import { SettingsComponent } from './settings/settings.component';
import { SongsComponent } from './songs/songs.component';
import { SliderComponent } from './shared/forms/slider/slider.component';
import { SlideToggleComponent } from './shared/forms/slide-toggle/slide-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailComponent,
    ArtistComponent,
    LoginComponent,
    MyPlaylistComponent,
    PlaybackBarComponent,
    QueueComponent,
    QueueComponent,
    SettingsComponent,
    SongsComponent,
    SliderComponent,
    SlideToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
