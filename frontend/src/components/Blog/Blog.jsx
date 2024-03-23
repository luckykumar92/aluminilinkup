import React from "react";
import BlogsCard from "./BlogsCard";
import blogimg1 from "@/assets/image/blog/1.jpg";
import blogimg2 from "@/assets/image/blog/2.jpg";
import blogimg3 from "@/assets/image/blog/3.jpg";
import blogimg4 from "@/assets/image/blog/4.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      name: "34 Inexpensive Alumni Engagement Ideas",
      description:
        "Here are 34 cost-effective ways to boost alumni engagement. Some cost nothing, some require minimal investment, but all can help you attract and engage more alumni.",
      slug: "/alumini",
      imageSrc: blogimg1,
      imageAlt: "Alumini",
      buttonText: "View Alumini",
    },
    {
      id: 2,
      name: "Alumni & Advancement: Agree on a Definition of Engagement",
      description:
        "Without a clear definition of alumni engagement, institutions struggle. This definition will help alumni & advancement professionals work smarter together.",
      slug: "/events",
      imageSrc: blogimg2,
      imageAlt: "Events/News",
      buttonText: "View News/Events",
    },
    {
      id: 3,
      name: "The Two Types of Alumni Loyalty, and How to Earn Them",
      description:
        "Alumni loyalty can be either transactional or emotional. When alumni are loyal emotionally, they give and engage at higher rates. engaged alumni.",
      slug: "/achievements",
      imageSrc: blogimg3,
      imageAlt: "Achievements",
      buttonText: "View Achievements",
    },

    {
      id: 4,
      name: "The 3 Highest Rated (Not Lame) Alumni Benefits",
      description:
        "Benefits are meant to help boost alumni engagement, and must be personally relevant to be effective. Here are three best practices to achieve more emotionally",
      slug: "/career",
      imageSrc:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9ifGVufDB8fDB8fHww",
      imageAlt: "Job Board/Career Services",
      buttonText: "View Job Board/Career Services",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          <h1 className=" text-3xl sm:text-7xl text-black font-[900] text-center pb-10 ">
            Blogs
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {blogs.map((blog) => (
            <BlogsCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
