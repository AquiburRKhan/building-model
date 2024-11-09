"use client";

// import * as THREE from "three";

import { FlyControls, useFBX } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

export default function Home() {
  const scene = useFBX("/models/building/building.fbx");

  // turn all frustrum culling off
  scene.traverse((child) => {
    child.frustumCulled = false;
    // if (child instanceof THREE.Mesh) {
    //   child.material.depthWrite = false;
    // }
  });

  return (
    <>
      <div className="w-full flex justify-center absolute top-0 left-0 p-4 z-30 bg-black bg-opacity-50">
        <div className="flex flex-col">
          <h1 className="text-2xl bold text-white text-center">Fly controls</h1>
          <div className="text-white">
            <b className="text-orange-400">WASD</b> move,{" "}
            <b className="text-orange-400">R|F</b> up | down,{" "}
            <b className="text-orange-400">Q|E</b> roll,{" "}
            <b className="text-orange-400">up|down</b> pitch,{" "}
            <b className="text-orange-400">left|right</b> yaw
          </div>
        </div>
      </div>
      <Canvas camera={{ position: [-1, 1.6, 1.4], near: 0.001 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <FlyControls
          dragToLook
          rollSpeed={Math.PI / 6}
          movementSpeed={0.5}
          makeDefault
        />

        <primitive scale={0.001} object={scene} />
      </Canvas>
    </>
  );
}
