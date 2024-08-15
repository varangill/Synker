import "../../App.css";
import Navigation from "../components/common/Navigation.tsx";
import Profile from "../components/profile/Profile.tsx";
import ProfileCarousel from "../components/profile/ProfileCarousel.tsx";
import { getData } from "../../api/index.ts";
import { useEffect } from "react";
import testUser from "../../mockData/testUser.json";
import ReviewCard from "../components/profile/ReviewCard.tsx";
import Personality from "../components/profile/Personality.tsx";
import testReviewList from "../../mockData/testReviewList.json";
import { Review } from "../../types/Review.tsx";

const reviewList: Review[] = testReviewList.map((review) => ({
  ...review,
  createdTime: new Date(review.createdTime),
}));

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
    <div className="App flex flex-row bg-primary-100 h-screen">
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
              <ReviewCard reviewsList={reviewList} />
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
