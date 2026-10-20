import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 18, 55);
    camera.lookAt(0, 0, 0);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // MOUSE INTERACTION STATE
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = container.clientWidth / 2;
    const windowHalfY = container.clientHeight / 2;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouseX = (clientX - windowHalfX) * 0.008;
      mouseY = (clientY - windowHalfY) * 0.008;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 1. SOFT, ELEGANT 3D UNDULATING WAVE SURFACE (Medical Vital Waves / Silk Fluid)
    const waveWidth = 140;
    const waveDepth = 100;
    const segmentsX = 90;
    const segmentsY = 60;

    const planeGeometry = new THREE.PlaneGeometry(
      waveWidth,
      waveDepth,
      segmentsX,
      segmentsY
    );
    planeGeometry.rotateX(-Math.PI / 2.3);
    planeGeometry.translate(0, -12, 0);

    const count = planeGeometry.attributes.position.count;
    const originalPositions = new Float32Array(count * 3);
    const posAttr = planeGeometry.attributes.position;
    for (let i = 0; i < count * 3; i++) {
      originalPositions[i] = posAttr.array[i];
    }

    // Color gradient for vertices (Deep Navy to Soft Healthcare Teal & Cyan)
    const colors = new Float32Array(count * 3);
    const colorTeal = new THREE.Color('#0d9488');
    const colorCyan = new THREE.Color('#38bdf8');
    const colorNavy = new THREE.Color('#0b2447');

    for (let i = 0; i < count; i++) {
      const zVal = posAttr.getY(i);
      const ratio = (zVal + 50) / 100;
      const mixedColor = new THREE.Color();
      
      if (ratio < 0.5) {
        mixedColor.lerpColors(colorNavy, colorTeal, ratio * 2);
      } else {
        mixedColor.lerpColors(colorTeal, colorCyan, (ratio - 0.5) * 1.5);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    planeGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom soft point texture for serene luminous waves
    const createSoftDotTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      grad.addColorStop(0.3, 'rgba(45, 212, 191, 0.7)');
      grad.addColorStop(0.7, 'rgba(14, 165, 233, 0.2)');
      grad.addColorStop(1, 'rgba(10, 25, 47, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const waveMaterial = new THREE.PointsMaterial({
      size: 2.2,
      map: createSoftDotTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveMesh = new THREE.Points(planeGeometry, waveMaterial);
    scene.add(waveMesh);

    // 2. DELICATE WIREFRAME WAVE ACCENT (Very faint, serene fluid curve)
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const waveWireMesh = new THREE.Mesh(planeGeometry, wireMaterial);
    scene.add(waveWireMesh);

    // 3. FLOATING SOFT MEDICAL LIGHT ORBS (Slow drifting ambient particles)
    const orbCount = 35;
    const orbGeo = new THREE.BufferGeometry();
    const orbPositions = new Float32Array(orbCount * 3);
    const orbSpeeds = [];

    for (let i = 0; i < orbCount; i++) {
      orbPositions[i * 3] = (Math.random() - 0.5) * 120;
      orbPositions[i * 3 + 1] = (Math.random() - 0.5) * 60 + 5;
      orbPositions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      orbSpeeds.push({
        y: 0.02 + Math.random() * 0.03,
        x: (Math.random() - 0.5) * 0.02,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    orbGeo.setAttribute('position', new THREE.BufferAttribute(orbPositions, 3));

    const orbMaterial = new THREE.PointsMaterial({
      size: 6.5,
      map: createSoftDotTexture(),
      color: 0x5eead4,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const orbMesh = new THREE.Points(orbGeo, orbMaterial);
    scene.add(orbMesh);

    // ANIMATION LOOP
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation with mouse movement
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 12;
      camera.position.y = 18 - targetY * 8;
      camera.lookAt(0, -2, 0);

      // Animate wave geometry (Gentle sinusoidal breathing pulse)
      const positions = planeGeometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const origX = originalPositions[i * 3];
        const origZ = originalPositions[i * 3 + 2];

        // Soft, organic healthcare harmonic waves
        const wave1 = Math.sin(origX * 0.06 + elapsedTime * 0.8) * 3.5;
        const wave2 = Math.cos(origZ * 0.05 + elapsedTime * 0.6) * 3.0;
        const wave3 = Math.sin((origX + origZ) * 0.03 + elapsedTime * 0.5) * 2.2;

        positions[i * 3 + 1] = originalPositions[i * 3 + 1] + wave1 + wave2 + wave3;
      }
      planeGeometry.attributes.position.needsUpdate = true;

      // Animate floating soft orbs
      const orbPos = orbGeo.attributes.position.array;
      for (let i = 0; i < orbCount; i++) {
        orbPos[i * 3 + 1] += orbSpeeds[i].y;
        orbPos[i * 3] += Math.sin(elapsedTime * 0.5 + orbSpeeds[i].pulse) * 0.04;

        // Wrap around bounds
        if (orbPos[i * 3 + 1] > 35) {
          orbPos[i * 3 + 1] = -25;
          orbPos[i * 3] = (Math.random() - 0.5) * 110;
        }
      }
      orbGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      planeGeometry.dispose();
      waveMaterial.dispose();
      wireMaterial.dispose();
      orbGeo.dispose();
      orbMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Clean Corporate Navy & Soft Teal Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06101E] via-[#0A192F] to-[#071322] -z-20 pointer-events-none" />

      {/* Subtle, slow-moving soft light orbs for calming healthcare depth */}
      <div 
        className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-teal-500/15 via-teal-400/10 to-sky-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-subtle"
      />
      <div 
        className="absolute -bottom-10 right-1/4 w-[500px] h-[350px] bg-teal-600/10 rounded-full blur-[130px] pointer-events-none"
      />
      <div 
        className="absolute top-10 left-10 w-[400px] h-[300px] bg-sky-600/10 rounded-full blur-[110px] pointer-events-none"
      />

      {/* Subtle architectural vignette for maximum center readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#06101E]/40 to-[#06101E]/90 pointer-events-none" />
    </div>
  );
};

export default Hero3DBackground;
