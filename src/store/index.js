import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from "../reducers/index"

const initialState = {
}

const store = createStore(
  reducer, // Reducers
  initialState, // Estado inicial
  applyMiddleware(reduxThunk)
);
export default store;