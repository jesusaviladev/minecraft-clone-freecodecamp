import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
}

const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
    })

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { code, type } = event

            const action = ACTIONS_KEYBOARD_MAP[code]

            if (action) {
                // if (actions[action]) return

                setActions((prevActions) => ({
                    ...prevActions,
                    [action]: true,
                }))
            }
        }

        const handleKeyUp = (event) => {
            const { code, type } = event

            const action = ACTIONS_KEYBOARD_MAP[code]

            if (action) {
                // if (!actions[action]) return

                setActions((prevActions) => ({
                    ...prevActions,
                    [action]: false,
                }))
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    })

    return actions
}

export default useKeyboard
