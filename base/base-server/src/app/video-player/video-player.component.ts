import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor() { }

  videoRef:any;

  ngOnInit(): void {
    this.videoRef = document.getElementById('video');
    console.log(this.videoRef);
    this.setUpCamera();
  }

  setUpCamera() {
    navigator.mediaDevices.getUserMedia({
      video: {width: 800, height: 480},
      audio: false
    }).then(stram => {
      console.log(stram);
      this.videoRef.srcObject = stram;
    })
  }

}
