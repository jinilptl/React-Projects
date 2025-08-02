import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const Data = [
  {
    title: "Project Alpha",
    semiTitle: "UI/UX Case Study",
    desc: "This project focuses on building an intuitive user interface with excellent user experience. It includes responsive design, animation, and accessibility.",
    author: "Jinil",
    timing: "3 days ago",
  },
  {
    title: "Project Beta",
    semiTitle: "E-Commerce Dashboard",
    desc: "An advanced analytics dashboard for e-commerce admin. Features include sales stats, user engagement metrics, and product performance tracking.",
    author: "Adarsh",
    timing: "1 week ago",
  },
  {
    title: "Project Gamma",
    semiTitle: "Real-time Chat App",
    desc: "Built using WebSocket and Node.js, this chat app enables real-time communication with typing indicators, emojis, and user presence.",
    author: "Krish",
    timing: "2 days ago",
  },
  {
    title: "Project Delta",
    semiTitle: "Portfolio Website",
    desc: "Personal portfolio built with React and Tailwind CSS. Includes smooth animations, project showcase, and contact form with validations.",
    author: "Parth",
    timing: "5 days ago",
  },
  {
    title: "Project Epsilon",
    semiTitle: "Health Tracker App",
    desc: "Tracks daily exercise, meals, and water intake. Integrated with health APIs and includes visualization of progress using charts.",
    author: "Ajay",
    timing: "Yesterday",
  },
];

  let myref = useRef();
  
  
  return (
    <div
      className="relative z-10 p-4 md:p-10 lg:p-20 flex flex-wrap justify-center gap-8"
      ref={myref}
    >
      {Data.map((item,index)=>(
        <Card data={item} key={index} reference={myref}/>
      ))}
    </div>
  );
};

export default Foreground;
