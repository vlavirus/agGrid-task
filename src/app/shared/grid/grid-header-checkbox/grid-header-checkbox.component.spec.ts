import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { GridHeaderCheckboxComponent } from './grid-header-checkbox.component';
import { SetOnToggleCheckboxState } from '../../../store/core.actions';

import {
  defaultMockStore,
  mockGridApiParams,
  mockGridRowParams,
} from '../../mock-test-data/mock-test-data.constant';

describe('GridHeaderCheckboxComponent', () => {
  let component: GridHeaderCheckboxComponent;
  let fixture: ComponentFixture<GridHeaderCheckboxComponent>;
  let mockStore: MockStore;
  const gridRowParams = mockGridRowParams;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridHeaderCheckboxComponent],
      providers: [provideMockStore(defaultMockStore)],
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

    expect(component.params).toBeTruthy();
  });

  it('onToggleCheckboxState() should dispatch SetOnToggleCheckboxState()', () => {
    const spyOnDispatch = spyOn(mockStore, 'dispatch');
    component.onToggleCheckboxState(true);

    expect(spyOnDispatch).toHaveBeenCalledWith(new SetOnToggleCheckboxState(true));
  });

  it('fieldsChange() should call selectAll() if called with true', () => {
    component.params = mockGridApiParams as unknown as IStatusPanelParams;
    component.fieldsChange(true);
    const spyOnSelect = jasmine.createSpy();
    component.params.api.selectAll = spyOnSelect;
    component.params.api.selectAll();

    expect(component.params.api.selectAll).toHaveBeenCalled();
  });

  it('fieldsChange() should call deselectAll() if called with false', () => {
    component.params = mockGridApiParams as unknown as IStatusPanelParams;
    component.fieldsChange(false);
    component.params.api.deselectAll = () => {};

    const spyOnDeselect = jasmine.createSpy();
    component.params.api.deselectAll = spyOnDeselect;
    component.params.api.deselectAll();

    expect(component.params.api.deselectAll).toHaveBeenCalled();
  });
});
