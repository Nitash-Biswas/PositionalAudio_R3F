import { useThree,useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useEffect, useState, useRef } from 'react'

export default function Sound({ url, isPlaying=false}) {
        const sound = useRef()
        const { camera } = useThree()
        const [listener] = useState(() => new THREE.AudioListener())
        const buffer = useLoader(THREE.AudioLoader, url)
        
        useEffect(() => {
          sound.current.setBuffer(buffer)
          sound.current.setRefDistance(1)
          sound.current.setLoop(true)
          
          if (isPlaying) {
                sound.current.play()
            } else {
                sound.current.pause()
            }
            
          camera.add(listener)
          return () => {
            camera.remove(listener)
        }
        }, [buffer,listener,camera,isPlaying])        
        return <positionalAudio ref={sound} args={[listener]} />
      }



