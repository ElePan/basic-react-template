import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
// .jsx no es necesario ya que hay "resolve" en webpack config que lo intenta

//esto es el primer archivo que se va a ejecutar

ReactDOM.render(<App />, document.getElementById('root'))
alert("test")
