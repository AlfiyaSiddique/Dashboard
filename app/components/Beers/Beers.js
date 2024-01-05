"use client";
import React from "react";

const Beers = ({ beers }) => {
  return (
      beers ? (
        beers.map((beer, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center p-4" style={{width: "18rem"}}>
              <img className="card-img-top object-contain h-48 rounded" src={beer.image_url} alt={beer.name} />
              <div className="card-body text-center flex flex-col p-4">
                <h5 className="card-title my-2">{beer.name}</h5>
                <p className="card-text"> {beer.tagline}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Beers availalible !!</p>
      )
  );
};

export default Beers;
