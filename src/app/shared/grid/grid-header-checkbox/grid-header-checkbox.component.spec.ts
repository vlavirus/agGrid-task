import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { GridHeaderCheckboxComponent } from './grid-header-checkbox.component';

describe('GridHeaderCheckboxComponent', () => {
  let component: GridHeaderCheckboxComponent;
  let fixture: ComponentFixture<GridHeaderCheckboxComponent>;
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
      declarations: [GridHeaderCheckboxComponent],
      imports: [StoreModule.forRoot({}, {})],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHeaderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('input')).toBeTruthy();
  });
});
