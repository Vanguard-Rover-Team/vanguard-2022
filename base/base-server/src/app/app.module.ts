import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Angular Material Imports
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

//Video Player
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

//Leaflet


import { UiSwitchModule } from 'ngx-ui-switch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CameraComponent } from './camera/camera.component';
import { TunerComponent } from './tuner/tuner.component';
import { ArmComponent } from './arm/arm.component';
import { AutoComponent } from './auto/auto.component';
import { MainComponent } from './main/main.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CameraComponent,
    TunerComponent,
    ArmComponent,
    AutoComponent,
    MainComponent,
    BaseFormComponent,
    VideoPlayerComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatListModule,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,

    UiSwitchModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
