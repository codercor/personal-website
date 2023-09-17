import React, { useRef, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations, CubeCamera, PerspectiveCamera } from '@react-three/drei'

function Model() {
    const group = useRef<any>()
    // @ts-ignore
    const model = useGLTF("/Model.glb")
    const { actions } = useAnimations(model.animations, group)
    console.log("model", model);


    useMemo(() => {
        // @ts-ignore
        //actions.checker.play()
        setTimeout(() => {
            actions.Animation?.play()
        }, 2000);
    }, [actions])
 
    return (
        <group ref={group} {...model}>
            {
                //@ts-ignore
                model.scene.children.map((child: any) => {
                    return (
                        <primitive
                            object={child}
                            key={child.uuid}
                            castShadow
                            receiveShadow
                        />
                    )
                })
            }  
            
              

        </group>
    )   
}

function App() {
    return (
        <Canvas className=''>
            <PerspectiveCamera position={[0,0,2]}>
                <ambientLight />
                <pointLight  />
                <Model />
            </PerspectiveCamera>
        </Canvas>
    )
}

export default App
