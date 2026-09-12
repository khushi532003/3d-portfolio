import { useRef, useMemo } from "react";
import * as THREE from "three";

const BallParticle = ({
  count = 2000,
  shape = "sphere",
  position = [0, 0, 0],
  scale = [1, 1, 1],
  color = "#66bfe0",
  size = 0.008,
}) => {
  const points = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x = 0;
      let y = 0;
      let z = 0;

      if (shape === "box") {
        x = (Math.random() - 0.5) * 2;
        y = (Math.random() - 0.5) * 2;
        z = (Math.random() - 0.5) * 2;
      } else {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        x = Math.sin(phi) * Math.cos(theta);
        y = Math.sin(phi) * Math.sin(theta);
        z = Math.cos(phi);
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    return positions;
  }, [count, shape]);

  return (
    <points ref={points} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={size}
        color={color}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default BallParticle;