import { Html, useProgress } from "@react-three/drei";

export function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: "800",
          marginTop: 40,
        }}>
        {progress !== 0 ? `${progress.toFixed(1)}%` : "Loading..."}
      </p>
    </Html>
  );
}
