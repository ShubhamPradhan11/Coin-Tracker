import React from 'react'
import {BrowserRouter as Router, Route, route} from 'react-router-dom'
import CoinsDetailsPage from './pages/CoinsDetailsPage'
import CoinsSummaryPage from './pages/CoinsSummaryPage'
import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={CoinsSummaryPage}></Route>
    </Router>
  )
}

export default App
