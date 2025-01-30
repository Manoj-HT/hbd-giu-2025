import { Composition } from "remotion";
import './index.css';
import HappyBirthday from "./HappyBirthday/HappyBirthday";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HappyBirthday"
        component={HappyBirthday}
        durationInFrames={28*30}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
