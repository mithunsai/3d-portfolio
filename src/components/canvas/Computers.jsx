/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <primitive object={computer.scene} scale={isMobile ? 0.55 : 0.75} position={isMobile ? [-1.5, -2.1, -1.8] : [-1.5, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
      <hemisphereLight intensity={1} groundColor={`#000`} />
      <pointLight intensity={1} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches)
    console.log(isMobile)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
      console.log(isMobile)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20,0,5], fov: 23 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas