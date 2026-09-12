import { useFrame } from '@react-three/fiber'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const Model = () => {
    const group = useRef()

    const { scene } = useGLTF('/model/khushi2.glb') // main model
    const anim = useFBX('/animations/about/typing.fbx') // animation

    const { actions, mixer } = useAnimations(anim.animations, group)

    useEffect(() => {
        console.log('Loaded animation clips:', anim.animations)

        const clip = anim.animations[0];
        const action = actions[clip.name];

        action.reset().fadeIn(0.5).play()

        return () => mixer?.stopAllAction()
    }, [actions, anim.animations, mixer])

    useFrame((_, delta) => mixer?.update(delta))

    return <primitive ref={group}
        rotation={[0, Math.PI / 4, 0]}
        object={scene}
        scale={2.4}
        position={[3.5, -1.12, -1]} />
}


export default Model;