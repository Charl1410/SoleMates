import React from 'react';


export default function Hero () {
    return (
<div className="hero min-h-screen" style={{ backgroundImage: `url(https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Sole Mates</h1>
      <p className="mb-5">Welcome to Soul Mates where you can buy all your favourite brands </p>
      <button className="btn btn-secondary animate-bounce">Get Started</button>
    </div>
  </div>
</div>

      )

}