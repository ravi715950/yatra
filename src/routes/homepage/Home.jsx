import React from 'react'
import taj from '../../images/taj2.jpg'
import Destination from '../../components/destination/Destination'
import Hero from '../../components/hero/Hero'
import Trip from '../../components/trip/Trip'


function Home() {
  return (
    <>
    <Hero
    cName="hero"
    heroImg={taj}
    title="DO COME & VISIT"
    heading="Welcome To India"
    content="change_content"
    text="India once is not enough"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
 
    </>
  )
}

export default Home