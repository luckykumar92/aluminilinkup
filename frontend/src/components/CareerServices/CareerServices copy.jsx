import React from "react";
import "./style.css";

const CareerServices = () => {
  return (
    <>
      <section >
        <h2 className=" text-4xl font-bold">
          Let's Look Your Future for jobs...
        </h2>
        <p className=" leading-3 py-2">
          Welcome to our Jobs Career Services section. Here you can find job
          listings, career resources, and more.
        </p>
      </section>
      <div className="flex flex-row">
        <div>
          <h2 className=" text-xl font-[300] py-5">Current Job Listings</h2>
          <ul className=" space-y-3">
            <li className=" border-2 border-blue-400">
              <a href="https://www.goldmansachs.com/careers/students/programs/americas/summer-analyst-program.html">
                Summer Analyst Internship
              </a>
            </li>
            <li className=" border-2 border-blue-400">
              <a href="https://in.best-jobs-online.com/serp/2/?position=Full%20Stack%20Developer&locphysical=9144064&qrn_source=google&qrn_medium=cpc&qrn_campaign=1063886811&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgPLZKh-c9-jyOkP5k-TaUhOlA3jEWFdlnODWAVShQmINBzTO6GcZSoaAl3OEALw_wcB">
                Full Stack Developer Job
              </a>
            </li>
            <li className=" border-2 border-blue-400">
              <a href="https://www.naukri.com/cyber-security-jobs">
                Cyber Security Professional Job
              </a>
            </li>
            <li className=" border-2 border-blue-400">
              <a href="https://builtin.com/jobs/data-analytics/data-science">
                Data Science Jobs
              </a>
            </li>
            <li className=" border-2 border-blue-400">
              <a href="https://www.amazon.jobs/en-gb/job_categories/software-development">
                Software Development Jobs
              </a>
            </li>
            <li className=" border-2 border-blue-400">
              <a href="https://www.naukri.com/machine-learning-jobs">
                Machine Learning Jobs
              </a>
            </li>
            <li className=" border-2 border-blue-400">
              <a href="https://www.naukri.com/robotics-engineer-jobs">
                Robotics Engineer Jobs
              </a>
            </li>
            <li className=" border-2 border-blue-400">
              <a href="https://www.naukri.com/iot-jobs">IOT Engineer Jobs</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-[300]">Career Resources</h2>
          <ul>
            <li>
              <a href="https://in.indeed.com/career-advice/resumes-cover-letters/10-resume-writing-tips">
                Resume Writing Tips
              </a>
            </li>
            <li>
              <a href="https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success">
                Interview Preparation Guide
              </a>
            </li>
            <li>
              <a href="https://careers.umbc.edu/students/network/networking101/tips/">
                Networking Tips
              </a>
            </li>
            <li>
              <a href="https://www.g2.com/categories/freelance-platforms">
                Freelance platforms
              </a>
            </li>
            <li>
              <a href="https://www.indeed.com/career-advice/career-development/types-of-networking-events">
                Networking Events and Workshops
              </a>
            </li>
            <li>
              <a href="https://in.indeed.com/career-advice/interviewing/communications-skills-interview-questions">
                communication skill tips
              </a>
            </li>
            <li>
              <a href="https://www.futurelearn.com/info/blog/how-to-improve-leadership-skills">
                leadership skill tips
              </a>
            </li>
            <li>
              <a href="https://prepinsta.com/interview-preparation/group-discussion/">
                Group discussion tips
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CareerServices;
