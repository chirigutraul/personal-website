import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  OrbitControls,
  useAnimations,
} from "@react-three/drei";
import { FC, Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

interface ModelProps {
  isBMOFloating: Boolean;
  scale: Number;
  position: [Number, Number, Number];
  isBMORotating: Boolean;
}

const Model: FC<ModelProps> = ({
  isBMOFloating,
  scale,
  position,
  isBMORotating,
}) => {
  const { scene, animations } = useGLTF("../src/assets/3d/bmo2.glb");
  const modelRef = useRef<THREE.Object3D>();

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]!.play();
    }
  }, [actions]);

  useFrame((state) => {
    if (modelRef.current) {
      // floating animation
      if (isBMOFloating) {
        modelRef.current.position.y +=
          Math.sin(state.clock.getElapsedTime() * 3) / 10000;
      }

      if (isBMORotating) {
        modelRef.current.rotation.y += 0.01;
      }

      // catch me if you can mode
      // modelRef.current!.rotation.y +=
      //   Math.sin(state.clock.getElapsedTime() * 6) / 100;
    }
  });

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      ref={modelRef}
    />
  );
};

interface ModelRendererProps {
  guideLines: Boolean;
  isBMOFloating: Boolean;
  isBMORotating: Boolean;
}

const ModelRender: FC<ModelRendererProps> = ({
  guideLines,
  isBMOFloating,
  isBMORotating,
}) => {
  return (
    <Canvas
      camera={{
        position: [0.05, 0.1, 0.25],
        fov: 15,
      }}
      style={{
        zIndex: 0,
        ...(guideLines && { border: "1px solid red" }),
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <PresentationControls speed={0.01} global>
          <Model
            scale={0.1}
            position={[0.01, 3.985, 0.095]}
            isBMOFloating={isBMOFloating}
            isBMORotating={isBMORotating}
          />
        </PresentationControls>
      </Suspense>
      <OrbitControls minPolarAngle={1} maxPolarAngle={1.5} />
      {guideLines && <axesHelper args={[5]} />}
    </Canvas>
  );
};

export default ModelRender;
