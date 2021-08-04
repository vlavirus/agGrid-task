import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { YoutubeApiService } from '../services/youtube-api.service';
import { GridComponent } from './grid.component';
import { statusBarConst } from './grid.constnts';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  const storeMock = jasmine.createSpyObj('Store', ['select']);
  storeMock.select.and.returnValue(
    of({
      toggleCheckboxView: true,
      gridItems: [],
      toggleCheckboxState: false,
    }),
  );
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({}, {})],
      declarations: [GridComponent],
      providers: [YoutubeApiService, { provide: Store, useValue: storeMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize rowSelection', () => {
    const app = fixture.componentInstance;

    expect(app.rowSelection).toEqual('multiple');
  });

  // it('should initialize columnDefs', () => {
  //   const app = fixture.componentInstance;
  //   expect(app.columnDefs).toEqual(columnDefsConst);
  // });

  it('should initialize statusBarConst', () => {
    const app = fixture.componentInstance;

    expect(app.statusBar).toEqual(statusBarConst);
  });

  // it('should return default videoTitleItems', () => {
  //   const app = fixture.componentInstance;
  //   const videoTitleItems = [
  //     'copy',
  //     'copyWithHeaders',
  //     'paste',
  //     'separator',
  //     'export'
  //   ];
  //   expect(app.getContextMenuItems()).toEqual(videoTitleItems);
  // });
});
