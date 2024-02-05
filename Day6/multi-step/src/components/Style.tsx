import { ReactNode } from "react";

type styleProps = {
  title: string;
  children: ReactNode;
};
const Style = ({ title, children }: styleProps) => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: 0, marginBottom: "10px" }}>
        {title}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </>
  );
};
export default Style;
