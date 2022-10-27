import { TestBed } from '@angular/core/testing';

import { SongDownloadService } from './song-download.service';

describe('SongDownloadService', () => {
  let service: SongDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
