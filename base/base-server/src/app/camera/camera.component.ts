import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colors = [
    {id: 1, value: 'Red 1'},
    {id: 2, value: 'Green 2'},
    {id: 3, value: 'Blue 3'}
  ]

  onChange($event: any) {
    console.log("You did something!")
  }

}