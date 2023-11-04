import ProfileCard from "@/components/user-profile/ProfileCard";
import TournamentsCard from "@/components/layout/TournamentsCard";
const User = () => {
  return (
    <>
      <section>
        <ProfileCard />

        <TournamentsCard heading="Joined Tournaments" />
      </section>
    </>
  );
};

export default User;
