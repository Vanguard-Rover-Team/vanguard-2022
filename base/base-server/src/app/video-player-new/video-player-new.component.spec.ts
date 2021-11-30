import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerNewComponent } from './video-player-new.component';

describe('VideoPlayerNewComponent', () => {
  let component: VideoPlayerNewComponent;
  let fixture: ComponentFixture<VideoPlayerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayerNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
