import { ReactNode, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";

type Props = {
  isMobile: boolean;
  children: ReactNode;
};
export default function HeroCamera({ isMobile, children }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!isMobile) {
      easing.dampE(
        groupRef.current?.rotation!,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }

    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
      {children}
    </group>
  );
}
