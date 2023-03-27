import { usePlane } from '@react-three/cannon'
import useStore from '../lib/hooks/useStore'
import { groundTexture } from '../textures/textures'

const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }))

    groundTexture.repeat.set(100, 100)

    const [addCube] = useStore((state) => [state.addCube])

    // TODO: refactor handlers a custom hook

    const handleGroundClick = (event) => {
        event.stopPropagation()

        const [x, y, z] = Object.values(event.point).map((p) => Math.ceil(p))

        addCube(x, y, z)
    }

    return (
        <mesh ref={ref} onClick={handleGroundClick}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    )
}

export default Ground
