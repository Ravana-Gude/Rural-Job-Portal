
import React, { useRef } from "react";
import JobCard from "./JobCard"; // Adjust the path if needed
import "./HandicraftIndustries.css";

const jobs = [
    {
      title: "Farm Laborer",
      wage: "Rs 10 per hour",
      hours: "6 hours",
      location: "Village velvadam",
      image: "https://c8.alamy.com/comp/GEAM50/banks-lancashire-uk-25th-july-2016-uk-weather-eu-national-farm-workers-GEAM50.jpg"
    },
    {
      title: "Construction Worker",
      wage: "Rs 15 per hour",
      hours: "8 hours",
      location: "Village vemavaram",
      image: "https://th.bing.com/th/id/OIP.PqUd6T87TBc75zRDn0xXOgHaE8?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Artisan",
      wage: "Negotiable",
      hours: "Flexible",
      location: "Village Anakapalli",
      image: "https://th.bing.com/th/id/OIP.iNqktmQlUxr6smsF2hj97QHaES?rs=1&pid=ImgDetMain"
    },
    {
      title: "Field Irrigation Helper",
      wage: "Rs 9 per hour",
      hours: "5 hours",
      location: "Village D",
      image: "https://th.bing.com/th/id/OIP.9hLe9_G5RfPrqtyxwcUjtwHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Cattle Feeder",
      wage: "Rs 8 per hour",
      hours: "4 hours",
      location: "Mylavaram",
      image: "https://th.bing.com/th/id/OIP.FEuCU4g-c281buLiUxLe1gHaE7?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Well Digger",
      wage: "Rs 12 per hour",
      hours: "7 hours",
      location: "Ibrahimpatnam",
      image: "https://th.bing.com/th/id/OIP.u9n7WPstOBf52KkJOO-mngHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Crop Sorter",
      wage: "Rs 9 per hour",
      hours: "6 hours",
      location: "petlooru",
      image: "https://th.bing.com/th/id/OIP.Iqml6PbaRoOd_MCTvYONZAHaEb?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Fence Repairer",
      wage: "Rs 10 per hour",
      hours: "5 hours",
      location: "vemavram",
      image: "https://th.bing.com/th/id/OIP.bjFkHcJ8kh2j9gYVl4fZ0AHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Poultry Assistant",
      wage: "Rs 11 per hour",
      hours: "4 hours",
      location: "Velvadam",
      image: "https://th.bing.com/th/id/OIP.62F9Riecgm3qztgjfSj98QHaFc?rs=1&pid=ImgDetMain"
    },
    {
      title: "Tree Planter",
      wage: "Rs 10 per hour",
      hours: "6 hours",
      location: "Mylavarm",
      image: "https://th.bing.com/th/id/OIP.871KSTCxqLqaJ6PC4luWzwAAAA?w=202&h=124&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
    // Add the remaining jobs here
  ];
function HandicraftIndustries() {
  const jobSectionRef = useRef(null);

  return (
    <div className="HandicraftIndustries">
      <div className="main" ref={jobSectionRef}>
        <h2>Available Daily Wages Jobs</h2>
        <div className="job-grid">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HandicraftIndustries;
