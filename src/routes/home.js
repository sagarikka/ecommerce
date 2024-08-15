import React from 'react'
import { Navbar } from '../components/navbar';
import { Header } from '../components/header';
import { Card } from '../components/card';

function Home() {
  return (
    <div  className='w-screen '>
       <Navbar/>
       <Header/>
       <Card/>
    </div>
  )
}

export default Home;
