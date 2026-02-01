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
  // stable target for smooth controls
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}          // slightly faster rotation
        enableDamping={true}       // smooth easing
        dampingFactor={0.1}        // adjust for smoothness
        target={targetRef.current}  // keep the same target
        onEnd={() =>
          setRotationState(controlRef.current.getAzimuthalAngle())
        }
      />

      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"} // fix template string bug
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Model
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
