"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CatRender = ({ handleCat }) => {
  const mountRef = useRef(null);
  const mixerRef = useRef(null);
  const actionsRef = useRef({});
  const [currentAction, setCurrentAction] = useState(
    "Armature|0_Idle_Ragdoll_metarig_hewan1"
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#72b3fd");
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100vw";
    renderer.domElement.style.height = "100vh";
    renderer.domElement.style.zIndex = "10"; // Canvas on top
    renderer.domElement.style.pointerEvents = "auto";

    mountRef.current?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const clock = new THREE.Clock();

    const loader = new GLTFLoader();
    loader.load("/cat/scene.gltf", (gltf) => {
      const model = gltf.scene;
      model.rotation.y = Math.PI / -6;
      scene.add(model);

      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;

      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        actionsRef.current[clip.name] = action;
        if (clip.name === currentAction) {
          action.play();
        }
      });

      setIsLoaded(true); // Set loaded after everything is ready
    });

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixerRef.current?.update(delta * 0.4);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const switchAnimation = (name) => {
    if (name === currentAction) return;

    const mixer = mixerRef.current;
    const actions = actionsRef.current;

    if (mixer && actions[currentAction] && actions[name]) {
      actions[currentAction].fadeOut(0.3);
      actions[name].reset().fadeIn(0.3).play();
      setCurrentAction(name);
    }
  };

  const animations = [
    { label: "Chill", name: "Armature|0_Idle_Ragdoll_metarig_hewan1" },
    { label: "Run", name: "Armature|1_Run_Ragdoll_metarig_hewan1" },
    { label: "Sit", name: "Armature|2_Sit_Ragdoll_metarig_hewan1" },
    { label: "Walk", name: "Armature|3_Walk_Ragdoll_metarig_hewan1" },
  ];

  return (
    <div className="absolute inset-0">
      <div ref={mountRef} className="animate-fade-in" />

      <button
        onClick={handleCat}
        className={`fixed top-24 right-12 font-mono w-[5rem] bg-white text-black uppercase text-[16px] tracking-tight px-3 py-1 shadow-md cursor-pointer z-50`}
      >
        Close
      </button>

      <div className="w-full flex items-center justify-center animate-fade-in">
        <div className="fixed bottom-24 md:bottom-48 flex bg-white shadow-md z-20">
          {animations.map(({ label, name }) => (
            <button
              key={name}
              onClick={() => switchAnimation(name)}
              disabled={!isLoaded} // Disable until loaded
              className={`font-mono w-[5rem] uppercase text-[16px] tracking-tight px-3 py-1 z-50 cursor-crosshair ${
                currentAction === name ? "bg-black text-white" : ""
              } ${!isLoaded ? "opacity-50 cursor-not-allowed" : ""}`} // Visual feedback
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatRender;
