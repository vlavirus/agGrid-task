import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YoutubeApiService } from './youtube-api.service';
import {HttpClient} from '@angular/common/http';
import {mockData} from '../grid/mockData';
import {of} from 'rxjs';

describe('YoutubeApiService', () => {
  let service: YoutubeApiService;

  const mockHttpClient = jasmine.createSpyObj('httpClient', ['getData']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient
      ]
    });
    service = TestBed.inject(YoutubeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getData() should return data by apiUrl', (done) => {
    mockHttpClient.getData.and.returnValue(of(mockData));
    service.getData();
    mockHttpClient.getData().subscribe((data: any) => {
      expect(data).toEqual(mockData);
      done();
    });
  });
});
