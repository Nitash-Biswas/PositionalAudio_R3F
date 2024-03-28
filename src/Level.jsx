import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import Lights from './Lights.jsx'


const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' })


function Bounds({ size = 1, wallheight = 1 })
{
    return <>
        <RigidBody type="fixed" restitution={ 0.2 }
        friction={ 1 }>
        {/* Walls */}
        <mesh
            position={ [ size*2, wallheight/2,0 ] }
            geometry={ boxGeometry }
            material={ wallMaterial }
            scale={ [ 0.3, wallheight, 4 * size ] }
            castShadow
        />
        <mesh
            position={ [ - size*2, wallheight/2, 0 ] }
            geometry={ boxGeometry }
            material={ wallMaterial }
            scale={ [ 0.3, wallheight, 4 * size ] }
            castShadow
        />
        <mesh
            position={ [ 0, wallheight/2, -size*2] }
            geometry={ boxGeometry }
            material={ wallMaterial }
            scale={ [ size*4, wallheight, 0.3 ] }
            castShadow
        />
        <mesh
            position={ [ 0, wallheight/2, size*2] }
            geometry={ boxGeometry }
            material={ wallMaterial }
            scale={ [ size*4, wallheight, 0.3 ] }
            castShadow
        />
        
        {/* Floor */}
        <mesh
            position={ [  0, -0.1, 0 ] }
            geometry={ boxGeometry }
            material={ floor1Material }
            scale={ [4*size, 0.1, 4 * size ] }
            receiveShadow
        />
        </RigidBody>
    </>
}



export function Level()
{
    return <>
        <Bounds size={ 4 } />
        <Lights/>
    </>
}