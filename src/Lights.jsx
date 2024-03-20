export default function Lights()
{
    return<>
        <directionalLight
            castShadow
            position={ [ 6, 40, 1 ] }
            intensity={ 4.5 }
            shadow-mapSize={ [ 4096, 4096 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 300 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 }
        />
        <ambientLight/>
    </>
}