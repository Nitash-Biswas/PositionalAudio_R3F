import { RigidBody } from '@react-three/rapier'
import { useFrame, useThree } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'

export default function Player()
{   const body = useRef()
    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const [ smoothedCameraPosition ] = useState(() => new THREE.Vector3(10, 10, 10))
    const [ smoothedCameraTarget ] = useState(() => new THREE.Vector3())


    useFrame((state,delta) =>
		{
		    const { forward, backward, leftward, rightward } = getKeys()
            const impulse = { x: 0, y: 0, z: 0 }
            const torque = { x: 0, y: 0, z: 0 }

            const impulseStrength = 0.6 * delta
            const torqueStrength = 0.2 * delta

            if(forward)
            {
                impulse.z -= impulseStrength
                torque.x -= torqueStrength
            }

            if(rightward)
            {
                impulse.x += impulseStrength
                torque.z -= torqueStrength
            }

            if(backward)
            {
                impulse.z += impulseStrength
                torque.x += torqueStrength
            }
            
            if(leftward)
            {
                impulse.x -= impulseStrength
                torque.z += torqueStrength
            }

            body.current.applyImpulse(impulse)
            body.current.applyTorqueImpulse(torque)
		})

    useFrame((state, delta) =>
    {
        const bodyPosition = body.current.translation()
        const cameraPosition = new THREE.Vector3()
        const distancefactor = 3

        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 2.25 * distancefactor
        cameraPosition.y += 1.65 * distancefactor

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.25

        smoothedCameraPosition.lerp(cameraPosition, 4 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 4 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)
    })


    return <RigidBody
                ref={ body }
                canSleep={ false }
                colliders="ball"
                restitution={ 0.2 }
                friction={ 1 } 
                linearDamping={ 0.5 }
                angularDamping={ 0.5 }
                position={ [ 0, 1, 0 ] }
            >
        <mesh castShadow>
            <icosahedronGeometry args={ [ 0.3, 1 ] } />
            <meshStandardMaterial flatShading color="mediumpurple" />
        </mesh>
    </RigidBody>
}