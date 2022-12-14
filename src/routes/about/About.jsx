import React from 'react'
import Destination from '../../components/destination/Destination'
import Hero from '../../components/hero/Hero'


function About() {
  return (
    <div>
       <Hero
    cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    title="About"
    />
    <Destination/>
    </div>
  )
}

export default About