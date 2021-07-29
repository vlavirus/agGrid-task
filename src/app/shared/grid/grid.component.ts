import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  columnDefs = [
    { field: 'thumbnails', headerName: 'image' },
    { field: 'publishedAt', headerName: 'Published on' },
    { field: 'title', headerName: 'Video Title' },
    { field: 'description', headerName: 'Description' },
  ];

  rowData$: Observable<any[]> | undefined;

  constructor(private apiService: YoutubeApiService) {}

  ngOnInit(): void {
    this.rowData$ = this.apiService.getData().pipe(
      map((res) =>
        res.items.map((item: any) => {
          return {
            thumbnails: item.snippet.thumbnails.default.url,
            publishedAt: item.snippet.publishedAt,
            title: item.snippet.title,
            description: item.snippet.description,
          };
        }),
      ),
    );
  }
}
