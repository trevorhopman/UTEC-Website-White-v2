"use client"

import { useEffect, useState } from "react"

export function OfficeEcosystem() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-full w-full">
      {/* CSS Keyframe Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes particle-flow {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -24; }
        }
        .float-1 { animation: float 6s ease-in-out infinite; }
        .float-2 { animation: float 7s ease-in-out infinite 0.5s; }
        .float-3 { animation: float-slow 8s ease-in-out infinite 1s; }
        .float-4 { animation: float 6.5s ease-in-out infinite 0.3s; }
        .float-5 { animation: float-slow 7.5s ease-in-out infinite 0.8s; }
        .float-6 { animation: float 5.5s ease-in-out infinite 0.2s; }
        .particle { 
          offset-path: path("M 300 240 C 180 200, 120 280, 140 380 C 160 450, 300 460, 380 420 C 480 370, 500 280, 420 200 C 360 140, 300 180, 300 240");
          animation: particle-flow 8s linear infinite;
        }
        .particle-2 { animation-delay: -2s; }
        .particle-3 { animation-delay: -4s; }
        .particle-4 { animation-delay: -6s; }
        .pulse-line { animation: pulse-soft 3s ease-in-out infinite; }
        .dash-animate { animation: dash-flow 2s linear infinite; }
      `}</style>
      
      <svg
        viewBox="0 0 600 520"
        className="h-full w-full"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="screenDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="deviceBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fafafa" />
            <stop offset="100%" stopColor="#e8e8e8" />
          </linearGradient>
          <linearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ED1E24" />
            <stop offset="100%" stopColor="#d11920" />
          </linearGradient>
          
          {/* Soft shadow */}
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.08" />
          </filter>
          <filter id="cardShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.06" />
          </filter>
          
          {/* Connection path for particles */}
          <path id="connectionPath" d="M 300 240 C 180 200, 120 280, 140 380 C 160 450, 300 460, 380 420 C 480 370, 500 280, 420 200 C 360 140, 300 180, 300 240" fill="none" />
        </defs>

        {/* Connection Lines - Subtle pulsing */}
        <g className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Main elliptical connection */}
          <ellipse
            cx="300"
            cy="300"
            rx="200"
            ry="130"
            fill="none"
            stroke="#ED1E24"
            strokeWidth="1"
            strokeDasharray="8 8"
            className="dash-animate pulse-line"
            opacity="0.3"
          />
          
          {/* Inner ring */}
          <ellipse
            cx="300"
            cy="300"
            rx="120"
            ry="80"
            fill="none"
            stroke="#ED1E24"
            strokeWidth="1"
            opacity="0.15"
          />
          
          {/* Radial connection lines to devices */}
          <line x1="300" y1="240" x2="150" y2="180" stroke="#ED1E24" strokeWidth="1" opacity="0.2" />
          <line x1="300" y1="240" x2="450" y2="160" stroke="#ED1E24" strokeWidth="1" opacity="0.2" />
          <line x1="300" y1="300" x2="120" y2="360" stroke="#ED1E24" strokeWidth="1" opacity="0.2" />
          <line x1="300" y1="300" x2="480" y2="380" stroke="#ED1E24" strokeWidth="1" opacity="0.2" />
          <line x1="300" y1="300" x2="300" y2="420" stroke="#ED1E24" strokeWidth="1" opacity="0.2" />
        </g>

        {/* Data Particles flowing along path */}
        <g className={`transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <circle r="4" fill="#ED1E24" className="particle" opacity="0.8" />
          <circle r="3" fill="#ED1E24" className="particle particle-2" opacity="0.6" />
          <circle r="4" fill="#ED1E24" className="particle particle-3" opacity="0.8" />
          <circle r="3" fill="#ED1E24" className="particle particle-4" opacity="0.6" />
        </g>

        {/* CENTER: Main Dashboard Monitor */}
        <g 
          className={`float-1 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "100ms" }}
          filter="url(#softShadow)"
        >
          {/* Monitor bezel */}
          <rect x="220" y="190" width="160" height="100" rx="6" fill="#1E1A1C" />
          
          {/* Screen */}
          <rect x="228" y="198" width="144" height="84" rx="3" fill="url(#screenDark)" />
          
          {/* Dashboard UI */}
          <g opacity="0.9">
            {/* Header bar */}
            <rect x="236" y="206" width="128" height="12" rx="2" fill="rgba(255,255,255,0.05)" />
            <circle cx="244" cy="212" r="3" fill="#ED1E24" />
            <rect x="252" y="210" width="40" height="4" rx="1" fill="rgba(255,255,255,0.3)" />
            
            {/* Main chart area */}
            <rect x="236" y="224" width="80" height="50" rx="2" fill="rgba(255,255,255,0.03)" />
            
            {/* Chart bars */}
            <rect x="244" y="254" width="8" height="16" rx="1" fill="#ED1E24" opacity="0.7" />
            <rect x="256" y="248" width="8" height="22" rx="1" fill="#ED1E24" opacity="0.85" />
            <rect x="268" y="258" width="8" height="12" rx="1" fill="#ED1E24" opacity="0.6" />
            <rect x="280" y="244" width="8" height="26" rx="1" fill="#ED1E24" />
            <rect x="292" y="252" width="8" height="18" rx="1" fill="#ED1E24" opacity="0.75" />
            
            {/* Side stats */}
            <rect x="324" y="224" width="40" height="22" rx="2" fill="rgba(255,255,255,0.05)" />
            <rect x="328" y="228" width="32" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
            <rect x="328" y="236" width="20" height="6" rx="1" fill="#22c55e" opacity="0.6" />
            
            <rect x="324" y="250" width="40" height="22" rx="2" fill="rgba(255,255,255,0.05)" />
            <rect x="328" y="254" width="32" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
            <rect x="328" y="262" width="26" height="6" rx="1" fill="#3b82f6" opacity="0.6" />
          </g>
          
          {/* Status indicator */}
          <circle cx="358" cy="206" r="4" fill="#22c55e" className="animate-pulse" />
          
          {/* Stand */}
          <rect x="280" y="290" width="40" height="8" rx="1" fill="#1E1A1C" />
          <rect x="270" y="298" width="60" height="4" rx="1" fill="#2a2a2a" />
          
          {/* Ground shadow */}
          <ellipse cx="300" cy="310" rx="70" ry="6" fill="rgba(0,0,0,0.06)" />
        </g>

        {/* TOP LEFT: Server/Network */}
        <g 
          className={`float-2 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"}`}
          style={{ transitionDelay: "200ms" }}
          filter="url(#softShadow)"
        >
          {/* Server body */}
          <rect x="100" y="140" width="70" height="80" rx="4" fill="url(#deviceBody)" />
          
          {/* Server slots */}
          <rect x="110" y="150" width="50" height="14" rx="2" fill="#1E1A1C" />
          <rect x="110" y="168" width="50" height="14" rx="2" fill="#1E1A1C" />
          <rect x="110" y="186" width="50" height="14" rx="2" fill="#1E1A1C" />
          
          {/* Status lights */}
          <circle cx="118" cy="208" r="3" fill="#ED1E24" className="animate-pulse" />
          <circle cx="128" cy="208" r="3" fill="#22c55e" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
          <circle cx="138" cy="208" r="3" fill="#22c55e" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
          
          {/* Ground shadow */}
          <ellipse cx="135" cy="225" rx="40" ry="5" fill="rgba(0,0,0,0.06)" />
        </g>

        {/* TOP RIGHT: Copier/Printer */}
        <g 
          className={`float-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"}`}
          style={{ transitionDelay: "300ms" }}
          filter="url(#softShadow)"
        >
          {/* Main body */}
          <rect x="420" y="120" width="90" height="65" rx="4" fill="url(#deviceBody)" />
          
          {/* Top lid - red accent */}
          <rect x="420" y="120" width="90" height="12" rx="4" fill="url(#redAccent)" />
          
          {/* Control panel */}
          <rect x="430" y="140" width="30" height="20" rx="2" fill="url(#screenDark)" />
          <rect x="434" y="144" width="22" height="12" rx="1" fill="#3b82f6" opacity="0.3" />
          
          {/* Buttons */}
          <circle cx="475" cy="150" r="4" fill="#22c55e" className="animate-pulse" />
          <rect x="484" y="145" width="16" height="10" rx="2" fill="#e0e0e0" />
          
          {/* Paper tray */}
          <rect x="420" y="185" width="90" height="16" rx="2" fill="#f5f5f5" />
          <rect x="426" y="188" width="78" height="10" rx="1" fill="white" />
          
          {/* Ground shadow */}
          <ellipse cx="465" cy="210" rx="50" ry="5" fill="rgba(0,0,0,0.06)" />
        </g>

        {/* BOTTOM LEFT: AV Display */}
        <g 
          className={`float-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "400ms" }}
          filter="url(#softShadow)"
        >
          {/* Display frame */}
          <rect x="70" y="340" width="100" height="60" rx="3" fill="#1E1A1C" />
          
          {/* Screen */}
          <rect x="76" y="346" width="88" height="48" rx="2" fill="url(#screenDark)" />
          
          {/* Video preview */}
          <rect x="82" y="352" width="76" height="36" fill="#ED1E24" opacity="0.15" />
          
          {/* Play button */}
          <circle cx="120" cy="370" r="12" fill="rgba(255,255,255,0.1)" />
          <polygon points="116,364 116,376 128,370" fill="white" opacity="0.8" />
          
          {/* Stand */}
          <rect x="105" y="400" width="30" height="3" rx="1" fill="#666" />
          <polygon points="110,403 130,403 125,418 115,418" fill="#555" />
          
          {/* Ground shadow */}
          <ellipse cx="120" cy="425" rx="45" ry="5" fill="rgba(0,0,0,0.06)" />
        </g>

        {/* BOTTOM CENTER: Laptop */}
        <g 
          className={`float-5 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "500ms" }}
          filter="url(#softShadow)"
        >
          {/* Screen (angled) */}
          <path d="M 260 390 L 275 360 L 365 360 L 350 390 Z" fill="#1E1A1C" />
          <path d="M 264 387 L 278 362 L 362 362 L 347 387 Z" fill="url(#screenDark)" />
          
          {/* Screen content */}
          <path d="M 270 383 L 282 365 L 358 365 L 344 383 Z" fill="#ED1E24" opacity="0.1" />
          <path d="M 295 378 L 302 368 L 340 368 L 332 378 Z" fill="rgba(255,255,255,0.2)" />
          
          {/* Keyboard base */}
          <path d="M 250 395 L 260 390 L 350 390 L 360 395 L 368 425 L 242 425 Z" fill="url(#deviceBody)" />
          
          {/* Keyboard simplified */}
          <rect x="258" y="400" width="92" height="4" rx="1" fill="#e0e0e0" />
          <rect x="260" y="408" width="88" height="4" rx="1" fill="#e0e0e0" />
          <rect x="280" y="416" width="48" height="4" rx="1" fill="#d8d8d8" />
          
          {/* Ground shadow */}
          <ellipse cx="305" cy="432" rx="60" ry="5" fill="rgba(0,0,0,0.06)" />
        </g>

        {/* BOTTOM RIGHT: WiFi Router */}
        <g 
          className={`float-6 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "600ms" }}
          filter="url(#softShadow)"
        >
          {/* Router body */}
          <rect x="450" y="370" width="70" height="22" rx="4" fill="url(#deviceBody)" />
          
          {/* Red accent line */}
          <rect x="450" y="370" width="70" height="5" rx="4" fill="url(#redAccent)" />
          
          {/* Antennas */}
          <rect x="460" y="348" width="3" height="22" rx="1.5" fill="#1E1A1C" />
          <rect x="478" y="344" width="3" height="26" rx="1.5" fill="#1E1A1C" />
          <rect x="507" y="348" width="3" height="22" rx="1.5" fill="#1E1A1C" />
          
          {/* Status lights */}
          <circle cx="462" cy="382" r="2" fill="#22c55e" className="animate-pulse" />
          <circle cx="472" cy="382" r="2" fill="#22c55e" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
          <circle cx="482" cy="382" r="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
          
          {/* WiFi signal */}
          <g stroke="#ED1E24" strokeWidth="1.5" fill="none" opacity="0.5">
            <path d="M 496 360 Q 508 352 520 360" className="animate-pulse" />
            <path d="M 499 365 Q 508 360 517 365" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
          </g>
          
          {/* Ground shadow */}
          <ellipse cx="485" cy="398" rx="40" ry="4" fill="rgba(0,0,0,0.06)" />
        </g>

        {/* Shield/Security indicator */}
        <g 
          className={`float-2 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
          filter="url(#cardShadow)"
        >
          <rect x="480" y="250" width="70" height="45" rx="8" fill="white" />
          <path d="M 500 262 L 500 272 C 500 278 504 282 510 284 C 516 282 520 278 520 272 L 520 262 L 510 258 Z" fill="none" stroke="#ED1E24" strokeWidth="1.5" />
          <path d="M 506 271 L 509 274 L 516 267" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="495" y="287" fontSize="8" fill="#666" fontWeight="500">Secured</text>
        </g>

        {/* Devices count card */}
        <g 
          className={`float-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "800ms" }}
          filter="url(#cardShadow)"
        >
          <rect x="50" y="270" width="70" height="45" rx="8" fill="white" />
          <rect x="58" y="278" width="8" height="8" rx="2" fill="#3b82f6" />
          <text x="58" y="300" fontSize="8" fill="#666">Devices</text>
          <text x="58" y="310" fontSize="11" fill="#1E1A1C" fontWeight="600">24 Online</text>
        </g>

        {/* Central pulse - heartbeat */}
        <g className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <circle cx="300" cy="300" r="20" fill="#ED1E24" opacity="0.05" className="animate-ping" />
          <circle cx="300" cy="300" r="12" fill="#ED1E24" opacity="0.1" className="animate-pulse" />
          <circle cx="300" cy="300" r="6" fill="#ED1E24" opacity="0.6" />
        </g>
      </svg>
    </div>
  )
}
