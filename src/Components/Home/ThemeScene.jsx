import React from 'react'
import { Canvas } from '@react-three/fiber'



const ThemeScene = ({children}) => {
    return (
        
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
          {children}
        </Canvas>
    )
}


export default ThemeScene;