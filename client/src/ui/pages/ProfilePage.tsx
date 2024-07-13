import "../../App.css";
import Navigation from "../components/Navigation.tsx";
import Profile from "../components/Profile.tsx";
import ProfileCarousel from "../components/ProfileCarousel.tsx";
import { getData } from "../../api/index.ts";
import { useEffect } from "react";
import testUser from "../../mockData/testUser.tsx";
import ReviewCard from "../components/ReviewCard.tsx";
import Personality from "../components/Personality.tsx";
import testReviewList from "../../mockData/testReviewList.tsx";

// TODO: Get user from the back-end
export default function ProfilePage() {
  // TODO: Authentication
  const auth = true; // Default to true if needed immediately

  useEffect(() => {
    getData(`user`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="profile-screen-container flex flex-row w-full h-full flex-wrap overflow-y-scroll overflow-x-hidden p-10 gap-10 justify-center no-scrollbar">
        <div>
          <Profile
            profilePicture={testUser.profilePicture}
            username={testUser.username}
            description={testUser.description}
            gameTags={testUser.gameTags}
            membership={testUser.membership}
            auth={auth}
          />
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="sm:w-96 md:w-96 lg:w-[800px]">
            <ProfileCarousel images={testUser.carousel.images} auth={auth} />
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="w-96">
              <ReviewCard reviewsList={testReviewList} />
            </div>
            <div className="w-96">
              <Personality
                introvert={testUser.introvert}
                observant={testUser.observant}
                thinking={testUser.thinking}
                judging={testUser.judging}
                auth={auth}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
