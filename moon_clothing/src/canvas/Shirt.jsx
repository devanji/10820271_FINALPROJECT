import React, { useState } from 'react';
import * as THREE from 'three';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame, useThree } from '@react-three/fiber';
import { Decal, useGLTF, useTexture, OrbitControls } from '@react-three/drei';
import { Html } from '@react-three/drei'; 

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/man.glb');
  const [modelSize, setModelSize] = useState(0.6); // Initial model size

  const logoTexture = useTexture(snap.frontLogoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const backLogoTexture = useTexture(snap.backLogoDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  const createTextTexture = (text, font, size, color) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = `${size}px ${font}`;
    const textWidth = ctx.measureText(text).width;
    canvas.width = textWidth;
    canvas.height = size;
    ctx.fillStyle = color;
    ctx.font = `${size}px ${font}`;
    ctx.fillText(text, 0, size);
    return new THREE.CanvasTexture(canvas);
  }

  const increaseModelSize = () => {
    setModelSize(1);
  };

  const decreaseModelSize = () => {
    setModelSize(0.8);
  };

  const sameModelSize = () => {
    setModelSize(0.6);
  };

  return (
    <>
      <OrbitControls />
      <group key={stateString}>
        <mesh
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          material-roughness={0}
          material-metalness={0.14}
          scale={[modelSize * 0.60, modelSize * 0.52, modelSize * 0.9]} // Apply model size here
          dispose={null}
          position={[0, 0.16 * modelSize, 0.0100]}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}
           {snap.isFrontLogoTexture && (
              <Decal
                position={snap.frontLogoPosition}
                rotation={[0, 0, 0]}
                scale={snap.frontLogoScale}
                map={logoTexture}
                map-anisotropy={16}
                depthTest={false}
                depthWrite={true}
              />
          )}
          {snap.isFrontText && (
          <Decal
            position={snap.frontTextPosition}
            rotation={snap.frontTextRotation}
            scale={snap.frontTextScale}
            map={createTextTexture(snap.frontText, snap.frontTextFont, snap.frontTextSize, snap.frontTextColor)}
          />
          )}

        </mesh>

        <mesh
          geometry={nodes.Cuerpo.geometry}
          material={materials.Material_002}
          scale={[modelSize * 0.03, modelSize * 0.03, modelSize * 0.03]} // Apply model size here
          rotation={[Math.PI / 2, 0, 0]}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0.01, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
              depthTest={true}
              depthWrite={true}
            />
          )}
        </mesh>

        <mesh
          geometry={nodes.Cuerpo.geometry}
          material={materials.Piel}
          material-roughness={0}
          material-metalness={0.3}
          scale={[modelSize * 0.03, modelSize * 0.03, modelSize * 0.03]} // Apply model size here
          rotation={[Math.PI / 2, 0, 0]}
          dispose={null}
        />

<Html>
  <div style={{
    position: 'relative',
    top: '10%',
    right: '-370px', /* Adjust this value to move the div horizontally */
    transform: 'translateY(-50%)',

    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  }}>
    Select <center>Size</center> 
   <br />
    <button onClick={sameModelSize}><img src='https://i.ibb.co/cTxRzy5/letter-s.png' width={50} /></button>
    <button onClick={decreaseModelSize}><img src='https://i.ibb.co/LSB0Rvf/letter-m.png' width={50} ></img></button>
    <button onClick={increaseModelSize}><img src='https://i.ibb.co/VNhG319/letter-l.png' width={50}/></button>
  </div>
</Html>
        
      </group>
    </>
  );
}

export default Shirt;
