import React, { useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { useGLTF, useTexture, OrbitControls, Decal, Html } from '@react-three/drei';
import { TextureLoader } from 'three';
import state from '../store';
import { dampC } from 'maath/easing';

const textureImageUrl1 = 'https://i.ibb.co/LpdrFHf/1.jpg';
const textureImageUrl2 = 'https://i.ibb.co/RDPVHHV/3.jpg';
const textureImageUrl3 = 'https://i.ibb.co/4fdcnmF/images.png';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/man.glb');
  const [modelSize, setModelSize] = useState(0.6);
  const [selectedTexture, setSelectedTexture] = useState(textureImageUrl1);

  // Load textures
  const logoTexture = useTexture(snap.frontLogoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const backLogoTexture = useTexture(snap.backLogoDecal);
  const texture = useTexture(selectedTexture);

  // Function to create a text texture
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
  };

  // Functions to change model size
  const increaseModelSize = () => setModelSize(1);
  const decreaseModelSize = () => setModelSize(0.8);
  const sameModelSize = () => setModelSize(0.6);

  useFrame((state, delta) => {
    dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  const stateString = JSON.stringify(snap);

  return (
    <>
      <OrbitControls />
      <group key={stateString}>
        <mesh
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          material-roughness={0}
          material-metalness={0.14}
          scale={[modelSize * 0.6, modelSize * 0.52, modelSize * 0.9]}
          dispose={null}
          position={[0, 0.16 * modelSize, 0.01]}
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
        
        {/* Applying the selected texture to the mesh */}
        <mesh
          geometry={nodes.Cuerpo.geometry}
          material={materials.Material_002}
          scale={[modelSize * 0.03, modelSize * 0.03, modelSize * 0.03]}
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
          scale={[modelSize * 0.03, modelSize * 0.03, modelSize * 0.03]}
          rotation={[Math.PI / 2, 0, 0]}
          dispose={null}
        >
          <meshStandardMaterial map={texture} />
        </mesh>

        {/* HTML UI for texture selection and model size */}
        <Html>
          <div
            style={{
              position: 'relative',
              top: '10%',
              right: '-370px',
              transform: 'translateY(-50%)',
              backgroundColor: '#ffffff',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <center>Select Texture</center>
            <br />
            <button onClick={() => setSelectedTexture(textureImageUrl1)}>
              <img src={textureImageUrl1} width={50} alt="Texture 1" />
            </button>
            <button onClick={() => setSelectedTexture(textureImageUrl2)}>
              <img src={textureImageUrl2} width={50} alt="Texture 2" />
            </button>
            <button onClick={() => setSelectedTexture(textureImageUrl3)}>
              <img src={textureImageUrl3} width={50} alt="Texture 3" />
            </button>

            <br />
            <center>Select Size</center>
            <br />
            <button onClick={sameModelSize}>
              <img src='https://i.ibb.co/cTxRzy5/letter-s.png' width={50} alt="S" />
            </button>
            <button onClick={decreaseModelSize}>
              <img src='https://i.ibb.co/LSB0Rvf/letter-m.png' width={50} alt="M" />
            </button>
            <button onClick={increaseModelSize}>
              <img src='https://i.ibb.co/VNhG319/letter-l.png' width={50} alt="L" />
            </button>
          </div>
        </Html>
      </group>
    </>
  );
};

export default Shirt;
