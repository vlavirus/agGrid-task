import { ApiThumbnailsModel } from './api-thumbnails.model';

export interface ApiItemModal {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: Date | string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ApiThumbnailsModel;
      medium: ApiThumbnailsModel;
      high: ApiThumbnailsModel;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date | string;
  };
}
