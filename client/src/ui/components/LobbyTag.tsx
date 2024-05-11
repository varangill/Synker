import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const LobbyTag = (props: { tagName: string }) => {
  // Tag name
  const tagName = props.tagName;
  return (
    <div className="tag-container flex flex-row items-center">
      <FontAwesomeIcon
        icon={faCircle}
        className="object-contain h-1/4 w-5 text-green p-4"
      />
      <div className="tag-name text-white content-center h-2/4 w-auto whitespace-nowrap overflow-hidden text-ellipsis text-sm">
        {tagName}
      </div>
    </div>
  );
};

export default LobbyTag;
