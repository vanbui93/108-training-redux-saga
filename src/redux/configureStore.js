import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './../reducers/index';

const configureStore = () => {
  const middlewares =[]
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};

export default configureStore;
//Đây là store
