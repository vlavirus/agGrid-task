import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, first, map, startWith, switchMap } from 'rxjs/operators';

import { YoutubeApiService } from '../shared/services/youtube-api.service';
import { youtubeDataOperator } from '../shared/operators/youtube-data-operator';

import * as coreActions from './core.actions';
import { mockData } from '../shared/grid/mockData';

@Injectable()
export class CoreEffect {
  constructor(private actions$: Actions, private youTubeService: YoutubeApiService) {}

  loadingData$ = createEffect((): Observable<any> => {
    return this.actions$.pipe(
      ofType(coreActions.LOAD_GRID_ITEMS),
      startWith(new coreActions.LoadGridItems()),
      switchMap(() => {
        return this.youTubeService.getData().pipe(
          filter((res) => !!res),
          first(),
          youtubeDataOperator(),
          map((res) => {
            return new coreActions.LoadGridItemsSuccess(res);
          }),
          catchError(() =>
            of(mockData).pipe(
              filter((res) => !!res),
              first(),
              youtubeDataOperator(),
              map((res) => {
                return new coreActions.LoadGridItemsSuccess(res);
              }),
            ),
          ),
        );
      }),
    );
  });
}
