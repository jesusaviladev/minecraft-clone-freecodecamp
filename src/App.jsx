import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Ground from './components/Ground'
import FPV from './components/FPV'
import Player from './components/Player'
import Cubes from './components/Cubes'
import TextureSelector from './components/TextureSelector'

const App = () => {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]}></Sky>
                <ambientLight intensity={0.5}></ambientLight>
                <FPV />
                <Physics>
                    <Player />
                    <Cubes />
                    <Ground />
                </Physics>
            </Canvas>
            <div className="pointer">+</div>
            <TextureSelector />
        </>
    )
}

export default App
