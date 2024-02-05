type HangManProps = {
  incorrectGuess: number;
};
export const HangManDraw = ({ incorrectGuess }: HangManProps) => {
  const standarELement = [
    "circle",
    "mainBody",
    "rightArm",
    "leftArm",
    "leftLeg",
    "rightLeg",
  ];

  const drawElement = standarELement.slice(0, incorrectGuess);
  return (
    <div style={{ position: "relative" }}>
      {drawElement.map((element, index) => (
        <div className={element} key={index}></div>
      ))}
      <div className="aboveHead"></div>
      <div className="topLine"></div>
      <div className="mainHeight"></div>
      <div className="bottomLine"></div>
    </div>
  );
};
