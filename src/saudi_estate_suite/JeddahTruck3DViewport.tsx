import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Box, Eye, Layers, RotateCw, Truck } from 'lucide-react';
import { GENERATED_IMAGES } from './dataset';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  intensity = 6,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>(
    'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  );
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    const rotY = (relX - 0.5) * intensity * 2;
    const rotX = (0.5 - relY) * intensity * 2;

    setTransformStyle(
      `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(
        2
      )}deg) scale3d(1.01, 1.01, 1.01)`
    );
    setGlarePos({ x: relX * 100, y: relY * 100, active: true });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 160ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {glarePos.active && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-150"
          style={{
            background: `radial-gradient(480px circle at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, 0.12), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

interface JeddahTruck3DViewportProps {
  fillPercentage: number;
  onSelectFillPercentage?: (pct: number) => void;
  heightClass?: string;
}

export const JeddahTruck3DViewport: React.FC<JeddahTruck3DViewportProps> = ({
  fillPercentage = 50,
  onSelectFillPercentage,
  heightClass = 'h-[420px] lg:h-[480px]',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglFailed, setWebglFailed] = useState(false);
  const [cameraPreset, setCameraPreset] = useState<'orbit' | 'side' | 'rear' | 'front'>('orbit');
  const [paintTheme, setPaintTheme] = useState<'emerald' | 'obsidian' | 'white'>('emerald');
  const [tailLiftOpen, setTailLiftOpen] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Refs to synchronize state into requestAnimationFrame loop without re-creating WebGL context
  const stateRef = useRef({
    fillPercentage,
    cameraPreset,
    paintTheme,
    tailLiftOpen,
    autoRotate,
    userYaw: 0.68,
    userPitch: 0.32,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
  });

  useEffect(() => {
    stateRef.current.fillPercentage = fillPercentage;
    stateRef.current.cameraPreset = cameraPreset;
    stateRef.current.paintTheme = paintTheme;
    stateRef.current.tailLiftOpen = tailLiftOpen;
    stateRef.current.autoRotate = autoRotate;
  }, [fillPercentage, cameraPreset, paintTheme, tailLiftOpen, autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch {
      setWebglFailed(true);
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 450;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const canvas = renderer.domElement;
    const onContextLost = (e: Event) => {
      e.preventDefault();
      setWebglFailed(true);
    };
    const onContextRestored = () => {
      setWebglFailed(false);
    };
    canvas.addEventListener('webglcontextlost', onContextLost);
    canvas.addEventListener('webglcontextrestored', onContextRestored);

    // Scene & Exponential Atmosphere Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070b11);
    scene.fog = new THREE.FogExp2(0x070b11, 0.032);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 120);
    camera.position.set(8.5, 4.2, 8.5);

    // Three-Point Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffbeb, 2.2);
    keyLight.position.set(10, 14, 10);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
    fillLight.position.set(-10, 6, -8);
    scene.add(fillLight);

    const rimLight = new THREE.SpotLight(0x10b981, 3.0, 30, Math.PI / 4, 0.5);
    rimLight.position.set(-6, 9, 8);
    scene.add(rimLight);

    // Showroom Floor & Grid
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x090e17,
      roughness: 0.4,
      metalness: 0.3,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.05;
    floor.receiveShadow = true;
    scene.add(floor);

    const gridHelper = new THREE.GridHelper(34, 34, 0x10b981, 0x1e293b);
    gridHelper.position.y = -1.04;
    scene.add(gridHelper);

    // Build 3D Jeddah Jumbo Dyna Box Truck Group
    const truckGroup = new THREE.Group();
    scene.add(truckGroup);

    const cabPaintMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      metalness: 0.65,
      roughness: 0.25,
    });

    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.7,
      roughness: 0.4,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.9,
      roughness: 0.15,
    });

    const glassWindshieldMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.95,
      roughness: 0.08,
    });

    // Chassis Frame
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.32, 2.2), chassisMat);
    chassis.position.set(0, -0.35, 0);
    chassis.castShadow = true;
    truckGroup.add(chassis);

    // Truck Cab (Front at +X)
    const cabBody = new THREE.Mesh(new THREE.BoxGeometry(1.85, 2.0, 2.15), cabPaintMat);
    cabBody.position.set(2.55, 0.75, 0);
    cabBody.castShadow = true;
    truckGroup.add(cabBody);

    // Aerodynamic Wind Deflector on Top of Cab
    const deflector = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.55, 2.1), cabPaintMat);
    deflector.position.set(2.3, 1.98, 0);
    deflector.rotation.z = -0.22;
    truckGroup.add(deflector);

    // Windshield
    const windshield = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.95, 1.95),
      glassWindshieldMat
    );
    windshield.position.set(3.46, 1.0, 0);
    truckGroup.add(windshield);

    // Front Chrome Grille & Glowing Headlights
    const grille = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.55, 1.5), chromeMat);
    grille.position.set(3.47, 0.15, 0);
    truckGroup.add(grille);

    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const leftLight = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.25, 0.3), headlightMat);
    leftLight.position.set(3.48, 0.15, 0.85);
    const rightLight = leftLight.clone();
    rightLight.position.z = -0.85;
    truckGroup.add(leftLight, rightLight);

    // 18m³ Cutaway Glass Cargo Box (Rear at -X)
    const boxLength = 4.9;
    const boxHeight = 2.55;
    const boxWidth = 2.35;
    const boxCenterX = -0.95;
    const boxCenterY = 1.08;

    // Cargo Floor Deck
    const cargoFloor = new THREE.Mesh(
      new THREE.BoxGeometry(boxLength, 0.12, boxWidth),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 })
    );
    cargoFloor.position.set(boxCenterX, -0.14, 0);
    truckGroup.add(cargoFloor);

    // Translucent X-Ray Cargo Walls so user sees 3D Junk Items inside
    const xrayGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.18,
      roughness: 0.15,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const cargoEnclosure = new THREE.Mesh(
      new THREE.BoxGeometry(boxLength, boxHeight, boxWidth),
      xrayGlassMat
    );
    cargoEnclosure.position.set(boxCenterX, boxCenterY, 0);
    truckGroup.add(cargoEnclosure);

    // Brushed Aluminum Cargo Frame Edges
    const edgesGeo = new THREE.EdgesGeometry(
      new THREE.BoxGeometry(boxLength, boxHeight, boxWidth)
    );
    const edgesLines = new THREE.LineSegments(
      edgesGeo,
      new THREE.LineBasicMaterial({ color: 0x34d399 })
    );
    edgesLines.position.set(boxCenterX, boxCenterY, 0);
    truckGroup.add(edgesLines);

    // Animated Hydraulic Tail-Lift Ramp at Rear (-X)
    const tailLiftPivot = new THREE.Group();
    tailLiftPivot.position.set(boxCenterX - boxLength / 2, -0.15, 0);
    truckGroup.add(tailLiftPivot);

    const rampMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.08, 2.2),
      chromeMat
    );
    rampMesh.position.set(-0.67, 0, 0);
    tailLiftPivot.add(rampMesh);

    // 6 Wheels with Chrome Rims
    const wheelPositions = [
      [2.45, -0.58, 1.12],
      [2.45, -0.58, -1.12],
      [-0.5, -0.58, 1.12],
      [-0.5, -0.58, -1.12],
      [-2.1, -0.58, 1.12],
      [-2.1, -0.58, -1.12],
    ];
    const tireGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.32, 24);
    tireGeo.rotateX(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.85 });
    const rimGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.34, 16);
    rimGeo.rotateX(Math.PI / 2);

    wheelPositions.forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(tireGeo, tireMat);
      wheel.position.set(wx, wy, wz);
      const rim = new THREE.Mesh(rimGeo, chromeMat);
      wheel.add(rim);
      truckGroup.add(wheel);
    });

    // 20 Dynamic 3D Junk / Furniture / Appliance Items inside the Cargo Box
    // Arranged from front of cargo bay (+X) toward rear (-X)
    const cargoItemsGroup = new THREE.Group();
    truckGroup.add(cargoItemsGroup);

    const itemDefs = [
      // Tier 1 (0–15%): Old Sofa & Fridge
      { pos: [1.0, 0.35, -0.5], size: [0.85, 0.9, 1.1], color: 0xd97706 }, // Old L-Sofa
      { pos: [1.0, 0.55, 0.6], size: [0.75, 1.35, 0.75], color: 0x94a3b8 }, // Stainless Fridge
      { pos: [1.0, 1.15, -0.5], size: [0.7, 0.6, 0.95], color: 0x38bdf8 }, // Split AC Unit
      // Tier 2 (15–30%): Mattresses & Wardrobe
      { pos: [0.15, 0.55, -0.45], size: [0.75, 1.3, 1.15], color: 0xf8fafc }, // King Mattress
      { pos: [0.15, 0.4, 0.65], size: [0.75, 1.0, 0.8], color: 0xb45309 }, // Wooden Wardrobe
      { pos: [0.15, 1.35, 0.65], size: [0.65, 0.75, 0.75], color: 0xe2e8f0 }, // Washing Machine
      { pos: [0.15, 1.55, -0.45], size: [0.65, 0.55, 0.95], color: 0xfacc15 }, // Sateh Boxes
      // Tier 3 (30–55%): Majlis Set & Renovation Sacks
      { pos: [-0.7, 0.4, 0.45], size: [0.8, 0.95, 1.2], color: 0x10b981 }, // Majlis Cushions
      { pos: [-0.7, 0.45, -0.6], size: [0.75, 1.05, 0.85], color: 0x64748b }, // Treadmill / Gym
      { pos: [-0.7, 1.25, 0.45], size: [0.75, 0.7, 1.1], color: 0xf59e0b }, // Cartons
      { pos: [-0.7, 1.35, -0.6], size: [0.7, 0.65, 0.8], color: 0xcbd5e1 }, // Window AC
      // Tier 4 (55–80%): Rooftop & Office Items
      { pos: [-1.55, 0.45, -0.45], size: [0.8, 1.05, 1.15], color: 0xa855f7 }, // Bedroom Dresser
      { pos: [-1.55, 0.4, 0.6], size: [0.75, 0.95, 0.85], color: 0x0ea5e9 }, // Office Desks
      { pos: [-1.55, 1.3, -0.45], size: [0.75, 0.65, 1.0], color: 0xfbbf24 }, // Garage Crates
      { pos: [-1.55, 1.25, 0.6], size: [0.7, 0.7, 0.8], color: 0xf43f5e }, // Carpets Bundle
      // Tier 5 (80–100%): Full Load Rear Stack
      { pos: [-2.4, 0.4, 0.45], size: [0.75, 0.95, 1.15], color: 0x22c55e }, // Patio Furniture
      { pos: [-2.4, 0.45, -0.6], size: [0.75, 1.05, 0.85], color: 0xeab308 }, // Rubble Sacks
      { pos: [-2.4, 1.25, 0.45], size: [0.7, 0.7, 1.05], color: 0x38bdf8 }, // Extra Appliances
      { pos: [-2.4, 1.35, -0.6], size: [0.7, 0.65, 0.8], color: 0xf87171 }, // Rooftop Junk
    ];

    const cargoMeshes: THREE.Mesh[] = itemDefs.map((def) => {
      const geo = new THREE.BoxGeometry(def.size[0], def.size[1], def.size[2]);
      const mat = new THREE.MeshStandardMaterial({
        color: def.color,
        roughness: 0.35,
        metalness: 0.2,
      });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(def.pos[0], def.pos[1], def.pos[2]);
      m.castShadow = true;
      cargoItemsGroup.add(m);
      return m;
    });

    // Pointer Drag Orbit Interaction
    const onPointerDown = (e: PointerEvent) => {
      stateRef.current.isDragging = true;
      stateRef.current.lastMouseX = e.clientX;
      stateRef.current.lastMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!stateRef.current.isDragging) return;
      const dx = e.clientX - stateRef.current.lastMouseX;
      const dy = e.clientY - stateRef.current.lastMouseY;
      stateRef.current.lastMouseX = e.clientX;
      stateRef.current.lastMouseY = e.clientY;
      stateRef.current.userYaw -= dx * 0.008;
      stateRef.current.userPitch = Math.max(
        0.1,
        Math.min(1.1, stateRef.current.userPitch + dy * 0.006)
      );
    };

    const onPointerUp = () => {
      stateRef.current.isDragging = false;
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const st = stateRef.current;

      // Update Cab Paint Color smoothly
      const targetColor =
        st.paintTheme === 'emerald'
          ? 0x059669
          : st.paintTheme === 'obsidian'
          ? 0x111827
          : 0xf8fafc;
      cabPaintMat.color.lerp(new THREE.Color(targetColor), 0.1);

      // Update Hydraulic Tail-Lift Angle
      const targetRampZ = st.tailLiftOpen ? 0.28 : -Math.PI / 2;
      tailLiftPivot.rotation.z += (targetRampZ - tailLiftPivot.rotation.z) * 0.1;

      // Update Visible 3D Cargo Blocks based on fillPercentage
      const activeCount = Math.max(
        1,
        Math.round((st.fillPercentage / 100) * cargoMeshes.length)
      );
      cargoMeshes.forEach((mesh, idx) => {
        const shouldShow = idx < activeCount;
        const targetScale = shouldShow ? 1 : 0.001;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
        mesh.visible = mesh.scale.x > 0.02;
      });

      // Camera Choreography
      if (st.cameraPreset === 'orbit') {
        if (st.autoRotate && !st.isDragging) {
          st.userYaw += 0.0035;
        }
        const radius = 10.2;
        const tx = Math.cos(st.userYaw) * Math.cos(st.userPitch) * radius;
        const ty = Math.sin(st.userPitch) * radius + 0.6;
        const tz = Math.sin(st.userYaw) * Math.cos(st.userPitch) * radius;
        camera.position.lerp(new THREE.Vector3(tx, ty, tz), 0.08);
        camera.lookAt(0, 0.7, 0);
      } else if (st.cameraPreset === 'side') {
        camera.position.lerp(new THREE.Vector3(-0.3, 1.4, 8.6), 0.08);
        camera.lookAt(-0.4, 0.8, 0);
      } else if (st.cameraPreset === 'rear') {
        camera.position.lerp(new THREE.Vector3(-8.8, 2.2, 3.2), 0.08);
        camera.lookAt(-1.5, 0.7, 0);
      } else if (st.cameraPreset === 'front') {
        camera.position.lerp(new THREE.Vector3(8.5, 2.0, 4.2), 0.08);
        camera.lookAt(1.5, 0.7, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      renderer.dispose();
    };
  }, []);

  if (webglFailed) {
    return (
      <div className={`relative rounded-2xl overflow-hidden border border-white/10 ${heightClass}`}>
        <img
          src={GENERATED_IMAGES.jeddahHeroTruck}
          alt="Jeddah 3D Junk Removal Truck Fallback"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${heightClass} rounded-2xl overflow-hidden border border-white/15 bg-[#070B11] select-none`}
    >
      {/* Interactive Three.js WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Drag to rotate 360° around the 3D Jeddah Junk Removal Truck"
      />

      {/* Top-Left Semantic HUD: Live 3D Truck Telemetry */}
      <div className="pointer-events-none absolute top-4 left-4 right-4 flex flex-wrap items-start justify-between gap-3 z-10">
        <div className="pointer-events-auto bg-black/55 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5 space-y-0.5">
          <div className="text-[11px] font-mono text-emerald-400 tracking-wide">
            INTERACTIVE 3D WEBGL FLEET SIMULATOR · JEDDAH 18m³ DYNA
          </div>
          <div className="text-sm font-bold text-white font-mono tabular-nums">
            Cargo Load: {fillPercentage}% Full ({((fillPercentage / 100) * 18).toFixed(1)} m³) · Drag to Orbit 360°
          </div>
        </div>

        {/* Camera & Finish Controls */}
        <div className="pointer-events-auto flex flex-wrap items-center gap-1.5 bg-black/55 backdrop-blur-md border border-white/15 rounded-xl p-1.5">
          {[
            { id: 'orbit', label: '360° Orbit' },
            { id: 'side', label: 'X-Ray Side' },
            { id: 'rear', label: 'Rear Ramp' },
            { id: 'front', label: 'Front Cab' },
          ].map((cam) => (
            <button
              key={cam.id}
              type="button"
              onClick={() => setCameraPreset(cam.id as typeof cameraPreset)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                cameraPreset === cam.id
                  ? 'bg-emerald-500 text-[#070B11]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cam.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Floating HUD: Interactive Load Size & Truck Controls */}
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 z-10">
        {onSelectFillPercentage && (
          <div className="pointer-events-auto flex flex-wrap items-center gap-1.5 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl p-1.5">
            {[
              { pct: 12, label: 'Min (2 m³)' },
              { pct: 25, label: '1/4 Load (4.5 m³)' },
              { pct: 50, label: '1/2 Load (9 m³)' },
              { pct: 75, label: '3/4 Load (13.5 m³)' },
              { pct: 100, label: 'Full Truck (18 m³)' },
            ].map((tier) => (
              <button
                key={tier.pct}
                type="button"
                onClick={() => onSelectFillPercentage(tier.pct)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold tabular-nums transition-colors cursor-pointer ${
                  fillPercentage === tier.pct
                    ? 'bg-emerald-500 text-[#070B11]'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        )}

        <div className="pointer-events-auto flex items-center gap-1.5 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl p-1.5">
          <button
            type="button"
            onClick={() => setTailLiftOpen((v) => !v)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 hover:bg-white/10 cursor-pointer"
          >
            {tailLiftOpen ? 'Close 3D Ramp' : 'Open 3D Ramp'}
          </button>
          <button
            type="button"
            onClick={() =>
              setPaintTheme((p) =>
                p === 'emerald' ? 'obsidian' : p === 'obsidian' ? 'white' : 'emerald'
              )
            }
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:bg-white/10 cursor-pointer"
          >
            Paint: {paintTheme.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setAutoRotate((r) => !r)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-white/10 cursor-pointer"
          >
            {autoRotate ? 'Pause Spin' : 'Auto Spin'}
          </button>
        </div>
      </div>
    </div>
  );
};
