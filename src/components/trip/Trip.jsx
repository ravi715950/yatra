import './Trip.css'
import React from 'react'
import TripData from './TripData'

function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, eveniet aperiam ut quidem tempore exercitationem ani</p>
   <div className="tripcard">
    <TripData
    image="https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80"
    heading="Trip of Ladakh"
    text="Ladakh, the erstwhile Buddhist kingdom is spectacularly jagged. Arid mountains, dramatically crowned rocky outcrops, picturesque gompas, meditational mani walls and multi hued flags are few of the many sites that exemplify the beauty of Ladakh."
    />
    <TripData
    image="https://images.unsplash.com/photo-1634539132466-abaca3a2438b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    heading="Trip of Shimla"
    text="Snow-capped Himalayan peaks and green pastures surround Shimla, the capital of Himachal Pradesh. Enjoy a heritage walk through Shimla’s Victorian-era architecture, labyrinthine bazaars and lengthy pedestrian shopping mall."
    />
    <TripData
    image="https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8UmFqYXN0aGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    heading="Trip of Rajasthan"
    text="Translated to Land of Kings, Rajasthan brims with remnants of the kings and queens of past centuries. Between its glittering palaces, stately forts, and lively festivals, this western state deserves a starring role in your trip to India."
    />
   </div>
    </div>

  )
}

export default Trip