import("../../App.css");
import Navigation from "../components/Navigation.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import testUser from "../../test/testUser.tsx";

export default function SyncPage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="sync-screen-container flex w-full flex-wrap overflow-x-hidden p-10 gap-10 h-full justify-center">
        <div className="sync-container flex flex-wrap bg-gray-200 w-full h-full rounded-2xl items-center justify-center gap-14 overflow-y-scroll no-scrollbar p-20">
          <ProfileCard
            profilePicture={testUser.getProfilePicture()}
            username={testUser.getUsername()}
            description={testUser.getDescription()}
            gameTags={testUser.getGameTags()}
            membership={testUser.getMembership()}
          />
          <ProfileCard
            profilePicture={testUser.getProfilePicture()}
            username={testUser.getUsername()}
            description={testUser.getDescription()}
            gameTags={testUser.getGameTags()}
            membership={testUser.getMembership()}
          />
          <ProfileCard
            profilePicture={testUser.getProfilePicture()}
            username={testUser.getUsername()}
            description={testUser.getDescription()}
            gameTags={testUser.getGameTags()}
            membership={testUser.getMembership()}
          />
        </div>
      </div>
    </div>
  );
}
