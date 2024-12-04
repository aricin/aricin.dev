import React from 'react';
// import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

const ConnectionIllustration = () => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className="w-full h-full text-accent"
    >
      {/* Background circles */}
      <circle cx="200" cy="200" r="160" fill="currentColor" fillOpacity="0.05" />
      <circle cx="200" cy="200" r="120" fill="currentColor" fillOpacity="0.05" />
      <circle cx="200" cy="200" r="80" fill="currentColor" fillOpacity="0.05" />

      {/* Connection lines */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M120,160 C160,180 240,160 280,200" strokeOpacity="0.3" />
        <path d="M140,220 C180,200 220,240 260,180" strokeOpacity="0.3" />
        <path d="M160,140 C200,220 240,180 270,220" strokeOpacity="0.3" />
      </g>

      {/* Connection points */}
      <g fill="currentColor">
        <circle cx="120" cy="160" r="8" />
        <circle cx="280" cy="200" r="8" />
        <circle cx="140" cy="220" r="8" />
        <circle cx="260" cy="180" r="8" />
        <circle cx="160" cy="140" r="8" />
        <circle cx="270" cy="220" r="8" />
      </g>

      {/* Pulse animations on key nodes */}
      <circle cx="120" cy="160" r="12" stroke="currentColor" strokeWidth="2" fill="none">
        <animate
          attributeName="r"
          from="8"
          to="16"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
        />
        <animate
          attributeName="opacity"
          from="0.6"
          to="0"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      <circle cx="270" cy="220" r="12" stroke="currentColor" strokeWidth="2" fill="none">
        <animate
          attributeName="r"
          from="8"
          to="16"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
        <animate
          attributeName="opacity"
          from="0.6"
          to="0"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
    </svg>
  );
};

// const InteractiveIllustration = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   // Calculate point positions relative to mouse
//   const calculatePoints = useCallback(() => {
//     const basePoints = [
//       { x: 100, y: 100 },
//       { x: 200, y: 150 },
//       { x: 300, y: 100 },
//       { x: 150, y: 250 },
//       { x: 250, y: 250 },
//     ];

//     if (!isHovering) return basePoints;

//     return basePoints.map(point => {
//       const dx = mousePosition.x - point.x;
//       const dy = mousePosition.y - point.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);
//       const maxDistance = 100;
//       const influence = Math.max(0, 1 - distance / maxDistance);
      
//       return {
//         x: point.x + dx * influence * 0.2,
//         y: point.y + dy * influence * 0.2,
//       };
//     });
//   }, [mousePosition, isHovering]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const points = calculatePoints();

//   // Create connection lines between points
//   const createConnections = () => {
//     return points.map((point, i) => 
//       points.slice(i + 1).map((otherPoint, j) => {
//         const distance = Math.sqrt(
//           Math.pow(point.x - otherPoint.x, 2) + 
//           Math.pow(point.y - otherPoint.y, 2)
//         );
//         const opacity = Math.max(0, 1 - distance / 200);
        
//         return (
//           <line
//             key={`${i}-${j}`}
//             x1={point.x}
//             y1={point.y}
//             x2={otherPoint.x}
//             y2={otherPoint.y}
//             stroke="currentColor"
//             strokeWidth="1"
//             strokeOpacity={opacity * 0.3}
//           />
//         );
//       })
//     );
//   };

//   return (
//     <svg 
//       viewBox="0 0 400 400"
//       className="w-full h-full text-accent"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Background circle */}
//       <circle 
//         cx="200" 
//         cy="200" 
//         r="180" 
//         fill="currentColor" 
//         fillOpacity="0.05"
//       />

//       {/* Connection lines */}
//       <g>{createConnections()}</g>

//       {/* Interactive points */}
//       {points.map((point, index) => (
//         <g key={index}>
//           <circle
//             cx={point.x}
//             cy={point.y}
//             r="8"
//             fill="currentColor"
//             fillOpacity="0.8"
//           />
//           <circle
//             cx={point.x}
//             cy={point.y}
//             r="16"
//             stroke="currentColor"
//             strokeWidth="1"
//             fill="none"
//             opacity="0.2"
//           >
//             <animate
//               attributeName="r"
//               values="16;20;16"
//               dur="2s"
//               repeatCount="indefinite"
//               begin={`${index * 0.4}s`}
//             />
//           </circle>
//         </g>
//       ))}
//     </svg>
//   );
// };

// const PhysicsGraph = () => {
//   const [nodes, setNodes] = useState([]);
//   const [isHovering, setIsHovering] = useState(false);
//   const animationFrameRef = useRef();
//   const lastTimeRef = useRef(Date.now());

//   // Initialize nodes with positions, velocities, and connections
//   useEffect(() => {
//     const initialNodes = [
//       { x: 150, y: 150, vx: 0, vy: 0, connections: [1, 4] },
//       { x: 250, y: 100, vx: 0, vy: 0, connections: [2] },
//       { x: 350, y: 150, vx: 0, vy: 0, connections: [3] },
//       { x: 300, y: 250, vx: 0, vy: 0, connections: [] },
//       { x: 200, y: 250, vx: 0, vy: 0, connections: [2] },
//       { x: 100, y: 200, vx: 0, vy: 0, connections: [] }
//     ];
//     setNodes(initialNodes);
//   }, []);

