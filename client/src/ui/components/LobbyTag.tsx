import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const LobbyTag = (props: { tagName: string }) => {
  // Tag name
  const tagName = props.tagName;
  return (
    <div className="tag-container flex flex-row">
      <FontAwesomeIcon
        icon={faCircle}
        className="object-contain h-2/4 w-5 text-green p-4"
      />
      <div>{tagName}</div>
    </div>
  );
};

export default LobbyTag;
