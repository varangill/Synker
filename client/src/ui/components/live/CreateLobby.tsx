import { useState } from "react";
import Dropdown from "../common/Dropdown";
import Title from "../common/Title";
import LobbyTag from "./LobbyTag";
import { Lobby } from "../../../types/Lobby";
import testUserList from "../../../mockData/testUserList.json"; // Assuming this is the list of test users
import testGame from "../../../mockData/testGame.json"; // Assuming this is the selected game
import { GeneralUser } from "../../../types/User"; // Import the User type

const CreateLobby = () => {
  const [selectedGame, setSelectedGame] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedMaxPlayers, setSelectedMaxPlayers] = useState<number[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [message, setMessage] = useState("");

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

  const handleFindClick = () => {
    if (!isFormComplete()) {
      setMessage("Invalid Form. Please fill out all fields.");
      return;
    }

    const id = "unique-lobby-id"; // TODO: Generate a unique ID for the lobby
    const owner: GeneralUser = testUserList[0]; // TODO: Make current user the owner of the lobby
    const playersList: GeneralUser[] = [];
    const createdDate = new Date();
    const startDate = new Date(); // Replace with actual start date if needed
    const title = selectedTitle || "Default Title"; // Assuming the first option is the game title
    const description = selectedDescription;
    const maxPlayers = selectedMaxPlayers[0]; // Replace with actual max players if needed
    const game = testGame; // Use testGame as the selected game

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

    // Display success message
    setMessage("Lobby creation successful!");

    // TODO: Perform any additional actions, such as sending the lobby to the backend
  };

  return (
    <div className="lobby-creation-container rounded-2xl flex flex-col items-center bg-gray-200 w-full h-full">
      <Title title="CREATE LOBBY" />
      <div className="title-line w-full bg-gray-100 h-1 mb-4"></div>
      <div className="flex flex-col justify-around w-4/5 h-full overflow-y-auto no-scrollbar pb-8">
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
          <div className="tag-list mt-4 flex flex-wrap gap-2 max-h-52 overflow-y-auto no-scrollbar">
            {selectedTags.map((tag, index) => (
              <LobbyTag key={index} tagName={tag} />
            ))}
          </div>
        </div>
        <div className="title-container flex-grow mb-4">
          <div className="text-white font-bold mb-1 text-sm">TITLE</div>
          <input
            type="text"
            className="title-input w-full p-2 rounded-md bg-gray-100 text-gray-900 text-white"
            placeholder="Enter lobby title..."
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
          />
        </div>
        <div className="description-container flex-grow mb-4">
          <div className="text-white font-bold mb-1 text-sm">DESCRIPTION</div>
          <textarea
            className="description-input w-full p-2 rounded-md bg-gray-100 text-gray-900 text-white"
            placeholder="Enter lobby description..."
            value={selectedDescription}
            style={{ height: "auto", overflowY: "hidden" }}
            rows={2}
            maxLength={150}
            onChange={(e) => setSelectedDescription(e.target.value)}
          />
        </div>
        {message ? (
          <div className="text-white font-bold text-sm flex items-end h-12 justify-center align-end">
            {message}
          </div>
        ) : (
          <div className="h-12" />
        )}
        <button
          className="btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"
          onClick={handleFindClick}
        >
          <div className="btn-text z-0 flex btn-text text-white h-8 font-bold items-center xl:text-xl lg:text-xl md:text-base sm:text-base">
            CREATE
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreateLobby;
