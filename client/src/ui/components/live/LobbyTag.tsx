import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const LobbyTag = (props: { tagName: string }) => {
  const tagName = props.tagName;
  return (
    <div className="tag-container flex flex-row items-center justify-start h-4 w-fill mt-2">
      <FontAwesomeIcon
        icon={faCircle}
        className="object-contain h-full w-5 text-green"
      />
      <div className="tag-name text-white content-center h-fill ml-2 w-auto whitespace-nowrap overflow-hidden text-ellipsis text-sm">
        {tagName}
      </div>
    </div>
  );
};

export default LobbyTag;
