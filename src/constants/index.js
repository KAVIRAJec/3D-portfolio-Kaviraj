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
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    discord,
    pinterest,
    MERN,
    nextjs,
    mysql,
    express,
    azure,
    reactNative,
    database,
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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud & DevOps Developer",
      icon: creator,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "ShadCN UI",
    //   icon: tailwind,
    // },
    // {
    //   name: "Material UI",
    //   icon: tailwind,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React & NodeJS Developer",
      duration: "2 years",
      icon: reactjs,
      iconBg: "#383E56",
      points: [
        "Experienced in building web applications using React,Node,MERN, and other relevant technologies.",
        "Skilled in creating user interfaces with CSS frameworks like Tailwind CSS and Material UI.",
        "Implemented user authentication and authorization mechanisms using JWT, OAuth, and other libraries.",
        "Built individual projects including Pinterest clone, IoT projects, and a voice assistant and so.Skilled in deploying applications using platforms like Vercel and Render.",
      ],
    },
    {
      title: "React Native Developer",
      duration: "1 years",
      icon: reactNative,
      iconBg: "#E6DEDD",
      points: [
        "Experience in cross-platform mobile app development using React Native.",
        "Utilized various mobile dashboard components to create user-friendly interfaces.",
        "Worked in Iot project which is used to have complete control using mobile app.",
        "Integrated the mobile app with a Node.js backend for managing large amounts of data.",
      ],
    },
    {
      title: "NextJS Developer",
      duration: "1 years",
      icon: nextjs,
      iconBg: "#383E56",
      points: [
        "Developed web applications using Next.js, React.js, and TypeScript",
        "Optimized the performance of web applications by Next.js build process.",
        "Developed large-scale applications with capable of handling both client-side and server-side operations.",
        "Build a fully functional Discord clone with real-time messaging, voice/video calls, and other features.",
      ],
    },
    {
      title: "Database Developer",
      duration: "2 years",
      icon: database,
      iconBg: "#c7d1d6",
      points: [
        "Proficient in both relational databases (MySQL) and NoSQL databases (MongoDB), along with cloud solutions like Azure and Aiven.",
        "Utilized ORM tools like Prisma to enhance database performance.",
        "Developed a vehicle booking platform with user management, booking system, and admin functionalities(CRUD) using MongoDB Atlas.",
        "Experienced in writing query to access tables and run any complex operations in MySQL database",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Discord Clone",
      description:
        "A Discord clone built with Next.js, React.js, and TypeScript, featuring real-time messaging, file attachment, voice/video calls, member & server management and more using multiple open source libraries.",
      tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
        {
          name: "tailwind & ShadCN UI",
          color: "pink-text-gradient",
        },
      ],
      image: discord,
      live_link: "https://discord-clone-production-2131.up.railway.app/",
      source_code_link: "https://github.com/KAVIRAJec/Discord-clone",
    },
    {
      name: "Image Sharing Platform (Pinterest Clone)",
      description:
        "This project has the multiple features like google login, image uploding , separating images with the specified category, save the pins , delete the pins and some additional functionalities.",
      tags: [
        {
          name: "react JS",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity IO",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pinterest,
      live_link: "https://pintrest-clone-henna.vercel.app/",
      source_code_link: "https://github.com/KAVIRAJec/Pintrest-Clone",
    },
    {
      name: "Vehile Booking platform MERN",
      description:
        "Built a full-stack vehicle booking website for my college (MERN stack) with user management, booking system, and admin functionalities(CRUD) using ShadCN UI, RsuiteJS, and MongoDB Atlas.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "ShadCN UI",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB Atlas",
          color: "pink-text-gradient",
        },
      ],
      image: MERN,
      live_link: "https://vehicle-booking-management.herokuapp.com/",
      source_code_link: "https://github.com/KAVIRAJec/Vehicle-Booking-Data-Management-MERN-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };