import React from "react";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: "Alumini Friends",
      description:
        "Ms. Priya Singh's project featured as 'Project of the Week' on a popular open-source platform.",

      imageSrc:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww",
      imageAlt: "Alumini",
    },
    {
      id: 2,
      name: "Alumini Friends",
      description:
        "Mr. Rahul Gupta surpassed 1,000 contributions to major open-source repositories.",

      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByb2plY3R8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Alumini",
    },
    {
      id: 3,
      name: "Alumini Friends",
      description:
        "10 AlumniLinkUp members received prestigious tech scholarships through our networking initiatives.",

      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661766292640-abf05d03a1ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFByb2plY3R8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Alumini",
    },
    {
      id: 4,
      name: "Alumini Friends",
      description:
        "Ms. Neha Patel selected as keynote speaker at a national industry conference.",

      imageSrc:
        "https://media.istockphoto.com/id/855256042/photo/engineers-of-wind-turbine.webp?b=1&s=170667a&w=0&k=20&c=7k4p_03udn5SDWUtdk9Kyv5PrL6umEPZWKHKh_K8lvg=",
      imageAlt: "Alumini",
    },
    {
      id: 5,
      name: "Alumini Friends",
      description:
        "AlumniLinkUp mentorship program led to a 20% increase in alumni career advancements.",

      imageSrc:
        "https://media.istockphoto.com/id/1903901827/photo/view-of-compasses-pencil-drawing-background.webp?b=1&s=170667a&w=0&k=20&c=c494W9u5NOKJXGjd62FfToi7a2XG6cqva12QIV8TrC0=",
      imageAlt: "Alumini",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          <h1 className=" text-7xl text-black font-[900] text-center pb-10">Achievements</h1>{" "}
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {achievements.map((achievement) => (
            <AchievementCard achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