//   // Physics update function
//   const updatePhysics = useCallback((mouseX, mouseY) => {
//     const now = Date.now();
//     const deltaTime = (now - lastTimeRef.current) / 1000;
//     lastTimeRef.current = now;

//     setNodes(prevNodes => {
//       return prevNodes.map((node, i) => {
//         let ax = 0;
//         let ay = 0;

//         // Random motion
//         ax += (Math.random() - 0.5) * 50;
//         ay += (Math.random() - 0.5) * 50;

//         // Mouse influence
//         if (isHovering && mouseX && mouseY) {
//           const dx = mouseX - node.x;
//           const dy = mouseY - node.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           const influence = Math.max(0, 1 - dist / 150);
//           ax += dx * influence * 200;
//           ay += dy * influence * 200;
//         }

//         // Spring force to original position
//         const originalX = nodes[i]?.x || node.x;
//         const originalY = nodes[i]?.y || node.y;
//         ax += (originalX - node.x) * 2;
//         ay += (originalY - node.y) * 2;

//         // Damping
//         const damping = 0.95;
//         const newVx = (node.vx + ax * deltaTime) * damping;
//         const newVy = (node.vy + ay * deltaTime) * damping;

//         return {
//           ...node,
//           x: node.x + newVx * deltaTime,
//           y: node.y + newVy * deltaTime,
//           vx: newVx,
//           vy: newVy
//         };
//       });
//     });

//     animationFrameRef.current = requestAnimationFrame(() => 
//       updatePhysics(mouseX, mouseY)
//     );
//   }, [isHovering, nodes]);

//   useEffect(() => {
//     updatePhysics();
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [updatePhysics]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     updatePhysics(mouseX, mouseY);
//   };

//   return (
//     <svg 
//       viewBox="0 0 400 400"
//       className="w-full h-full text-accent"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Offset background circles */}
//       <circle cx="180" cy="190" r="160" fill="currentColor" fillOpacity="0.05" />
//       <circle cx="200" cy="200" r="120" fill="currentColor" fillOpacity="0.05" />
//       <circle cx="220" cy="210" r="80" fill="currentColor" fillOpacity="0.05" />

//       {/* Connection lines */}
//       {nodes.map((node, i) => 
//         node.connections.map(targetIndex => (
//           <line
//             key={`${i}-${targetIndex}`}
//             x1={node.x}
//             y1={node.y}
//             x2={nodes[targetIndex]?.x || 0}
//             y2={nodes[targetIndex]?.y || 0}
//             stroke="currentColor"
//             strokeWidth="1"
//             strokeOpacity="0.3"
//           />
//         ))
//       )}

//       {/* Nodes */}
//       {nodes.map((node, index) => (
//         <g key={index}>
//           {/* Base node */}
//           <circle
//             cx={node.x}
//             cy={node.y}
//             r="6"
//             fill="currentColor"
//             fillOpacity="0.8"
//           />
          
//           {/* Pulsing effect (random timing) */}
//           <circle
//             cx={node.x}
//             cy={node.y}
//             r="12"
//             stroke="currentColor"
//             strokeWidth="2"
//             fill="none"
//           >
//             <animate
//               attributeName="r"
//               values="8;16;8"
//               dur="3s"
//               repeatCount="indefinite"
//               begin={`${Math.random() * 3}s`}
//             />
//             <animate
//               attributeName="opacity"
//               values="0.6;0;0.6"
//               dur="3s"
//               repeatCount="indefinite"
//               begin={`${Math.random() * 3}s`}
//             />
//           </circle>
//         </g>
//       ))}
//     </svg>
//   );
// };

const SectionContact = () => {
  return (
    <Section className="pt-16">
      <Container className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">Get in Touch</h2>
            
            <p className="text-lg text-foreground mb-8">
              Ready to start your project? Let&apos;s discuss how I can help bring your ideas to life.
            </p>

            <Link 
              href="https://calendly.com/aricin/website-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center w-full md:w-auto bg-accent hover:bg-transparent hover:text-accent border border-accent text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-accent/20">
                Schedule a free consultation
                {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
              </button>
            </Link>

            <div className="flex flex-wrap mt-16 gap-8">
              <a 
                href="mailto:adrotarius@gmail.com"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                adrotarius@gmail.com
              </a>
              
              <a 
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
              >
                <FaLinkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Decorative Graphic */}
          {/* <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <svg 
              viewBox="0 0 200 200" 
              className="absolute inset-0 w-full h-full text-accent/10"
            >
              <path
                fill="currentColor"
                d="M40,-62.7C54.2,-56.1,69.6,-49.4,77.9,-37.5C86.2,-25.6,87.4,-8.5,85.1,7.8C82.8,24.1,77,39.6,66.7,51.4C56.4,63.2,41.6,71.3,26.1,74.9C10.7,78.5,-5.3,77.7,-20.6,73.4C-35.9,69.1,-50.4,61.3,-62.3,49.6C-74.2,37.9,-83.5,22.3,-85.6,5.3C-87.7,-11.8,-82.7,-30.2,-71.6,-43.2C-60.5,-56.2,-43.4,-63.7,-28.3,-69.9C-13.2,-76.2,-0.1,-81.2,11.8,-78.8C23.7,-76.4,47.4,-66.5,40,-62.7Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">👋</span>
            </div>
          </div> */}

          {/* Right Column - Animated Blob */}
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <ConnectionIllustration />
          </div>







        </div>
      </Container>
    </Section>
  );
};

export default SectionContact;