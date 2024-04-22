// import blogData from "../../data/blogData";
import { useRouter } from "next/router";
import Link from "next/link";
import Filter from "../home-page/Filter";

export default function TournamentsCard(props) {
  // const router = useRouter();

  // const blogSlice = blogData.slice(0, 6);

  // const handleViewMoreClick = () => {
  //   router.push("/blog");
  // };

  const gameTournaments = [
    {
      tournamentName: "Battle Royale Championship 3",
      dateTime: "2023-11-15 14:00",
      daysRemaining: 20,
      organizer: {
        username: "GamerPro123",
        profileImage:
          "https://wallpapers.com/images/featured/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg",
      },
    },
    {
      tournamentName: "First-Person Shooter Showdown",
      dateTime: "2023-12-03 10:30",
      daysRemaining: 49,
      organizer: {
        username: "ShooterMaster",
        profileImage:
          "https://wallpapers.com/images/featured/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg",
      },
    },
    {
      tournamentName: "MOBA Mayhem Return of Legend ",
      dateTime: "2023-11-28 16:15",
      daysRemaining: 34,
      organizer: {
        username: "MOBAGuru",
        profileImage:
          "https://wallpapers.com/images/featured/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg ",
      },
    },
    {
      tournamentName: "Racing Rivals Cup in venas shicagoo",
      dateTime: "2023-11-20 18:00",
      daysRemaining: 26,
      organizer: {
        username: "SpeedDemon",
        profileImage:
          "https://wallpapers.com/images/featured/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg ",
      },
    },
    {
      tournamentName: "Chess Grandmasters Super Challenge",
      dateTime: "2023-11-22 13:45",
      daysRemaining: 28,
      organizer: {
        username: "ChessWizard",
        profileImage:
          "https://wallpapers.com/images/featured/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg",
      },
    },
    {
      tournamentName: "Sports Simulation Global League",
      dateTime: "2023-12-10 11:00",
      daysRemaining: 56,
      organizer: {
        username: "SportsFanatic",
        profileImage:
          "https://wallpapers.com/images/featured/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg",
      },
    },
  ];

  return (
    <>
      <section className=" ">
        <h1 className="text-2xl text-center my-5 font-bold">{props.heading}</h1>
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-4">
          {gameTournaments.map((data) => (
            <div
              key={data.daysRemaining}
              className="bg-white shadow-md border border-gray-200 rounded-lg"
            >
              <Link href="#">
                <img
                  className="rounded-t-lg w-full"
                  src="https://t3.ftcdn.net/jpg/03/23/88/08/360_F_323880864_TPsH5ropjEBo1ViILJmcFHJqsBzorxUB.jpg"
                  alt=""
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {data.tournamentName}
                  </h5>
                </a>
                <div className="flex justify-between">
                  <p className="font-normal text-gray-700 mb-3">
                    {data.dateTime}
                  </p>
                  <p className="font-normal text-white inline-block bg-orange-500 rounded-full px-2 py-2 text-sm">
                    In {data.daysRemaining} Days
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={data.organizer.profileImage}
                    alt="User Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="ml-4 font-medium text-gray-800">
                    {data.organizer.username}
                  </p>
                </div>

                {/* <a
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  href="#"
                >
                  {data.organizer.username}
                </a> */}
              </div>
            </div>
          ))}
        </div>
        <button
          className="block mx-auto mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          // onClick={handleViewMoreClick}
        >
          View More
        </button>
      </section>
    </>
  );
}
