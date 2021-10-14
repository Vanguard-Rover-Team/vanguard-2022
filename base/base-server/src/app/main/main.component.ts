import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mode: ProgressBarMode = 'determinate';
  color: ThemePalette = 'primary'
  value = 50;
  sliderVal1 = 75;
  sliderVal2 = 50;

  sliderVal3 = 50;
  sliderVal4 = 50;

  latValue = '38.267730';
  lonValue = '-110.720120';

  constructor() { }

  resetControls() {
    this.sliderVal3 = 50;
    this.sliderVal4 = 50;
  }

  ngOnInit(): void {
  }

}
