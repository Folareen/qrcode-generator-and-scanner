import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GenerateCode from './pages/GenerateCode'
import Homepage from './pages/Homepage'
import ScanCode from './pages/ScanCode'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/generate-code' element={<GenerateCode/>} />
          <Route path='/scan-code' element={<ScanCode/>} />
        </Routes>
      </Router>
    )
  }
}
