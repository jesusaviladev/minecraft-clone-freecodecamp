import { useEffect, useState } from 'react'
import * as textures from '../textures/images'
import useKeyboard from '../lib/hooks/useKeyboard'
import useStore from '../lib/hooks/useStore'

const TextureSelector = () => {
    const [visible, setVisible] = useState()
    const [texture, setTexture] = useStore((state) => [
        state.currentTexture,
        state.setTexture,
    ])

    const { dirt, grass, glass, wood, log } = useKeyboard()

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log,
        }

        const selectedTexture = Object.entries(options).find(
            ([textureName, isEnabled]) => isEnabled
        )

        if (selectedTexture) {
            const [textureName] = selectedTexture

            setTexture(textureName)
        }
    }, [dirt, grass, glass, wood, log])

    // if (!visible) return null

    return (
        <div className="texture-selector">
            {Object.entries(textures).map(([name, src]) => {
                return (
                    <img
                        key={name}
                        src={`.${src}`}
                        alt={name}
                        className={`texture-image ${
                            name.replace('Image', '') === texture
                                ? 'texture-image--selected'
                                : ''
                        }`}
                    />
                )
            })}
        </div>
    )
}

export default TextureSelector
