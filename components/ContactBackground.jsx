'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, Stars } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function TechPoints() {
  const pointsRef = useRef();
  const particles = new Float32Array(5000 * 3);

  for (let i = 0; i < 5000; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0015;
      pointsRef.current.rotation.x += 0.001;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
      <PointMaterial
        color="#00bfff" // solid blue
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function ContactBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Suspense fallback={null}>
          {/* Glowing tech nodes */}
          <TechPoints />

          {/* Optional subtle starfield for depth */}
          <Stars radius={150} depth={50} count={2000} factor={4} fade />

          <OrbitControls enableZoom={false} enableRotate={false} />
        </Suspense>
      </Canvas>

      {/* Overlay gradient blending solid blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/50 to-blue-700/90 mix-blend-overlay" />
    </div>
  );
}

