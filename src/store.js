import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myReducer from './reducers/reducer';

const store = createStore(myReducer, composeWithDevTools());

/* store.subscribe(() => {
  console.log('Dispatched something to the store')
});
store.dispatch(buyAcorn(store.getState().number))
console.log(store.getState());
store.dispatch(buyAcorn(store.getState().number))
console.log(store.getState());
store.dispatch(buyAcorn(store.getState().number))
console.log(store.getState());
store.dispatch(eatAcorn(store.getState().number))
console.log(store.getState()); */

export default store;