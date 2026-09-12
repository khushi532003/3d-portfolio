import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Table from './Table'
import Chair from './Chair'
import Model from './Model'
// import { OrbitControls } from '@react-three/drei'


const Setup = () => {
    return (

        <Canvas
            shadows
            camera={{ fov: 75, near: 0.1, far: 200, position: [0, 0, 5] }}
            gl={{ preserveDrawingBuffer: true }}
        >
            {/* <OrbitControls /> */}
            <Suspense fallback={null}>
                <ambientLight intensity={3} />
                <directionalLight intensity={2} />
                <group
                    scale={[1.2, 1.3, 1]}
                    // rotation={[0, -Math.PI / 3, 0]}
                    position={[-1, 0, 0]}
                >

                    <Table
                        position={[4.8, -1, -1]}
                        // position={[0, -2,-1 ]} 
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={0.02}
                    />
                    <group position={[0, 0, -0.5]} >
                        <Model />
                        <Chair
                            position={[3.4, -1, -1]}
                            rotation={[0, Math.PI / 4, 0]}
                            scale={2.3}
                        />
                    </group>                  
                </group>
            </Suspense>
        </Canvas>
    )
}

export default Setup;