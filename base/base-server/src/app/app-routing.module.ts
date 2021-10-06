import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmComponent } from './arm/arm.component';
import { AutoComponent } from './auto/auto.component';
import { CameraComponent } from './camera/camera.component';
import { MainComponent } from './main/main.component';
import { TunerComponent } from './tuner/tuner.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'camera', component: CameraComponent },
  { path: 'tuner', component: TunerComponent },
  { path: 'arm', component: ArmComponent },
  { path: 'auto', component: AutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }