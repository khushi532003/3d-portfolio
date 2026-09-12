import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Model = ({
  modelPath = "/model/khushi.glb",
  animationPath = "/animations/about/idle.fbx",
  animationName = null, // optional
  position = [0, -2.3, 0],
  scale = 3.5,
  rotation = [0, -0.5, 0]
}) => {
  const group = useRef();
  const { scene } = useGLTF(modelPath);
  const anim = useFBX(animationPath);
  const { actions, mixer } = useAnimations(anim.animations, group);

  useEffect(() => {
    const clipName = animationName || anim.animations[0]?.name;

    if (clipName && actions[clipName]) {
      actions[clipName].reset().fadeIn(0.5).play();
    }

    return () => mixer?.stopAllAction();
  }, [actions, anim.animations, mixer, animationName]);

  useFrame((_, delta) => mixer?.update(delta));

  return (
    <primitive
      ref={group}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

export default Model;
