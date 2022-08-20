import { FC, Fragment } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { characters } from "../shared/contants";
import { m } from "framer-motion";
import Scroll from "./Scroll";

const Intro: FC = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

      {/* <svg
        className="h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]"
        viewBox="0 0 276 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {characters.map((character, index) => (
          <Fragment key={character}>
            <m.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index / 10, duration: 1 }}
              d={character}
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
            ></m.path>
            <m.path
              initial={{ fill: "#ffffff00" }}
              animate={{ fill: "#ffffff" }}
              transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
              fill="none"
              d={character}
            ></m.path>
          </Fragment>
        ))}
      </svg> */}
      <m.p
        data-scroll
        data-scroll-speed="5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-6xl text-center z-[1] overflow-hidden font-bold"
      >
        {`Asad Shabir`}
      </m.p>
      <m.p
        data-scroll
        data-scroll-speed="5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="text-3xl text-center z-[1] overflow-hidden my-10"
      >
        I&apos;m a Software Engineer
        <br />
        with expertise in hybrid mobile app development.
      </m.p>

      <Scroll id="who" />
    </div>
  );
};

export default Intro;
