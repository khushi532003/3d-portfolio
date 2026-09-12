import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useGLTF,
} from '@react-three/drei';

function MacBook({scale, position, rotation}) {
  const macbook = useGLTF('desktop_pc/laptop2.glb');

  return (
    <>
    <group scale={scale} position={position} rotation={rotation}>
        <Environment preset="city" />

        {/* Lighting for Mac screen */}
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color="#0e3b4e"
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />

        {/* MacBook model */}
        <primitive
          object={macbook.scene}
          scale={1.3}
          position={[0, -3, -10]}
        //   rotation={[0, Math.PI / 2, 0]}
          onPointerEnter={() => (document.body.style.cursor = 'pointer')}
          onPointerLeave={() => (document.body.style.cursor = 'default')}
        >
          {/* Website iframe */}
          {/* <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.25}
            position={[0.1, 1.56, -1.4]}
            rotation-x={-0.256}
            occlude
          >
            <img src="https://wallpapers.com/images/featured/coding-background-9izlympnd0ovmpli.jpg" alt="" 
            style={{
                border: 'none',
                width: '1024px',
                height: '640px',
                transform: 'scale(0.94)',
                transformOrigin: 'top left',
              }}
            /> */}
            {/* <iframe
              src="https://ekanam.netlify.app/"
              className="w-[1024px] h-[640px] rounded-xl"
              style={{
                border: 'none',
                width: '1024px',
                height: '640px',
                transform: 'scale(0.94)',
                transformOrigin: 'top left',
              }} */}
            {/* />
          </Html> */}
        </primitive>

        {/* Shadow under MacBook */}
        <ContactShadows position-y={-1.8} opacity={0.4} blur={2.4} />
        </group>
</>
  );
}

export default MacBook;
