'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating Neural Particle Field
const NeuralParticles = () => {
  const ref = useRef();
  const count = 2500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

// Soft Floating Glow Nodes
const GlowNode = ({ position, color }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <color attach="background" args={['#0a0f24']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 5]} intensity={1.2} color="#00ffff" />
      <directionalLight position={[-4, -3, -2]} intensity={1} color="#ff66ff" />

      <NeuralParticles />
      <GlowNode position={[3, 2, -3]} color="#00ffff" />
      <GlowNode position={[-3, -1, -2]} color="#ff66ff" />
      <GlowNode position={[0, 3, -4]} color="#66b3ff" />
    </Canvas>
  );
};

export default Scene;


