import jargonsReducer from '../src/reducers/slices/jargon.slice';
import { addFetchedData } from '../src/reducers/actions/jargon.action';

test('Add Fetched Terms action', () => {
    const jargons = ['a','b','c'];
    const state = [];
    const newState = jargonsReducer(state, addFetchedData(jargons));

    expect(newState).toEqual(jargons);
})