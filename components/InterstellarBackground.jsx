'use client';

import { useEffect, useState } from 'react';

export default function InterstellarBackground() {
  const [stars, setStars] = useState([]);
  const [distantStars, setDistantStars] = useState([]);
  const [nebulaLayers, setNebulaLayers] = useState([]);

  useEffect(() => {
    // Generate realistic star field like real space
    const generateRealisticStars = () => {
      const starArray = [];
      const distantStarArray = [];
      
      // Generate main stars with natural distribution
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        const brightness = Math.random() > 0.8 ? Math.random() * 0.6 + 0.4 : Math.random() * 0.3 + 0.1;
        const size = brightness > 0.5 ? Math.random() * 1 + 0.4 : Math.random() * 0.5 + 0.2;
        
        let color = 'white';
        if (brightness > 0.7 && Math.random() > 0.9) color = 'blue';
        else if (brightness > 0.5 && Math.random() > 0.95) color = 'yellow';
        
        starArray.push({
          id: `star-${i}`,
          x,
          y,
          size,
          brightness,
          color
        });
      }
      
      // Generate distant background stars
      for (let i = 0; i < 500; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const brightness = Math.random() * 0.2 + 0.02; // Very faint
        const size = Math.random() * 0.4 + 0.1;
        
        distantStarArray.push({
          id: `distant-${i}`,
          x,
          y,
          size,
          brightness
        });
      }
      
      return { starArray, distantStarArray };
    };

    // Generate very subtle nebula layers
    const generateSubtleNebulaLayers = () => {
      return [
        {
          id: 'nebula1',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 20,
          opacity: 0.008,
          color: 'purple'
        },
        {
          id: 'nebula2',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 15,
          opacity: 0.006,
          color: 'blue'
        }
      ];
    };

    const { starArray, distantStarArray } = generateRealisticStars();
    const nebulaLayers = generateSubtleNebulaLayers();
    
    setStars(starArray);
    setDistantStars(distantStarArray);
    setNebulaLayers(nebulaLayers);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ zIndex: -1 }}>
      {/* Deep space background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Very subtle cosmic gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/5 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/2"></div>
      
      {/* Very subtle nebula layers */}
      {nebulaLayers.map((nebula) => {
        const getNebulaColor = () => {
          switch (nebula.color) {
            case 'purple': return 'rgba(147, 51, 234, 0.008)';
            case 'blue': return 'rgba(59, 130, 246, 0.006)';
            default: return 'rgba(147, 51, 234, 0.008)';
          }
        };
        
        return (
          <div
            key={nebula.id}
            className="absolute rounded-full"
            style={{
              left: `${nebula.x}%`,
              top: `${nebula.y}%`,
              width: `${nebula.size}vw`,
              height: `${nebula.size}vw`,
              background: `radial-gradient(circle, ${getNebulaColor()} 0%, transparent 70%)`,
              opacity: nebula.opacity,
              filter: 'blur(6px)'
            }}
          />
        );
      })}
      
      {/* Distant background stars */}
      {distantStars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.brightness,
            boxShadow: `0 0 ${star.size * 1.5}px rgba(255, 255, 255, ${star.brightness * 0.3})`
          }}
        />
      ))}

      {/* Main star field */}
      {stars.map((star) => {
        const getStarColor = () => {
          switch (star.color) {
            case 'blue': return 'rgba(147, 197, 253, 0.9)';
            case 'yellow': return 'rgba(253, 224, 71, 0.85)';
            default: return 'rgba(255, 255, 255, 0.95)';
          }
        };
        
        const starColor = getStarColor();
        const glowIntensity = star.brightness * 0.5;
        
        return (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: starColor,
              opacity: star.brightness,
              boxShadow: `0 0 ${star.size * 2}px ${starColor}, 0 0 ${star.size * 4}px ${starColor}${Math.floor(glowIntensity * 255).toString(16).padStart(2, '0')}`
            }}
          />
        );
      })}

      {/* Subtle cosmic dust */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }, (_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 0.8 + 0.2}px`,
              height: `${Math.random() * 0.8 + 0.2}px`,
              opacity: Math.random() * 0.08 + 0.01
            }}
          />
        ))}
      </div>

    </div>
  );
}

