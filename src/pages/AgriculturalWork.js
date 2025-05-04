import React, { useRef } from "react";
import JobCard from "./JobCard"; // Adjust the path if needed
import "./AgriculturalWork.css";

const jobs = [
  {
    title: "Crop Harvester",
    wage: "$11 per hour",
    hours: "7 hours",
    location: "Village Palem",
    image: "https://th.bing.com/th/id/OIP.mC5K2efGaN8C5ZPDbH52TAHaFW?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    title: "Irrigation Technician",
    wage: "$12 per hour",
    hours: "6 hours",
    location: "Village Konduru",
    image: "https://th.bing.com/th/id/R.3f2f746524d7511fcf9e4ea1f017c8b1?rik=Lxqkxtk41PPv1A&riu=http%3a%2f%2fwolfcreekcompany.com%2fwp-content%2fuploads%2f2016%2f06%2fIrrigation-Technician.jpg&ehk=9041X4B3irAT5QXWjlDh6e0qkDcRQip3qWNAXSpZAn8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
  },
  {
    title: "Pesticide Sprayer",
    wage: "$10 per hour",
    hours: "5 hours",
    location: "Village Ananthapur",
    image: "https://th.bing.com/th/id/OIP.9dRgokrOfuSg3tk1H92aNgHaE8?rs=1&pid=ImgDetMain"
  },
  {
    title: "Seed Sower",
    wage: "$9 per hour",
    hours: "4 hours",
    location: "Village Ramapuram",
    image: "https://as2.ftcdn.net/v2/jpg/03/79/06/05/1000_F_379060554_gCi8TGhf5zMqcADkC9pezrWlvLhYnUdJ.jpg"
  },
  {
    title: "Farm Equipment Operator",
    wage: "$13 per hour",
    hours: "8 hours",
    location: "Village Bhimavaram",
    image: "https://th.bing.com/th/id/OIP.8K1AFNwiAkB4fQwXimcuRwHaE8?rs=1&pid=ImgDetMain"
  },
  {
    title: "Soil Tester",
    wage: "$14 per hour",
    hours: "6 hours",
    location: "Village Kollur",
    image: "https://th.bing.com/th/id/OSK.HERO5MoIV7vSmSCJWJSYoTpnykzcWILIyh2Aq-Bgg8QW6VA?w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"
  },
  {
    title: "Greenhouse Attendant",
    wage: "$12 per hour",
    hours: "7 hours",
    location: "Village Nandigama",
    image: "https://thumbs.dreamstime.com/z/greenhouse-worker-green-house-employee-work-38627792.jpg"
  },
  {
    title: "Livestock Feeder",
    wage: "$8 per hour",
    hours: "5 hours",
    location: "Village Machilipatnam",
    image: "https://th.bing.com/th/id/OIP.0iuj71GDJk4dbp-OD9FeXQHaE6?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    title: "Fruit Picker",
    wage: "$10 per hour",
    hours: "6 hours",
    location: "Village Palnadu",
    image: "https://media.istockphoto.com/id/1478140040/photo/portrait-of-a-country-man-picking-fruit-seriguela-siriguela-ceriguela-spondias.jpg?s=612x612&w=0&k=20&c=6YeCYAnTP0sRdxpBQvd39W7VCXpdHgeRcseHCW5aYRc="
  },
  {
    title: "Field Supervisor",
    wage: "$15 per hour",
    hours: "8 hours",
    location: "Village Repalle",
    image: "https://as2.ftcdn.net/v2/jpg/03/79/06/05/1000_F_379060554_gCi8TGhf5zMqcADkC9pezrWlvLhYnUdJ.jpg"
  }
];

function AgriculturalWork() {
  const jobSectionRef = useRef(null);

  return (
    <div className="AgriculturalWork">
      <div className="main" ref={jobSectionRef}>
        <h2>Agricultural Work Related Jobs</h2>
        <div className="job-grid">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgriculturalWork;
