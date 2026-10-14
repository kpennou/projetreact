import { useState } from 'react'
import './App.css'
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {

  return (
    <>
      <Image />
      <Name />
      <Description />
      <Price />
    </>
  )
}

export default App
