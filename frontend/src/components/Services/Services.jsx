import React from "react";
import ServicesCard from "./ServicesCard";
import { Star } from "lucide-react";

const Services = () => {
  const products = [
    {
      id: 1,
      name: "Alumini Friends",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww",
      imageAlt: "Alumini",
      buttonText: "View Alumini",
    },
    {
      id: 1,
      name: "Events/News",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww",
      imageAlt: "Events/News",
      buttonText: "View News/Events",
    },
    {
      id: 2,
      name: "Achievements",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww",
      imageAlt: "Achievements",
      buttonText: "View Achievements",
    },
    {
      id: 3,
      name: "Volunteer opportunities",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww",
      imageAlt: "Volunteer opportunities",
      buttonText: "View Volunteer opportunities",
    },
    {
      id: 4,
      name: "Job Board/Career Services",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus deleniti",
      slug: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww",
      imageAlt: "Job Board/Career Services",
      buttonText: "View Job Board/Career Services",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=""></div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((service) => (
            <ServicesCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
