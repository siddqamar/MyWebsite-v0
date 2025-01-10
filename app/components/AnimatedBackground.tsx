'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
// import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props: any) {
  const ref = useRef<any>()
  const [sphere] = useState(() => {
    const arr = new Float32Array(5000 * 3)
    for (let i = 0; i < arr.length; i += 3) {
      const r = 1.5 * Math.random()
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i] = r * Math.sin(phi) * Math.cos(theta)
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i + 2] = r * Math.cos(phi)
    }
    return arr
  })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}

