import { useState } from "react";

import Dropdown from "../common/Dropdown";
import TextArea from "../common/TextArea";
import SectionCard from "../common/SectionCard";
import LobbyTag from "./LobbyTag";
import Button from "../common/Button";
import Input from "../common/Input";

import { Lobby } from "../../../types/Lobby";
import { GeneralUser } from "../../../types/User";

import testUserList from "../../../mockData/testUserList.json";
import testGame from "../../../mockData/testGame.json";

import { showErrorToast, showSuccessToast } from "../../utils/ShowToast";

const CreateLobby = () => {
  const [selectedGame, setSelectedGame] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedMaxPlayers, setSelectedMaxPlayers] = useState<number[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleGameChange = (selectedValues: (string | number)[]) => {
    setSelectedGame(selectedValues as string[]);
  };

  const handlePlayerChange = (selectedValues: (string | number)[]) => {
    setSelectedMaxPlayers(selectedValues as number[]);
  };

  const handleTagSelectionChange = (selectedValues: (string | number)[]) => {
    setSelectedTags(selectedValues as string[]);
  };

  const isFormComplete = () => {
    return (
      selectedGame.length > 0 &&
      selectedMaxPlayers.length > 0 &&
      selectedMaxPlayers[0] > 0 &&
      selectedTitle.trim() !== "" &&
      selectedDescription.trim() !== "" &&
      selectedTags.length > 0
    );
  };

  const list = [
    "Valorant",
    "League of Legends",
    "Clash of Clans",
    "Lethal Company",
    "Apex",
    "Fortnite",
  ];

  const players = [1, 2, 3, 4, 5, 6, 7, 8];

  const tagsList = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

  const handleCreateClick = () => {
    if (!isFormComplete()) {
      showErrorToast("Form is incomplete.");
    } else {
      const id = "unique-lobby-id"; // TODO: Generate a unique ID for the lobby
      const owner: GeneralUser = testUserList[0]; // TODO: Make current user the owner of the lobby
      const playersList: GeneralUser[] = [];
      const createdDate = new Date();
      const startDate = new Date();
      const title = selectedTitle || "Default Title";
      const description = selectedDescription;
      const maxPlayers = selectedMaxPlayers[0];
      const game = testGame; // TODO: Get game from backend

      const newLobby: Lobby = {
        id,
        owner,
        players: playersList,
        createdDate,
        startDate,
        title,
        description,
        maxPlayers,
        game,
        lobbyTags: selectedTags,
      };

      // Log the new Lobby object
      console.log(newLobby);

      // Reset the form values to their defaults
      setSelectedGame([]);
      setSelectedTags([]);
      setSelectedMaxPlayers([]);
      setSelectedTitle("");
      setSelectedDescription("");

      // TODO: Perform any additional actions, such as sending the lobby to the backend
      showSuccessToast(`${selectedTitle} lobby created.`);
    }
  };

  return (
    <SectionCard title="CREATE LOBBY">
      <div className="flex flex-col justify-around w-4/5 h-full overflow-y-auto no-scrollbar pb-8 mt-4">
        <div className="dropdown-container mb-4">
          <div className="text-white font-bold mb-1 text-sm">GAME</div>
          <Dropdown
            dropdownList={list}
            selectedList={selectedGame}
            type="single"
            onSelectionChange={handleGameChange}
            placeholder="SELECT GAME ..."
          />
        </div>
        <div className="dropdown-container mb-4">
          <div className="text-white text-sm font-bold mb-1">PLAYERS</div>
          <Dropdown
            dropdownList={players}
            selectedList={selectedMaxPlayers}
            type="single"
            onSelectionChange={handlePlayerChange}
            placeholder="0"
          />
        </div>
        <div className="dropdown-container mb-4">
          <div className="text-white font-bold mb-1 text-sm">TAGS</div>
          <Dropdown
            dropdownList={tagsList}
            selectedList={selectedTags}
            type="multiple"
            onSelectionChange={handleTagSelectionChange}
            placeholder="SELECT TAGS ..."
          />
          <div className="tag-list flex flex-wrap flex-grow gap-2 max-h-52 overflow-y-auto no-scrollbar">
            {selectedTags.map((tag, index) => (
              <LobbyTag key={index} tagName={tag} />
            ))}
          </div>
        </div>
        <div className="title-container mb-4">
          <Input
            label="Title"
            type="text"
            className="title-input w-full p-2 rounded-md bg-primary-100 text-primary-900 text-white"
            placeholder="Enter lobby title..."
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
            id="lobbyTitle"
          />
        </div>
        <div className="description-container flex-grow mb-4">
          <div className="text-white font-bold mb-1 text-sm">DESCRIPTION</div>
          <TextArea
            variant="fill"
            placeholder="Enter lobby description..."
            rows={2}
            maxLength={150}
            setCurrentInputText={setSelectedDescription}
          />
        </div>

        <Button text="CREATE" onClick={handleCreateClick} variant="fill" />
      </div>
    </SectionCard>
  );
};

export default CreateLobby;
