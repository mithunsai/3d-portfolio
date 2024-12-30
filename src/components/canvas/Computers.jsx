/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <primitive object={computer.scene} scale={0.75} position={[-1.5, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
      <hemisphereLight intensity={1} groundColor={`#000`} />
      <pointLight intensity={1} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 1], fov: 23 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas