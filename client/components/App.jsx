import React from 'react'
import { Route } from 'react-router-dom'

// import Components
import ExampleComponent from './ExampleComponent.jsx'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={ExampleComponent} />
    </div>
  )
}

export default App
