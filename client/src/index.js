import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import App from './components/App'
import sidebar from './reducers/sidebar'
import help from './reducers/help'
import theme from './reducers/theme'
import picture from './reducers/picture'
import error from './reducers/error'
import control from './reducers/control'

const reducer = combineReducers({
  sidebar,
  help,
  theme,
  picture,
  error,
  control
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
