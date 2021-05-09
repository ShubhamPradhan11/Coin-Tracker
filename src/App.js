import React from "react"
import {BrowserRouter as Router, Route, route} from 'react-router-dom'
import CoinsDetailsPage from './pages/CoinsDetailsPage'
import CoinsSummaryPage from './pages/CoinsSummaryPage'
import Header from "./components/Header"
import {WatchListContextProvider} from './components/WatchListContext'
import "./App.css"

function App() {
  return (
    <WatchListContextProvider>
      <Router>
        <Header/>
        <Route exact path='/' component={CoinsSummaryPage}></Route>
      </Router>
    </WatchListContextProvider>
  )
}

export default App
