import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { GridHeaderCheckboxComponent } from './grid-header-checkbox.component';
import {IStatusPanelParams} from '@ag-grid-community/all-modules';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {SetOnToggleCheckboxState, SetOnToggleCheckboxView} from '../../../store/core.actions';
import {defaultMockStore, mockGridApiParams, mockGridRowParams} from '../../mock-test-data/mock-test-data.constant';

describe('GridHeaderCheckboxComponent', () => {
  let component: GridHeaderCheckboxComponent;
  let fixture: ComponentFixture<GridHeaderCheckboxComponent>;
  let mockStore: MockStore;
  const gridRowParams = mockGridRowParams;
  const gridApiParams = mockGridApiParams;
  // con
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridHeaderCheckboxComponent],
      providers: [
        provideMockStore(defaultMockStore)
      ],
    }).overrideTemplate(GridHeaderCheckboxComponent, `<input type="checkbox">`);
    mockStore = TestBed.inject(MockStore);
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
    expect(fixture.nativeElement.querySelector('input')).toBeTruthy();
  });

  it('agInit() should init params', () => {
    component.agInit(gridRowParams as IStatusPanelParams);

    expect(component['params']).toBeTruthy();
  });

  it('onToggleCheckboxState() should dispatch SetOnToggleCheckboxState()', () => {
    const spyOnDispatch = spyOn(mockStore, 'dispatch');
    component.onToggleCheckboxState(true);

    expect(spyOnDispatch).toHaveBeenCalledWith(new SetOnToggleCheckboxState(true));
  });

  // it('fieldsChange() should call selectAll()', () => {
  //   component.agInit(gridApiParams as unknown as IStatusPanelParams);
  //   component.fieldsChange(true);
  //   const spyOnApiCall = spyOnProperty(component, 'selectAll');
  //
  //   expect(component).toHaveBeenCalledWith(new SetOnToggleCheckboxState(true));
  // });
});
