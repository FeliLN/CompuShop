import React from 'react'
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader'
import { useLoader } from '@react-three/fiber'
import Shoes from '../img/shoe.gltf'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'


const Logo = (props) => {

    // const logo = useLoader(ThreeMFLoader, Shoes)
    // const gltfloader = new GLTFLoader()
    const { nodes, materials } = useGLTF(Shoes)
    
    // useEffect(() => {
    //     gltfloader.load(Shoes, (gltf) => {
    //         console.log('asdasd')
    //         },
    //         () => { 
    //             console.log('Loading')
    //         },
    //         () => {
    //             console.log('error')
    //         }   
    //     )
    // }) 

    return (
        // <group 

        //     rotation={[-Math.PI/2, 0, 0]} 
        //     position={[-80,-20, 0]}
        //     >
            /* <primitive object={gltfloader}/>  */
            <group {...props} dispose={null}>
        {/* <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.logo} material-envMapIntensity={0.8} /> */}

      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-envMapIntensity={0.8} />

        </group>     
    )
}

export default Logo

useGLTF.preload(Shoes)


// export default function Shoe(props) {
//   const { nodes, materials } = useGLTF(Shoes)
//   return (
//     <group {...props} dispose={null}>

//     <primitive object={nodes.Shoe} materials />

  
//     </group>
//   )
// }

// useGLTF.preload(Shoes)



  {/* <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.logo} material-envMapIntensity={0.8} /> */}

      {/* <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-envMapIntensity={0.8} /> */}