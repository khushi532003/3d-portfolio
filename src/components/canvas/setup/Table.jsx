import {  useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import Mouse from "./Mouse";
import MacBook from "../MacBook";

const Table = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 0.03 }) => {
  const { scene } = useGLTF("/desktop_pc/setup/table.glb");

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
    <>
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
      <Mouse scale={3} position={[30,75,20]}/>
      <MacBook scale={10} position={[-5,105,110]}/>
    </group>
    </>
  );
};

export default Table;
