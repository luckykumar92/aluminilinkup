import React from "react";
import CareerServicesCard from "./CareerServicesCard";

const CareerServices = () => {
  const careers = [
    {
      id: 1,
      name: "Summer Analyst Internship",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://www.goldmansachs.com/careers/students/programs/americas/summer-analyst-program.html",
    },
    {
      id: 2,
      name: "Full Stack Developer Job",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://in.best-jobs-online.com/serp/2/?position=Full%20Stack%20Developer&locphysical=9144064&qrn_source=google&qrn_medium=cpc&qrn_campaign=1063886811&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgPLZKh-c9-jyOkP5k-TaUhOlA3jEWFdlnODWAVShQmINBzTO6GcZSoaAl3OEALw_wcB",
    },
    {
      id: 3,
      name: "Cyber Security Professional Job",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://www.naukri.com/cyber-security-jobs",
    },
    {
      id: 4,
      name: "Data Science Jobs",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://builtin.com/jobs/data-analytics/data-science",
    },
    {
      id: 5,
      name: "Software Development Jobs",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://www.amazon.jobs/en-gb/job_categories/software-development",
    },
    {
      id: 6,
      name: "Machine Learning Jobs",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://www.naukri.com/machine-learning-jobs",
    },
    {
      id: 7,
      name: "IOT Engineer Jobs",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://www.naukri.com/iot-jobs",
    },
    {
      id: 8,
      name: "Resume Writing Tips",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "hhttps://in.indeed.com/career-advice/resumes-cover-letters/10-resume-writing-tips",
    },
    {
      id: 9,
      name: "Interview Preparation Guide",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://careers.umbc.edu/students/network/networking101/tips/",
    },
    {
      id: 10,
      name: "Networking Tips",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://careers.umbc.edu/students/network/networking101/tips/",
    },
    {
      id: 11,
      name: "Freelance platforms",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://careers.umbc.edu/students/network/networking101/tips/",
    },
    {
      id: 10,
      name: "Networking Events and Workshops",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://www.indeed.com/career-advice/career-development/types-of-networking-events",
    },
    {
      id: 11,
      name: "communication skill tips",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://in.indeed.com/career-advice/interviewing/communications-skills-interview-questions",
    },
    {
      id: 12,
      name: "leadership skill tips",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://www.futurelearn.com/info/blog/how-to-improve-leadership-skills",
    },
    {
      id: 13,
      name: "Group discussion tips",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "https://prepinsta.com/interview-preparation/group-discussion/",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="">
            <h1 className=" text-5xl text-blue-900 font-bold">
              Jobs Boards/Career Services
            </h1>
            <section className=" text-lg py-4">
              <h2>Let's Look Your Future for jobs...</h2>
              <p>
                Welcome to our Jobs Career Services section. Here you can find
                job listings, career resources, and more.
              </p>
            </section>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {careers.map((career) => (
              <CareerServicesCard key={career.id} career={career} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerServices;
