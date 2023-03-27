import { create } from 'zustand'

const useStore = create((set) => ({
    currentTexture: 'dirt',
    cubes: [
        {
            id: crypto.randomUUID(),
            texture: 'wood',
            position: [1, 0, 1],
        },
    ],
    addCube: (x, y, z) =>
        set((state) => ({
            cubes: [
                ...state.cubes,
                {
                    id: crypto.randomUUID(),
                    texture: state.currentTexture,
                    position: [x, y, z],
                },
            ],
        })),
    removeCube: (cubeId) =>
        set((state) => ({
            cubes: state.cubes.filter(({ id }) => id !== cubeId),
        })),
    setTexture: (texture) => set(() => ({ currentTexture: texture })),
    saveWorld: () => {},
    resetWorld: () => {},
}))

export default useStore
