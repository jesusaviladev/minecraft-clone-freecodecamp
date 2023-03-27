import { useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { Vector3 } from 'three'
import useKeyboard from '../lib/hooks/useKeyboard'

const PLAYER_SPEED = 4
const PLAYER_JUMP_FORCE = 4

const Player = () => {
    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0.5, 0],
    }))

    const position = useRef([0, 0, 0])
    const speed = useRef([0, 0, 0])
    const { moveForward, moveBackward, moveLeft, moveRight, jump } =
        useKeyboard()

    useEffect(() => {
        api.position.subscribe((p) => (position.current = p))
    }, [api.position])

    useEffect(() => {
        api.velocity.subscribe((v) => (speed.current = v))
    }, [api.velocity])

    useFrame(() => {
        camera.position.copy(
            new Vector3(
                position.current[0], //x
                position.current[1], //y
                position.current[2] //z
            )
        )

        const direction = new Vector3()

        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )

        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
        )

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(PLAYER_SPEED)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, speed.current[1], direction.z)

        if (jump && Math.abs(speed.current[1]) < 0.05) {
            api.velocity.set(
                speed.current[0],
                PLAYER_JUMP_FORCE,
                speed.current[2]
            )
        }
    })

    return <mesh ref={ref}></mesh>
}

export default Player
