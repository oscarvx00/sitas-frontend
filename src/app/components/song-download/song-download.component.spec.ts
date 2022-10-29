import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SongDownloadService } from 'src/app/services/song-download/song-download.service';

import { SongDownloadComponent } from './song-download.component';

describe('SongDownloadComponent', () => {
  let component: SongDownloadComponent;
  let fixture: ComponentFixture<SongDownloadComponent>;

  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
  let songDownloadServiceSpy = jasmine.createSpyObj('SongDownloadService', ['getSongsDownloads'])

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
    songDownloadServiceSpy = jasmine.createSpyObj('SongDownloadService', ['getSongsDownloads'])

    await TestBed.configureTestingModule({
      declarations: [ SongDownloadComponent ],
      providers: [
        {
          provide : Router,
          useValue: routerSpy
        },
        {
          provide: SongDownloadService,
          userValue: songDownloadServiceSpy
        }
      ],
      imports : [
        HttpClientTestingModule
      ]
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

  /*
  it('get downloads clicked', () => {

    

    component.getSongDownloads()

    expect(songDownloadServiceSpy.getSongsDownloads).toHaveBeenCalled()
  })*/

  it('go to search clicked', () => {


    component.goToSearchClicked()

    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];

    expect(navArgs).toEqual('/')
  })

});
