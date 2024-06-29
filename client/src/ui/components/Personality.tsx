import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface PersonalityProps {
  introvert: number;
  observant: number;
  thinking: number;
  judging: number;
}

const Personality: React.FC<PersonalityProps> = ({
  introvert,
  observant,
  thinking,
  judging,
}) => {
  const [introvertScore, setIntrovertScore] = useState<number | number[]>(
    introvert
  );
  const [observantScore, setObservantScore] = useState<number | number[]>(
    observant
  );
  const [thinkingScore, setThinkingScore] = useState<number | number[]>(
    thinking
  );
  const [judgingScore, setJudgingScore] = useState<number | number[]>(judging);

  const sliderStyle = {
    rail: { backgroundColor: "#302D37", height: 20, borderRadius: 5 },
    track: { backgroundColor: "#302D37", height: 20, borderRadius: 5 },
    handle: {
      backgroundColor: "#7236EF",
      border: "none",
      height: 30,
      width: 20,
      marginLeft: -10,
      marginTop: -5,
      borderRadius: "10%",
      boxShadow: "none",
      outline: "none",
    },
  };

  return (
    <div className="game-selection-container rounded-2xl flex flex-col items-center bg-gray-200 w-full">
      <div className="title text-white font-bold items-center pt-2 pb-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        PERSONALITY
      </div>
      <div className="title-line w-full bg-gray-100 h-1 mb-4"></div>
      <div className="w-full flex flex-col items-center justify-center p-5">
        <div className="w-full mb-12">
          <div className="flex justify-between text-white font-bold text-sm mb-2">
            <div>INTROVERT</div>
            <div>EXTROVERT</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={introvertScore}
            onChange={(value) => setIntrovertScore(value)}
            styles={sliderStyle}
          />
        </div>

        <div className="w-full mb-12">
          <div className="flex justify-between text-white font-bold text-sm mb-2">
            <div>OBSERVANT</div>
            <div>INTUITIVE</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={observantScore}
            onChange={(value) => setObservantScore(value)}
            styles={sliderStyle}
          />
        </div>

        <div className="w-full mb-12">
          <div className="flex justify-between text-white font-bold text-sm mb-2">
            <div>THINKING</div>
            <div>FEELING</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={thinkingScore}
            onChange={(value) => setThinkingScore(value)}
            styles={sliderStyle}
          />
        </div>

        <div className="w-full mb-12">
          <div className="flex justify-between text-white font-bold text-sm mb-2">
            <div>JUDGING</div>
            <div>PERCEIVING</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={judgingScore}
            onChange={(value) => setJudgingScore(value)}
            styles={sliderStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Personality;
