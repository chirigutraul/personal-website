import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  OrbitControls,
  useAnimations,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

const Model = (props: any) => {
  const { scene, animations } = useGLTF("../src/assets/3d/bmo2.glb");
  const modelRef = useRef();

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current!.position.y +=
        Math.sin(state.clock.getElapsedTime() * 3) / 10000;
    }
  });

  return <primitive object={scene} {...props} ref={modelRef} />;
};

const ModelRender = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [0.15, 0.15, 0.25],
        fov: 15,
      }}
      style={{
        width: "700px",
        height: "600px",
        zIndex: 0,
        // border: "1px solid red",
      }}
      // className="w-[500px] h-[500px]"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <Suspense fallback={null}>
        <PresentationControls speed={0.01} global>
          <Model
            scale={0.1}
            position={[0.03, 3.995, 0.1]}
            castShadow
            receiveShadow
          />
        </PresentationControls>
      </Suspense>
      <OrbitControls minPolarAngle={1} maxPolarAngle={1.5} />
      <axesHelper args={[5]} />
    </Canvas>
  );
};

export default ModelRender;
