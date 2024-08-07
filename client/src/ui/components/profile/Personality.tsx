import React, { useState, useEffect } from "react";
import CancelSaveButton from "../common/CancelSaveButton";
import Title from "../common/Title";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface PersonalityProps {
  introvert: number;
  observant: number;
  thinking: number;
  judging: number;
  auth: boolean;
}

const Personality: React.FC<PersonalityProps> = ({
  introvert,
  observant,
  thinking,
  judging,
  auth,
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

  const [tempIntrovertScore, setTempIntrovertScore] = useState<
    number | number[]
  >(introvert);
  const [tempObservantScore, setTempObservantScore] = useState<
    number | number[]
  >(observant);
  const [tempThinkingScore, setTempThinkingScore] = useState<number | number[]>(
    thinking
  );
  const [tempJudgingScore, setTempJudgingScore] = useState<number | number[]>(
    judging
  );

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(
      tempIntrovertScore !== introvert ||
        tempObservantScore !== observant ||
        tempThinkingScore !== thinking ||
        tempJudgingScore !== judging
    );
  }, [
    tempIntrovertScore,
    tempObservantScore,
    tempThinkingScore,
    tempJudgingScore,
    introvert,
    observant,
    thinking,
    judging,
  ]);

  const handleEditClick = () => {
    setTempIntrovertScore(introvertScore);
    setTempObservantScore(observantScore);
    setTempThinkingScore(thinkingScore);
    setTempJudgingScore(judgingScore);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    // TODO: Send updates to backend
    setIntrovertScore(tempIntrovertScore);
    setObservantScore(tempObservantScore);
    setThinkingScore(tempThinkingScore);
    setJudgingScore(tempJudgingScore);
    setIsEditing(false);
  };

  const sliderStyle = {
    rail: {
      backgroundColor: "#302D37",
      height: 20,
      borderRadius: 5,
      marginTop: -5,
    },
    track: {
      backgroundColor: "#302D37",
      height: 20,
      borderRadius: 5,
      marginTop: -5,
    },
    handle: {
      backgroundColor: "#7236EF",
      border: "none",
      height: 30,
      width: 20,
      marginLeft: 0,
      marginTop: -10,
      borderRadius: "10%",
      boxShadow: "none",
      outline: "none",
    },
  };

  return (
    <div className="game-selection-container rounded-2xl flex flex-col items-center bg-gray-200 w-full">
      <Title title="PERSONALITY" />
      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className="w-full flex flex-col items-center justify-center p-5">
        <div className="w-full mb-10">
          <div className="flex justify-between text-white font-bold text-sm mb-4">
            <div>INTROVERT</div>
            <div>EXTROVERT</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={tempIntrovertScore}
            onChange={(value) => setTempIntrovertScore(value)}
            styles={sliderStyle}
            disabled={!auth}
          />
        </div>

        <div className="w-full mb-10">
          <div className="flex justify-between text-white font-bold text-sm mb-4">
            <div>OBSERVANT</div>
            <div>INTUITIVE</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={tempObservantScore}
            onChange={(value) => setTempObservantScore(value)}
            styles={sliderStyle}
            disabled={!auth}
          />
        </div>

        <div className="w-full mb-10">
          <div className="flex justify-between text-white font-bold text-sm mb-4">
            <div>THINKING</div>
            <div>FEELING</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={tempThinkingScore}
            onChange={(value) => setTempThinkingScore(value)}
            styles={sliderStyle}
            disabled={!auth}
          />
        </div>

        <div className="w-full mb-10">
          <div className="flex justify-between text-white font-bold text-sm mb-4">
            <div>JUDGING</div>
            <div>PERCEIVING</div>
          </div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={tempJudgingScore}
            onChange={(value) => setTempJudgingScore(value)}
            styles={sliderStyle}
            disabled={!auth}
          />
        </div>
        <div className="w-full">
          {auth && isEditing && (
            <CancelSaveButton
              onCancelClick={handleEditClick}
              onSaveClick={handleSaveClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Personality;
