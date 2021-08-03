import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'YoutubeDataPipe' })
export class YoutubeDataPipe implements PipeTransform {

  constructor() {}

  transform(item: any): object {
    return {
      thumbnails: item.snippet.thumbnails.default.url,
      publishedAt: item.snippet.publishedAt,
      title: item.snippet.title,
      description: item.snippet.description,
      videoId: item.id.videoId,
    };
  }
}
