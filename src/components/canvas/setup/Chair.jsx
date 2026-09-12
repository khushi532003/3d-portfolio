import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Chair = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 0.03 }) => {
  const { scene } = useGLTF("/desktop_pc/setup/office_chair.glb");

  // Optional: Fix model's original rotation or scale internally if needed
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  );
};

export default Chair;
