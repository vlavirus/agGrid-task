import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';

import { GridCountBarComponent } from './grid-count-bar.component';
import { mockGridRowParams } from '../../mock-test-data/mock-test-data.constant';

describe('GridCountBarComponent', () => {
  let component: GridCountBarComponent;
  let fixture: ComponentFixture<GridCountBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridCountBarComponent],
    }).overrideTemplate(GridCountBarComponent, `<div></div>`);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCountBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render visible', () => {
    const app = fixture.componentInstance;

    expect(app.visible).toBeTruthy();
  });

  it('agInit() should init params', () => {
    component.agInit(mockGridRowParams as IStatusPanelParams);

    expect(component.params).toBeTruthy();
  });

  it('setVisible() should assign false to visible', () => {
    component.setVisible(false);

    expect(component.visible).toBeFalse();
  });

  it('isVisible() should return visible equal true', () => {
    expect(component.isVisible()).toBeTruthy();
  });
});
