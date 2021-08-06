import * as coreActions from './core.actions';
import { coreReducer, INIT_STATE } from './core.reducer';
import { mockGridItem } from '../shared/mock-test-data/mock-test-data.constant';

describe('Core State', () => {
  it('SetOnToggleCheckboxView() should change toggleCheckboxView to opposite value', () => {
    const action = new coreActions.SetOnToggleCheckboxView();
    const expected = coreReducer(INIT_STATE, action);

    expect(expected.toggleCheckboxView).toBeFalsy();
  });

  it('SetOnToggleCheckboxState() should set toggleCheckboxState from payload', () => {
    const action = new coreActions.SetOnToggleCheckboxState(true);
    const expected = coreReducer(INIT_STATE, action);

    expect(expected.toggleCheckboxState).toBeTruthy();
  });

  it('LoadGridItemsSuccess() should set grid items from payload', () => {
    const action = new coreActions.LoadGridItemsSuccess([mockGridItem]);
    const expected = coreReducer(INIT_STATE, action);

    expect(expected.gridItems).toEqual([mockGridItem]);
  });
});
