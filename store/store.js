import {createStore} from 'redux';
import usersReducer from '../src/reducers/users';

const store = createStore(usersReducer);

store.subscribe(()=>{
    console.log('Store Data: ', store.getState());
})

export default store;