import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SongDownloadService } from './song-download.service';

describe('SongDownloadService', () => {
  let service: SongDownloadService;
  let httpTestingController : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.inject(SongDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check songs download received', () => {
    service.getSongsDownloads().subscribe(res => {})

    const req = httpTestingController.expectOne('http://localhost:8080/download')
    expect(req.request.method).toEqual('GET')

    httpTestingController.verify()
  })
});
