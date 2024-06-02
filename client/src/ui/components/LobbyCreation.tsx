import { useState } from "react";
import Dropdown from "./Dropdown";
import LobbyTag from "./LobbyTag";
import { Lobby } from "../../models/Lobby";
import testUser from "../../test/testUser";
import testGame from "../../test/testGame";

const CreateLobby = () => {
  const [selectedGame, setSelectedGame] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleGameChange = (selectedValues: (string | number)[]) => {
    setSelectedGame(selectedValues as string[]);
  };

  const handlePlayerChange = (selectedValues: (string | number)[]) => {
    setSelectedPlayers(selectedValues as string[]);
  };

  const handleTagSelectionChange = (selectedValues: (string | number)[]) => {
    setSelectedTags(selectedValues as string[]);
  };

  const isFormComplete = () => {
    return (
      selectedGame.length > 0 &&
      selectedPlayers.length > 0 &&
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

  const players = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const tagsList = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

  const handleFindClick = () => {
    if (!isFormComplete()) {
      setMessage("Form is invalid. Please fill out all fields.");
      return;
    }

    const id = "unique-lobby-id"; // Generate a unique ID for the lobby
    const owner = testUser; // Use testUser as the owner
    const playersList = [testUser];
    const createdDate = new Date();
    const startDate = new Date(); // Replace with actual start date if needed
    const title = selectedTitle || "Default Title"; // Assuming the first option is the game title
    const description = selectedDescription;
    const maxPlayers = 5; // Replace with actual max players if needed
    const game = testGame; // Use testGame as the selected game

    const newLobby = new Lobby(
      id,
      owner,
      playersList,
      createdDate,
      startDate,
      title,
      description,
      maxPlayers,
      game,
      selectedTags
    );

    // Log the new Lobby object
    console.log(newLobby);

    // Reset the form values to their defaults
    setSelectedGame([]);
    setSelectedTags([]);
    setSelectedPlayers([]);
    setSelectedTitle("");
    setSelectedDescription("");

    // Display success message
    setMessage("Lobby creation successful!");

    // TODO: Perform any additional actions, such as sending the lobby to the backend
  };

  return (
    <div className="lobby-creation-container rounded-2xl flex flex-col items-center bg-gray-200 w-full h-full">
      <div className="lobby-creation-title flex text-white font-bold items-center p-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        LOBBY CREATION
      </div>
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
            selectedList={selectedPlayers}
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
        </div>{" "}
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
          <div className="text-white font-bold text-sm flex items-end h-12 justify-center">
            {message}
          </div>
        ) : (
          <div className="h-12" />
        )}
        <button
          className="btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"
          onClick={handleFindClick}
        >
          <div className="find-button z-0 flex btn-text text-white h-8 font-bold items-center xl:text-xl lg:text-xl md:text-base sm:text-base">
            CREATE
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreateLobby;
