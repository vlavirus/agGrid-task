import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiTransformDataModel } from '../models/api-transform-data.model';
import { ApiItemModal } from '../models/api-item.modal';
import { ApiDataModel } from '../models/api-data.model';

export const youtubeDataOperator = () => <T>(source: Observable<ApiDataModel>): Observable<ApiTransformDataModel[]> => {
    return source.pipe(
      map((res: ApiDataModel) => {
        return res.items.map((item: ApiItemModal) => {
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
