import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import * as textures from '../textures/textures'
import useStore from '../lib/hooks/useStore'

const Cube = ({ id, position, texture }) => {
    const [removeCube] = useStore((state) => [state.removeCube])
    const [isHovered, setIsHovered] = useState(false)
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
    }))

    const cubeTexture = textures[`${texture}Texture`]

    return (
        <mesh
            ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setIsHovered(false)
            }}
            onClick={(e) => {
                e.stopPropagation()
                if (e.altKey) removeCube(id)
            }}
        >
            <boxGeometry attach="geometry"></boxGeometry>
            <meshStandardMaterial
                color={isHovered ? 'gray' : 'white'}
                transparent
                attach="material"
                map={cubeTexture}
            ></meshStandardMaterial>
        </mesh>
    )
}

export default Cube
