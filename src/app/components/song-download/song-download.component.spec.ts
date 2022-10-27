import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDownloadComponent } from './song-download.component';

describe('SongDownloadComponent', () => {
  let component: SongDownloadComponent;
  let fixture: ComponentFixture<SongDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
