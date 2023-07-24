import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Application Engineer",
      company_name: "Canon Business Machines Philippines",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2015 - Feb 2017",
      points: [
        "Developing and maintaining web applications using HTML, CSS JavaScript, PHP, MySQL and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical Support Specialist",
      company_name: "Toolkit",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mar 2017 - Oct 2017",
      points: [
        "Providing technical assistance and support to end-users onsite.",
        "Resolving user inquiries related to system errors, application functionality, and general technical concerns.",
        "Collaborating with cross-functional teams to address recurrent technical issues and improve overall system performance."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Globe Telecom - KonsultaMD",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Collaborating with stakeholders to gather project requirements, understand objectives, and define project scope.",
        "Designing and creating wireframes and mockups using HTML, CSS, and JavaScript to visualize the website's layout and functionalities.",
        "Developing responsive and user-friendly web applications useful for managing patient medical records, subscribers survey feedback modules, hr web forms and IT support ticketing system using HTML, CSS, and JavaScript frameworks like Vue.js.",
        "Implement interactive features, animations, and transitions to enhance user experience and engagement.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Eurekare Corp.",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2019 - May 2021",
      points: [
        "Designing, developing, and maintaining the server-side logic, databases, and APIs that power web applications and services.",
        "Collaborating with the front-end development team and other stakeholders to understand project requirements and ensure seamless integration of front-end and back-end components.",
        "Developing APIs to enable smooth communication between the front-end and back-end systems, ensuring data exchange and functionality.",
      ],
    },
    {
      title: "Sr. Frontend Engineer",
      company_name: "Trend Micro, Inc.",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - May 2023",
      points: [
        "Utilizing experience with Vue.js and React to build responsive and interactive web applications that meet design specifications and performance requirements.",
        "Collaborating closely with the design and product teams to understand project goals, wireframes, and design mockups, ensuring seamless integration of design concepts into the frontend development process.",
        "Implementing and maintaining robust CI/CD pipelines to facilitate efficient and automated testing, building, and deployment of frontend applications.",
        "Optimizing application performance, identifying and addressing bottlenecks in rendering, loading times, and overall user experience.",
        "Integrating with backend APIs and services, ensuring smooth communication and efficient data exchange between frontend and backend systems.",
        "Troubleshooting and debugging frontend issues, working collaboratively with other engineering teams to resolve any system-wide or cross-functional problems."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but JV proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like JV does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After JV optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };