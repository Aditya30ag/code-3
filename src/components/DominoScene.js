import React, { useState, useEffect } from 'react';
import { Sparkles, Users, ChevronRight } from 'lucide-react';

const DominoScene = () => {
  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square bg-black overflow-hidden perspective-1000">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-cyan-400/20 to-amber-400/20 animate-gradient-xy" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      {/* 3D Space Container */}
      <div className="relative w-full h-full preserve-3d">
        {/* Logo Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`transform transition-all duration-1000 ${
            sequence === 0 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="relative animate-logo-float">
              <Sparkles className="w-24 h-24 text-amber-400 animate-pulse" />
              <div className="absolute inset-0 animate-ping-slow opacity-50">
                <Sparkles className="w-24 h-24 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Title Sequence */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center
          transform transition-all duration-1000 ${
            sequence === 1 ? 'translate-z-0 opacity-100' : 'translate-z-96 opacity-0'
          }`}>
          <h1 className="text-6xl font-bold mb-4 animate-title-reveal">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Hirecentive
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-violet-400 animate-subtitle-float">
            Social
          </h2>
        </div>

        {/* Domino Effect Animation */}
        <div className={`absolute inset-0 flex items-center justify-center
          transform transition-all duration-1000 ${
            sequence === 2 ? 'scale-100 opacity-100' : 'scale-150 opacity-0'
          }`}>
          <div className="relative w-96 h-96">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-20 h-32 bg-gradient-to-br from-amber-400 to-violet-500"
                style={{
                  transform: `rotate(${i * 60}deg) translateX(150px) rotateY(${sequence === 2 ? 360 : 0}deg)`,
                  transition: `transform 2s ease-in-out ${i * 0.2}s`,
                  transformOrigin: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)'
                }}
              >
                <Users className="absolute inset-0 m-auto w-12 h-12 text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Impact Text */}
        <div className={`absolute inset-0 flex items-center justify-center
          transform transition-all duration-1000 ${
            sequence === 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-4 animate-text-glow">
              One referral.
            </p>
            <p className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-amber-400 text-transparent bg-clip-text animate-text-reveal">
              Endless impact.
            </p>
            <p className="text-2xl text-violet-400 mt-4 animate-hashtag-slide">
              #HirecentiveSocial
            </p>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Add required CSS classes
const style = {
  '.perspective-1000': {
    perspective: '1000px'
  },
  '.preserve-3d': {
    transformStyle: 'preserve-3d'
  },
  '.translate-z-96': {
    transform: 'translateZ(96px)'
  },
  '@keyframes logo-float': {
    '0%, 100%': {
      transform: 'translateY(0) rotateZ(0deg)'
    },
    '50%': {
      transform: 'translateY(-20px) rotateZ(5deg)'
    }
  },
  '@keyframes title-reveal': {
    from: {
      transform: 'translateZ(-100px)',
      opacity: 0
    },
    to: {
      transform: 'translateZ(0)',
      opacity: 1
    }
  },
  '@keyframes subtitle-float': {
    '0%, 100%': {
      transform: 'translateY(0) scale(1)'
    },
    '50%': {
      transform: 'translateY(-10px) scale(1.1)'
    }
  },
  '@keyframes text-glow': {
    '0%, 100%': {
      textShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
    },
    '50%': {
      textShadow: '0 0 40px rgba(6, 182, 212, 0.8)'
    }
  },
  '@keyframes particle': {
    '0%': {
      transform: 'translate(0, 0) scale(1)'
    },
    '50%': {
      transform: 'translate(100px, -100px) scale(2)'
    },
    '100%': {
      transform: 'translate(0, 0) scale(1)'
    }
  },
  '@keyframes hashtag-slide': {
    from: {
      transform: 'translateX(-100%)',
      opacity: 0
    },
    to: {
      transform: 'translateX(0)',
      opacity: 1
    }
  },
  '.animate-logo-float': {
    animation: 'logo-float 3s ease-in-out infinite'
  },
  '.animate-title-reveal': {
    animation: 'title-reveal 1s ease-out forwards'
  },
  '.animate-subtitle-float': {
    animation: 'subtitle-float 2s ease-in-out infinite'
  },
  '.animate-particle': {
    animation: 'particle 5s ease-in-out infinite'
  },
  '.animate-text-glow': {
    animation: 'text-glow 2s ease-in-out infinite'
  },
  '.animate-hashtag-slide': {
    animation: 'hashtag-slide 1s ease-out forwards'
  }
};

export default DominoScene;
