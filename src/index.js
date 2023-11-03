import React from 'react' 
import ReactDOM from 'react-dom/client' 
import App from './App'
import configureStore from './store/confireStore'
import {Provider} from 'react-redux' 

const store = configureStore() 

store.subscribe(() => {
    console.log('state updated',store.getState())
})
console.log('redux state',store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'))
const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)
root.render(ele)