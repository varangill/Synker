const NavigationButton = (props: { url: string }) => {
  const currentPath = window.location.pathname;
  if (currentPath == props.url) {
    // Renders a highlighted button according to URL
    return (
      <button className="btn-default flex rounded-xl bg-purple-100 hover:bg-purple-200 w-3/4 items-left">
        <img></img>
        <div className="btn-text text-white font-bold">SYNC</div>
      </button>
    );
  } else if (props.url == "highlight") {
    // Highlighted buttons not used in navigation bar
    return <div></div>;
  } else {
    // All other buttons
    return <div></div>;
  }
};
export default NavigationButton;
