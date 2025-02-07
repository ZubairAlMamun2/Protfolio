import { Link, NavLink, useParams } from "react-router-dom";

const projects = [
  {
    name: "Pet Adoption Site",
    stack: ["HTML", "CSS", "Javascript"],
    description: "A platform connecting pet adopters with shelters.",
    Detailed_description: "The Pet Adoption Site is a web application that helps users browse and adopt pets easily. It provides categorized pet listings, detailed pet profiles, and a seamless user experience. The project efficiently fetches pet data using APIs and implements interactive UI elements for better engagement.",
    liveLink: "https://pet-shop-1971.netlify.app/",
    github: "https://github.com/ZubairAlMamun2/Pet-Adoption-Site",
    challenges: "Managing real-time updates .",
    futurePlans: "Implement AI-based pet matching and real-time chat between adopters and shelters."
  },
  {
    name: "Blood Donation App",
    stack: ["React", "MongoDB","Node.js","Express", "Tailwind CSS"],
    description: "An app to find and connect blood donors.",
    Detailed_description: "The Blood Donation App is designed to create a user-friendly platform that facilitates blood donation activities. It connects donors with those in need, promoting a seamless and efficient donation process.",
    liveLink: "https://bloooddonate-1971.netlify.app/",
    github: "https://github.com/ZubairAlMamun2/Blood-Donation-App",
    challenges: "Ensuring data privacy and user verification.",
    futurePlans: "Integrate a notification system for urgent blood needs and gamify donor engagement."
  },
  {
    name: "Funding Collection App",
    stack: ["React", "Node.js", "Express", "MongoDB","Tailwind CSS"],
    description: "A crowdfunding platform for social causes.",
    Detailed_description: "This is a crowdfunding app where users can create and manage fundraising campaigns. It allows easy donations to causes using modern web technologies.",
    liveLink: "https://crowdcube-1971.netlify.app/",
    github: "https://github.com/ZubairAlMamun2/Funding-Collection-App",
    challenges: "Implementing secure payment transactions.",
    futurePlans: "Expand to support global funding and integrate blockchain for transparent transactions."
  }
];

export default function Details() {
  const { id } = useParams();
  
  const project = projects[id];

  if (!project) return <p className="text-white">Project not found.</p>;

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">{project.name}</h1>
        <p className="text-gray-300 mb-6">{project.Detailed_description}</p>
        <h2 className="text-xl font-semibold text-purple-300">Main Technology Stack</h2>
        <p className="text-gray-400 mb-4">{project.stack.join(", ")}</p>
        <h2 className="text-xl font-semibold text-purple-300">Challenges Faced</h2>
        <p className="text-gray-400 mb-4">{project.challenges}</p>
        <h2 className="text-xl font-semibold text-purple-300">Potential Improvements & Future Plans</h2>
        <p className="text-gray-400 mb-4">{project.futurePlans}</p>
        <div className="flex gap-4">
          <a href={project.liveLink} target="blank"  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all">Live Project</a>
          <a href={project.github} target="blank" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all">GitHub Repo</a>
          <NavLink to="/" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all">Go Back</NavLink>
        </div>
      </div>
     
    </section>
  );
}
