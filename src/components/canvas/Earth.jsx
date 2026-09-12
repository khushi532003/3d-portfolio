import { Canvas,  useLoader } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import { extend } from '@react-three/fiber'

// Define a shader material that blends based on light direction
const EarthBlendMaterial = shaderMaterial(
  {
    dayTexture: null,
    nightTexture: null,
    lightDirection: new THREE.Vector3(1, 0, 1).normalize(),
  },
  // Vertex shader
  `
    varying vec3 vNormal;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform vec3 lightDirection;
    varying vec3 vNormal;
    varying vec2 vUv;

    void main() {
      float lightIntensity = max(dot(vNormal, lightDirection), 0.0);
      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv);
      vec4 finalColor = mix(nightColor, dayColor, lightIntensity);
      gl_FragColor = finalColor;
    }
  `
);

extend({ EarthBlendMaterial });

const Earth = () => {
  const materialRef = useRef();

  const [day, night] = useLoader(TextureLoader, [
    "/planet/textures/earth.jpg",
    "/planet/textures/earthnight.jpg"
  ]);

  return (
    <mesh scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <earthBlendMaterial
        ref={materialRef}
        dayTexture={day}
        nightTexture={night}
        lightDirection={new THREE.Vector3(1, 0, 1).normalize()}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[1, 0, 1]} intensity={1} />
        <OrbitControls autoRotate enableZoom={false} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
