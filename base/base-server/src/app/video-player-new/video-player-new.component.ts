import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-video-player-new',
  templateUrl: './video-player-new.component.html',
  styleUrls: ['./video-player-new.component.scss']
})
export class VideoPlayerNewComponent implements OnInit {

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  triggerSnapshot(): void {
   this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
   console.info('received webcam image', webcamImage);
   this.webcamImage = webcamImage;
  }
 
  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
