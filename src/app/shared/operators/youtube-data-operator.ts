import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function youtubeDateOperator() {
  return function <T>(source: Observable<T>) {
    return source.pipe(
      map((res) => {
        res.items.map((item) => {
          return {
            thumbnails: item.snippet.thumbnails.default.url,
            publishedAt: item.snippet.publishedAt,
            title: item.snippet.title,
            description: item.snippet.description,
            videoId: item.id.videoId,
          };
        });
      }),
    );
  };
}
