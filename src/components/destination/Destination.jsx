import React from "react";
import "./Destination.css";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour give you the opportunity to see a lot, within a time frame.</p>      
      <DestinationData
      className="first-des"
      heading="Taj Mahal, Agra"
      text="The Taj Mahal is an Islamic ivory-white marble mausoleum on the
      right bank of the river Yamuna in the Indian city of Agra."
      img1="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      img2="https://images.unsplash.com/photo-1629200711355-e0cab993b5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      />
      <DestinationData
      className="first-des-reverse"
      heading="Baga Beach, Goa"
      text="The beach was pleasant but too crowded and little dirty. We went there to see sunset and really loved it. Took some good pictures and was there till evening, met some foreigners and talked to them until late evening."
      img1="https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      img2="https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />
    </div>
  );
}

export default Destination;
