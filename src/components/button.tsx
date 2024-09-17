import { ReactNode } from "react";

type Props = {
  isBeam: boolean;
  containerClass: string;
  children: ReactNode;
};
export function Button({ isBeam, containerClass, children }: Props) {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam ? (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      ) : null}
      {children}
    </button>
  );
}
