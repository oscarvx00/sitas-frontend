import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongDownloadItem } from 'src/app/models/song-download-item.model';
import { SongDownloadService } from 'src/app/services/song-download/song-download.service';

@Component({
  selector: 'app-song-download',
  templateUrl: './song-download.component.html',
  styleUrls: ['./song-download.component.scss']
})
export class SongDownloadComponent implements OnInit {

  data : SongDownloadItem[] = [
    /*{
      name: 'test1',
      downloadId : 'id1'
    },
    {
      name: 'test2',
      downloadId: 'id2'
    }*/
  ]

  constructor(
    private songDownloadService : SongDownloadService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getSongDownloads()
  }

  getSongDownloads() {
    this.songDownloadService.getSongsDownloads().subscribe(apiData => {
      this.data = apiData
    })
  }

  goToSearchClicked() {
    this.router.navigateByUrl('/')
  }

}
