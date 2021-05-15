import React from "react"
import {BrowserRouter as Router, Route, route} from 'react-router-dom'
import CoinsDetailsPage from './pages/CoinsDetailsPage'
import CoinsSummaryPage from './pages/CoinsSummaryPage'
import Header from "./components/Header"
import {WatchListContextProvider} from './components/WatchListContext'
import "./App.css"

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <Router>
          <Header/>
          <Route exact path='/' component={CoinsSummaryPage}></Route>
          {/* <Route exact path='/Coin/:id' component={CoinsDetailsPage}></Route> */}
        </Router>
      </WatchListContextProvider>
    </div>
  )
}

export default App
