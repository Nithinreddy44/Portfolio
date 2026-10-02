import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHasWebGL(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // 1. Core Neural Geometry (Icosahedron nodes & connecting synaptic edges)
    const group = new THREE.Group();
    scene.add(group);

    // Inner glowing ring
    const innerTorusGeom = new THREE.TorusGeometry(1.6, 0.02, 16, 100);
    const innerTorusMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
      wireframe: false
    });
    const innerTorus = new THREE.Mesh(innerTorusGeom, innerTorusMat);
    group.add(innerTorus);

    // Secondary tilted neural ring
    const outerTorusGeom = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const outerTorusMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.45
    });
    const outerTorus = new THREE.Mesh(outerTorusGeom, outerTorusMat);
    outerTorus.rotation.x = Math.PI / 3;
    outerTorus.rotation.y = Math.PI / 6;
    group.add(outerTorus);

    // 2. Synaptic Wireframe Shell
    const icosaGeom = new THREE.IcosahedronGeometry(2.1, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const icosaMesh = new THREE.Mesh(icosaGeom, wireframeMat);
    group.add(icosaMesh);

    // 3. Neural Particles at Vertices
    const posAttribute = icosaGeom.attributes.position;
    const vertexCount = posAttribute.count;
    const particlesGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount * 3; i++) {
      particlePositions[i] = posAttribute.array[i];
    }
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.1,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const pointsMesh = new THREE.Points(particlesGeom, particlesMat);
    group.add(pointsMesh);

    // 4. Floating Ambient AI Cloud Particles
    const cloudCount = 70;
    const cloudGeom = new THREE.BufferGeometry();
    const cloudPositions = new Float32Array(cloudCount * 3);

    for (let i = 0; i < cloudCount * 3; i += 3) {
      const radius = 2.8 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      cloudPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      cloudPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      cloudPositions[i + 2] = radius * Math.cos(phi);
    }
    cloudGeom.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3));

    const cloudMat = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const cloudMesh = new THREE.Points(cloudGeom, cloudMat);
    group.add(cloudMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow inertia
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate group subtly
      group.rotation.y = elapsedTime * 0.18 + mouseX;
      group.rotation.x = Math.sin(elapsedTime * 0.12) * 0.2 + mouseY;

      innerTorus.rotation.z = elapsedTime * 0.4;
      outerTorus.rotation.y = -elapsedTime * 0.3;
      cloudMesh.rotation.y = -elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icosaGeom.dispose();
      particlesGeom.dispose();
      cloudGeom.dispose();
      innerTorusGeom.dispose();
      outerTorusGeom.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Static Fallback for reduced motion / mobile without WebGL */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-brand-400/40 bg-gradient-to-tr from-brand-900/20 to-neural-900/20 backdrop-blur-md flex items-center justify-center relative animate-pulse-slow">
            <div className="w-44 h-44 rounded-full border border-neural-400/30 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-brand-400/50 bg-brand-400/10 flex items-center justify-center">
                <span className="font-mono text-xs text-brand-300">AI Core Active</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Ambient Glow Behind 3D Core */}
      <div className="absolute -z-10 w-72 h-72 rounded-full bg-brand-500/10 dark:bg-brand-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -z-10 w-60 h-60 rounded-full bg-neural-500/10 dark:bg-violet-500/10 blur-2xl pointer-events-none translate-x-12 translate-y-12" />
    </div>
  );
};
