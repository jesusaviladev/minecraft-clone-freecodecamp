import {
    grassImage,
    dirtImage,
    glassImage,
    logImage,
    woodImage,
} from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const getPixelatedTexture = (imageSrc) => {
    const texture = new TextureLoader().load(imageSrc)

    texture.magFilter = NearestFilter

    return texture
}

const groundTexture = getPixelatedTexture(grassImage)
const grassTexture = getPixelatedTexture(grassImage)
const dirtTexture = getPixelatedTexture(dirtImage)
const glassTexture = getPixelatedTexture(glassImage)
const logTexture = getPixelatedTexture(logImage)
const woodTexture = getPixelatedTexture(woodImage)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
    groundTexture,
    dirtTexture,
    grassTexture,
    glassTexture,
    logTexture,
    woodTexture,
}
