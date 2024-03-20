import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {Level} from './Level.jsx'
import Sound from './Sound.jsx';
import Player from './Player.jsx'
import {OrbitControls} from '@react-three/drei';
import {Physics, RigidBody} from '@react-three/rapier';


export default function Experience()
{   
    const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  
    const toggleSound = () => {
      setIsSoundPlaying(!isSoundPlaying);
    };
    
    return <>
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 2.5, 4, 6 ]
            } }
        >
            <OrbitControls makeDefault />
        <Physics debug>
            <Level />
            <Player />
            
            <RigidBody colliders="ball"
                restitution={ 0.2 }
                friction={ 1 } 
                linearDamping={ 0.5 }
                angularDamping={ 0.5 }
                position={ [ 0, 1, -1 ] }>
                <mesh castShadow>
                <icosahedronGeometry args={ [ 0.3, 1 ] } />
                <meshStandardMaterial flatShading color="red" />
                <Sound url="./media/dancingcat.mp3" isPlaying={isSoundPlaying} />
                </mesh>
            </RigidBody>
            
        </Physics>
        
        </Canvas>
        
        <div style={{ position: 'absolute', top: '0px', left: '20px', zIndex: '100' }}>
            <p style={{backgroundColor:'rgba(166, 99, 178, 0.8)', padding:'5px', borderRadius:'5px', color:'white', fontFamily:'sans-serif', fontSize:'14px'}}>
                Positional Audio in React Three Fiber: <br/><br/>
                
                Use WASD or Arrow Keys to Move. <br/>
                The Listener ball: Purple <br/>
                The Speaker ball: Red
            </p>
        
            <button onClick={toggleSound}>
            {isSoundPlaying ? 'Stop Audio' : 'Play Audio'}
            </button>
        </div>
    </>
}
