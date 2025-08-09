'use client';

import { useEffect, useState } from 'react';

export default function InterstellarBackground() {
  const [stars, setStars] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate more stars for full background
    const starArray = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      animationDelay: Math.random() * 3,
      opacity: Math.random() * 0.8 + 0.2
    }));

    // Generate more floating particles for full coverage
    const particleArray = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 20 + 10,
      direction: Math.random() * 360
    }));

    setStars(starArray);
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden" style={{ zIndex: -1 }}>
      {/* Cosmic Background Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            opacity: star.opacity
          }}
        />
      ))}

      {/* Floating Cosmic Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-float opacity-40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.speed}s`,
            transform: `rotate(${particle.direction}deg)`
          }}
        />
      ))}

      {/* Multiple Nebula Effects */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-48 bg-gradient-radial from-purple-400/20 via-blue-500/10 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-cyan-300/30 via-purple-400/20 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <div className="w-64 h-64 bg-gradient-radial from-pink-400/15 via-blue-500/10 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-radial from-cyan-300/25 via-purple-400/15 to-transparent rounded-full animate-spin-reverse"></div>
      </div>



      {/* Large Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 border border-white/5 rounded-full animate-spin-reverse opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-300/10 rounded-full animate-spin-slow opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-300/8 rounded-full animate-spin-reverse opacity-20" style={{ animationDuration: '25s' }}></div>
      </div>

      {/* Corner Orbital Effects */}
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
        <div className="w-32 h-32 border border-white/10 rounded-full animate-spin-slow opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
        <div className="w-40 h-40 border border-purple-300/15 rounded-full animate-spin-reverse opacity-25"></div>
      </div>

      {/* Realistic Satellite - Diagonal Trajectory */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="satellite animate-satellite-trajectory">
          <div className="relative">
            {/* Simple Satellite Body */}
            <div className="w-4 h-2.5 bg-gradient-to-br from-gray-200 via-white to-gray-300 border border-gray-500 satellite-body rounded-sm">
              {/* Gold thermal coating */}
              <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-200/30 to-yellow-300/20 rounded-sm"></div>
            </div>
            
            {/* Left Solar Panel */}
            <div className="absolute top-0 left-0 w-1.5 h-5 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 transform -translate-x-2.5 -translate-y-1.25 border border-gray-400">
              {/* Solar cells grid */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-800/20 to-blue-700/30"></div>
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-400/50"></div>
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-400/50"></div>
            </div>
            
            {/* Right Solar Panel */}
            <div className="absolute top-0 right-0 w-1.5 h-5 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 transform translate-x-2.5 -translate-y-1.25 border border-gray-400">
              {/* Solar cells grid */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-800/20 to-blue-700/30"></div>
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-400/50"></div>
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-400/50"></div>
            </div>
            
            {/* Simple Antenna Dish */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
              <div className="w-1.5 h-1.5 bg-gradient-to-br from-white to-gray-300 rounded-full border border-gray-500"></div>
              <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Attitude Control Thrusters */}
            <div className="absolute top-0.5 left-0 w-0.5 h-0.5 bg-gradient-to-l from-gray-600 to-gray-500 transform -translate-x-1"></div>
            <div className="absolute top-2 left-0 w-0.5 h-0.5 bg-gradient-to-l from-gray-600 to-gray-500 transform -translate-x-1"></div>
            <div className="absolute top-0.5 right-0 w-0.5 h-0.5 bg-gradient-to-r from-gray-600 to-gray-500 transform translate-x-1"></div>
            <div className="absolute top-2 right-0 w-0.5 h-0.5 bg-gradient-to-r from-gray-600 to-gray-500 transform translate-x-1"></div>
            
            {/* Equipment Modules */}
            <div className="absolute top-0.5 left-0.5 w-1.5 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-500"></div>
            <div className="absolute top-2 right-0.5 w-1.5 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-500"></div>
            
            {/* Main Propulsion Thruster */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0.5">
              {/* Thruster Nozzle */}
              <div className="w-1 h-1 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-full border border-gray-500"></div>
              {/* Thruster Bell */}
              <div className="absolute top-0 left-1/2 w-1.5 h-0.5 bg-gradient-to-b from-gray-300 to-gray-500 transform -translate-x-1/2 -translate-y-0.5 rounded-t-sm"></div>
            </div>
            
            {/* Main Thruster Blue Flame */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
              {/* Core Flame */}
              <div className="w-0.5 h-3 bg-gradient-to-b from-white via-cyan-300 to-blue-500 opacity-90 animate-pulse thruster-flame"></div>
              {/* Outer Flame */}
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-gradient-to-b from-transparent via-blue-400/60 to-blue-600/40 transform -translate-x-1/2 animate-pulse thruster-flame-outer" style={{ animationDelay: '0.2s' }}></div>
              {/* Flame Flicker */}
              <div className="absolute top-0 left-1/2 w-1.5 h-5 bg-gradient-to-b from-transparent via-blue-300/30 to-blue-700/20 transform -translate-x-1/2 animate-pulse thruster-flame-flicker" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            {/* Smaller RCS Thrusters with Flames */}
            <div className="absolute top-0.5 left-0 transform -translate-x-0.5">
              <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-gradient-to-l from-orange-300 via-yellow-400 to-transparent transform -translate-x-1 -translate-y-1/2 opacity-60 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            </div>
            <div className="absolute top-1.5 left-0 transform -translate-x-0.5">
              <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-gradient-to-l from-orange-300 via-yellow-400 to-transparent transform -translate-x-1 -translate-y-1/2 opacity-60 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            </div>
            <div className="absolute top-0.5 right-0 transform translate-x-0.5">
              <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
              <div className="absolute top-0 right-1/2 w-1 h-1 bg-gradient-to-r from-orange-300 via-yellow-400 to-transparent transform translate-x-1 -translate-y-1/2 opacity-60 animate-pulse" style={{ animationDelay: '1.0s' }}></div>
            </div>
            <div className="absolute top-1.5 right-0 transform translate-x-0.5">
              <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
              <div className="absolute top-0 right-1/2 w-1 h-1 bg-gradient-to-r from-orange-300 via-yellow-400 to-transparent transform translate-x-1 -translate-y-1/2 opacity-60 animate-pulse" style={{ animationDelay: '1.4s' }}></div>
            </div>
            
            {/* Equipment Modules (Smaller) */}
            <div className="absolute top-0.5 left-0.5 w-1 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-500"></div>
            <div className="absolute top-1.5 right-0.5 w-1 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-500"></div>
            
            {/* Status/Navigation Lights (Smaller) */}
            <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-green-400 rounded-full animate-pulse satellite-light"></div>
            <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-red-400 rounded-full animate-pulse satellite-light" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0.5 left-1/2 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse satellite-light transform -translate-x-1/2" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>


    </div>
  );
}
