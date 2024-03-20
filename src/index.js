import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import './styles.css';
import { KeyboardControls } from '@react-three/drei'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <KeyboardControls
    map={ [
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
    ] }
>
        
        <Experience />

    </KeyboardControls>
);
