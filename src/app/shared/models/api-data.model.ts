import { ApiItemModal } from './api-item.modal';

export interface ApiDataModel {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: object;
  items: ApiItemModal[];
}
