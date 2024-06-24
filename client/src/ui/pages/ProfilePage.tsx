import "../../App.css";
import Navigation from "../components/Navigation.tsx";
import Profile from "../components/Profile.tsx";
import { getData } from "../../api/index.ts";
import { useEffect } from "react";
import testUser from "../../test/testUser.tsx";
import ReviewCard from "../components/ReviewCard.tsx";
import testReviewList from "../../test/testReviewList";

export default function ProfilePage() {
  // Correctly initialized states with default values
  const auth = true; // Default to true if needed immediately

  useEffect(() => {
    getData(`user`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="profile-screen-container flex flex-row w-full h-full flex-wrap overflow-y-scroll overflow-x-hidden p-10">
        <Profile
          profilePicture={testUser.getProfilePicture()}
          username={testUser.getUsername()}
          description={testUser.getDescription()}
          gameTags={testUser.getGameTags()}
          membership={testUser.getMembership()}
          auth={auth}
        />
        <ReviewCard reviewsList={testReviewList} />
      </div>
    </div>
  );
}
