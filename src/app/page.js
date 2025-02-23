"use client";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCss3Alt,
  FaDocker,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiDigitalocean,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbChartInfographic } from "react-icons/tb";

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const experience = [
    {
      company: "Delta Exchange",
      role: "Frontend Engineer",
      period: "Jan 2024 - Present",
      achievements: [
        "Integrated Idfy Mobile Verification for KYC and profile updates, including backend API updates for phone number verification flows, enhancing security and user verification processes.",
        "Developed the Delta India Strip feature to transition Indian users from a global platform to an Indian platform, optimizing user experience and compliance with regional regulations.",
        "Updated the Position and Order Tab to version 2, introducing new features and improvements to enhance trading efficiency and user interface.",
        "Implemented restrictions on global sign-ups for Indian users to direct them to an Indian platform, improving conversion in the Indian platform.",
        "Blocked KYC for Indian users on the global platform to direct them to an Indian platform.",
        "Implemented tracking cookies for new users to enhance marketing strategies and user engagement analysis.",
        "Added mark price to watchlists and option spreads in the trading interface, providing traders with real-time pricing visibility and improving trading decision accuracy.",
        "Resolved analytics page crashes by debugging and optimizing the options analytics page, ensuring consistent uptime and reliability.",
      ],
    },
    {
      company: "Grapevine",
      role: "Frontend Engineer",
      period: "Apr 2023 - Jan 2024",
      achievements: [
        "Developed a highly impactful Salary data visualization tool using NextJS, React Native, Apache Echarts, and Tailwind CSS which successfully drove over 20k user acquisition.",
        "Implemented interactive scatter plot, enabling the display of detailed information and related data points in a bottom sheet upon tapping a specific data point.",
        "Developed a custom bottom sheet from scratch, incorporating a comprehensive list of companies with corresponding salary details, featuring seamless search and sort functionality for an enhanced user experience.",
        "Implemented a streamlined cross-platform communication strategy between the web and React Native, enabling secure passage of JWT tokens to the web view layer.",
        "Ensured coherent identity handling, allowing for the timely refresh of access tokens within the web view local storage to optimize the authentication flow.",
        "Implemented a function to generate and refresh JWT tokens seamlessly, considering token expiration and handling errors for improved security. Utilized local storage for efficient storage.",
        "Achieved a significant optimization milestone by reducing FCP (First Contentful Paint) and LCP (Largest Contentful Paint) from 3ms to less than 1ms.",
        "Attained a perfect SEO performance score of 100, validated by Lighthouse and WebPageTest assessments, underscoring a commitment to delivering high-quality web experiences.",
      ],
    },
    {
      company: "Flipkart",
      role: "Frontend Engineer",
      period: "Oct 2021 - Apr 2023",
      achievements: [
        "Successfully migrated and implemented new tracking events (Impression, Click, Engagement, and Pageview) from Omniture to the Flipkart Data Platform, enhancing data analytics capabilities.",
        "Engineered a widget for User Generated Content, featuring Popular Products with Ratings and Reviews, optimizing SEO through Server Side Rendering on the Flipkart mobile website.",
        "Developed a widget for the Browse Page of the Flipkart mobile website. Integrated a native React Web Component within React Native to parse HTML, resulting in significant improvements in mobile-first index ranking on Google Search.",
        "Created an internal UI tool to empower business teams in managing, controlling, and optimizing SEO data for both the Flipkart mobile and desktop websites.",
      ],
    },
    {
      company: "Competent Groove",
      role: "Full Stack Engineer",
      period: "2019 - 2021",
      achievements: [
        "Built a comprehensive dashboard for the Feetport App, serving Sales, Field Service, and Field Operation Teams with over 50,000 users.",
        "Created customer-centric features for efficient management and customization of data, including licenses, users, and profiles.",
        "Engineered a Customer Support Service integrating customer emails with the Dashboard Chat, utilizing AWS SES Service and Node.js.",
      ],
    },
    {
      company: "Artificial Brix",
      role: "Full Stack Engineer",
      period: "2018 - 2019",
      achievements: [
        "Built Content Management Systems for customers.",
        "Developed REST APIs and implemented strict validations and test cases.",
        "Designed and implemented user interfaces and integrated REST APIs to create a smooth User Experience.",
        "Managed and led a team of Interns.",
      ],
    },
  ];

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={32} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={32} /> },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" size={32} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" size={32} />,
    },
    { name: "React", icon: <FaReact className="text-cyan-400" size={32} /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" size={32} /> },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" size={32} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-700" size={32} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" size={32} />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" size={32} /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" size={32} />,
    },
    { name: "Docker", icon: <FaDocker className="text-blue-600" size={32} /> },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-blue-500" size={32} />,
    },
    {
      name: "DigitalOcean",
      icon: <SiDigitalocean className="text-blue-400" size={32} />,
    },
    { name: "RxJS", icon: <FaJs className="text-yellow-400" size={32} /> },
    {
      name: "Apache ECharts",
      icon: <TbChartInfographic className="text-red-600" size={32} />,
    },
  ];
  const blogs = [
    {
      title: "Prototypal Inheritance in JavaScript - Easy and Practical Way",
      link: "https://tsgoswami.hashnode.dev/prototypal-inheritance-in-javascript-easy-and-practical-way",
    },
    {
      title: "Let, Const, and the Temporal Dead Zone",
      link: "https://tsgoswami.hashnode.dev/let-const-and-the-temporal-dead-zone",
    },
    {
      title: "Understanding Hoisting in Depth - Made Easy",
      link: "https://tsgoswami.hashnode.dev/understanding-hoisting-in-depth-made-easy",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section
        id="about"
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.svg')] opacity-10"></div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl mb-6">
          <img
            src="/dp.jpeg"
            alt="Profile Picture"
            className="mx-auto rounded-full border-4 border-gray-500 shadow-lg w-full h-full object-cover"
          />
        </div>
        <h1 className="md:text-6xl text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-lg text-center">
          Trishnangshu Goswami
        </h1>
        <p className="text-2xl max-w-3xl text-gray-300 mb-6 leading-relaxed text-center">
          Tech maverick, with no degree tag. Engineering dreams by avoiding the
          drag. Software Engineer @ Delta Exchange | Formerly Grapevine,
          Flipkart. 🌐🚀💻
        </p>
        <p className="text-lg max-w-3xl text-gray-400 mb-8 leading-relaxed">
          Passionate about crafting interactive and high-performance web
          applications. Experienced in React, Next.js, Node.js, and more.
          Building scalable solutions with a focus on performance and user
          experience.
        </p>
        <div className="flex space-x-6 relative">
          <a
            href="https://github.com/badman-returns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white text-xl transition duration-300"
          >
            <FaGithub size={28} /> <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/trishnangshugoswami"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white text-xl transition duration-300"
          >
            <FaLinkedin size={28} /> <span>LinkedIn</span>
          </a>
          <a
            href="mailto:trishnangshugoswami@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-white text-xl transition duration-300"
          >
            <Mail size={28} /> <span>Email</span>
          </a>
        </div>
      </section>

      {/* Experience section */}
      {visible && (
        <section id="experience" className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 sm:text-4xl">
              Experience
            </h2>
            <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto gap-10">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 w-full transition-all duration-700 ease-out transform opacity-100 translate-y-0"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white p-3 rounded-full shadow-md">
                    <FaBriefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-md text-center mb-4">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="list-none text-gray-300 space-y-3 text-left pl-6">
                    {exp.achievements.map((detail, i) => (
                      <li
                        key={i}
                        className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-pink-500 before:rounded-full"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 sm:text-3xl">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-700 p-6 w-32 h-32 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 justify-center"
              >
                {skill.icon}
                <p className="text-gray-300 text-lg font-semibold text-center mt-2">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-16 bg-gray-800 text-white rounded-xl shadow-lg border border-gray-700 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 sm:text-3xl">
            Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600 hover:scale-105 hover:shadow-xl transition-transform"
              >
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-purple-400 hover:text-purple-500 text-lg font-semibold"
                >
                  {blog.title} <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 bg-gray-900">
        <p>© 2025 Trishnangshu Goswami. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
