import useStore from '../lib/hooks/useStore'
import Cube from './Cube'

const Cubes = () => {
    const cubes = useStore((state) => state.cubes)

    return cubes.map((cube) => <Cube key={cube.id} {...cube} />)
}

export default Cubes
