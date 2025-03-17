import React, { useState, useEffect } from "react";
import { Sparkles, Users, ChevronRight } from "lucide-react";

const DominoScene = () => {
  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-w-screen min-h-screen bg-gray-900 overflow-hidden perspective-1000">
      {/* Background Layers */}
      <div
        className="relative w-full sm:max-w-sm md:max-w-md mx-auto min-h-screen bg-black overflow-hidden shadow-xl rounded-lg"
        style={{ aspectRatio: "9/16" }}
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400 via-transparent to-transparent animate-pulse"></div>
        </div>

        {/* 3D Space Container */}
        <div className="relative w-full sm:max-w-sm md:max-w-md mx-auto h-full preserve-3d">
          {/* Logo Animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`transform transition-all duration-1000 ${
                sequence === 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <div className="relative animate-logo-float">
                <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-amber-400 animate-pulse" />
                <div className="absolute inset-0 animate-ping-slow opacity-50">
                  <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Title Sequence */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center
          transform transition-all duration-1000 px-4 ${
            sequence === 1
              ? "translate-z-0 opacity-100"
              : "translate-z-96 opacity-0"
          }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 animate-title-reveal">
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                Hirecentive
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-violet-400 animate-subtitle-float">
              Social
            </h2>
          </div>

          {/* Domino Effect Animation */}
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 
          ${sequence === 2 ? "scale-100 opacity-100" : "scale-150 opacity-0"}`}
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-20 md:w-20 md:h-32 bg-gradient-to-br from-amber-400 to-violet-500"
                    style={{
                      transform: `rotate(${
                        i * 60
                      }deg) translateX(100px) rotateY(${
                        sequence === 2 ? 360 : 0
                      }deg)`,
                      transition: `transform 2s ease-in-out ${i * 0.2}s`,
                      transformOrigin: "center",
                      borderRadius: "8px",
                      boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)",
                    }}
                  >
                    <Users className="absolute inset-0 m-auto w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Text */}
          <div
            className={`absolute inset-0 flex items-center justify-center
          transform transition-all duration-1000 px-4 ${
            sequence === 3
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          >
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-cyan-400 mb-2 md:mb-4 animate-text-glow">
                One referral.
              </p>
              <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-amber-400 text-transparent bg-clip-text animate-text-reveal">
                Endless impact.
              </p>
              <p className="text-xl md:text-2xl text-violet-400 mt-2 md:mt-4 animate-hashtag-slide">
                #HirecentiveSocial
              </p>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Add required CSS classes
const style = {
  ".perspective-1000": {
    perspective: "1000px",
  },
  ".preserve-3d": {
    transformStyle: "preserve-3d",
  },
  ".translate-z-96": {
    transform: "translateZ(96px)",
  },
  "@keyframes logo-float": {
    "0%, 100%": {
      transform: "translateY(0) rotateZ(0deg)",
    },
    "50%": {
      transform: "translateY(-10px) rotateZ(5deg)",
    },
  },
  "@keyframes title-reveal": {
    from: {
      transform: "translateZ(-50px)",
      opacity: 0,
    },
    to: {
      transform: "translateZ(0)",
      opacity: 1,
    },
  },
  "@keyframes subtitle-float": {
    "0%, 100%": {
      transform: "translateY(0) scale(1)",
    },
    "50%": {
      transform: "translateY(-5px) scale(1.05)",
    },
  },
  "@keyframes text-glow": {
    "0%, 100%": {
      textShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
    },
    "50%": {
      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
    },
  },
  "@keyframes particle": {
    "0%": {
      transform: "translate(0, 0) scale(1)",
    },
    "50%": {
      transform: "translate(50px, -50px) scale(1.5)",
    },
    "100%": {
      transform: "translate(0, 0) scale(1)",
    },
  },
  "@keyframes hashtag-slide": {
    from: {
      transform: "translateX(-50%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  ".animate-logo-float": {
    animation: "logo-float 3s ease-in-out infinite",
  },
  ".animate-title-reveal": {
    animation: "title-reveal 1s ease-out forwards",
  },
  ".animate-subtitle-float": {
    animation: "subtitle-float 2s ease-in-out infinite",
  },
  ".animate-particle": {
    animation: "particle 5s ease-in-out infinite",
  },
  ".animate-text-glow": {
    animation: "text-glow 2s ease-in-out infinite",
  },
  ".animate-hashtag-slide": {
    animation: "hashtag-slide 1s ease-out forwards",
  },
  ".animate-ping-slow": {
    animation: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
  },
  ".animate-gradient-xy": {
    animation: "gradient-xy 15s ease infinite",
  },
  "@keyframes gradient-xy": {
    "0%, 100%": {
      backgroundPosition: "0% 0%",
    },
    "50%": {
      backgroundPosition: "100% 100%",
    },
  },
  "@keyframes ping": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "75%, 100%": {
      transform: "scale(2)",
      opacity: 0,
    },
  },
};

export default DominoScene;
