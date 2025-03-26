import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import ListDisplay from './components/ListDisplay';
import Total from './components/Total';
import produceData from './javascript/produceData';

function App() {
  produceData;


  return (
    <>
    <Header />
    <ListDisplay data={produceData}  produceData = {produceData}/>
    </>
  )
}

export default App
