import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";
import Loader from "./Loader";
import { Suspense, useRef } from "react";
import Lights from "./Lights";
import { Model } from "./IPhone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));

  // ✅ Responsive values
  const isMobile = size.width < 640;
  const isTablet = size.width < 1024;

  const cameraZ = isMobile ? 6 : isTablet ? 5 : 4;
  const modelScale =
    index === 1
      ? isMobile
        ? 11
        : isTablet
        ? 13
        : 15
      : isMobile
      ? 13
      : isTablet
      ? 15
      : 17;

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />

      {/* ✅ Responsive camera */}
      <PerspectiveCamera makeDefault position={[0, 0, cameraZ]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        enableDamping
        dampingFactor={0.1}
        target={targetRef.current}
        onEnd={() =>
          setRotationState(controlRef.current.getAzimuthalAngle())
        }
      />

      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          {/* ✅ Responsive model scale */}
          <Model
            scale={[modelScale, modelScale, modelScale]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
