import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SongDownloadItem } from 'src/app/models/song-download-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongDownloadService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getSongsDownloads() : Observable<SongDownloadItem[]> {
    return this.httpClient.get<SongDownloadItem[]>(environment.backendEndpoint + '/download', {
      withCredentials: true
    })
  }
}
