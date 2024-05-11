import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Shirt from './Shirt';

const ModelViewer = () => {
  const containerRef = useRef(null);
  const [humanModel, setHumanModel] = useState(null);

  useEffect(() => {
    let scene, camera, renderer, light, controls;

    const init = () => {
      // Scene
      scene = new THREE.Scene();

      // Camera
      const aspectRatio = window.innerWidth / window.innerHeight;
      camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0xeeeeee);
      containerRef.current.appendChild(renderer.domElement);

      // Light
      light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1);
      scene.add(light);

      // Load Human Model
      const loader = new GLTFLoader();
      loader.load(
        '/human.glb',
        (gltf) => {
          // Center the human model
          const bbox = new THREE.Box3().setFromObject(gltf.scene);
          const center = bbox.getCenter(new THREE.Vector3());
          gltf.scene.position.sub(center);
          scene.add(gltf.scene);

          // Set the loaded human model to state
          setHumanModel(gltf.scene);
        },
        undefined,
        (error) => {
          console.error('Error loading human model', error);
        }
      );

      // OrbitControls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;
      controls.autoRotate = false;
      controls.maxPolarAngle = Math.PI * 0.5;
      controls.minAzimuthAngle = -Math.PI * 0.5;
      controls.maxAzimuthAngle = Math.PI * 0.5;

      // Animation
      const animate = function () {
        requestAnimationFrame(animate);

        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }}>
      {humanModel && <Shirt humanModel={humanModel} />}
    </div>
  );
};

export default ModelViewer;
