
import React from 'react';
import {render} from 'react-dom';

import { hot } from 'react-hot-loader'
import Main from './Main'

// this component will be rendered by our <___Router>
const App = () => (
    <div>

      <Main />
    </div>
  )

  export default hot(module)(App)

// "use strict"

// import {createStore} from 'redux';

// const reducer = function(state,action){
//     switch(action.type){
//         case "INCREMENT":
//             return state + action.payload;
//         break;
//     }

//     return state
// }

// const store = createStore(reducer);

// store.subscribe(function(){
//     console.log('current state is ' + store.getState());
// })

// store.dispatch({type:"INCREMENT",payload: 1})

// render(<HelloWorld />, document.getElementById('app'))

// if (module.hot) {
//     module.hot.accept();
  
//    }

// console.log('axaassssssssssadsdasdsa');