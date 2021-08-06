import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';
import { ICellRendererParams } from '@ag-grid-community/core';
import { GridImgComponent } from './grid-img.component';

describe('GridImgComponent', () => {
  let component: GridImgComponent;
  let fixture: ComponentFixture<GridImgComponent>;
  const mockParams = {
    api: {
      getDisplayedRowCount: () => 50,
      getSelectedRows: () => new Array(50),
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridImgComponent],
    }).overrideTemplate(GridImgComponent, `<div></div>`);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('agInit() should init params', () => {
    component.agInit(mockParams as IStatusPanelParams);

    expect(component.params).toBeTruthy();
  });

  it('refresh() should return false', () => {
    component.refresh(mockParams as ICellRendererParams);

    expect(component.refresh(mockParams as ICellRendererParams)).toBeFalse();
  });
});
