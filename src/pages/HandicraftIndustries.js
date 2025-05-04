import React, { useRef } from "react";
import JobCard from "./JobCard"; // Adjust the path if needed
import "./HandicraftIndustries.css";

const jobs = [
  {
    title: "Weaver",
    wage: "$9 per hour",
    hours: "6 hours",
    location: "Village Narayanapuram",
    image: "https://thumbs.dreamstime.com/z/working-woman-weaving-threads-lotus-flowers-myanmar-http-wanderlustandlipstick-com-blogs-wandershopper-lotus-weavers-48568424.jpg"
  },
  {
    title: "Potter",
    wage: "$10 per hour",
    hours: "5 hours",
    location: "Village Mandapeta",
    image: "https://th.bing.com/th/id/OIP.4H3smXSEB9YCnvVuoHHKFAHaEP?rs=1&pid=ImgDetMain"
  },
  {
    title: "Carpenter",
    wage: "$12 per hour",
    hours: "7 hours",
    location: "Village Eluru",
    image: "https://th.bing.com/th/id/OIP.RIoGQItcbCDmuM8u7QDI_wHaE7?rs=1&pid=ImgDetMain"
  },
  {
    title: "Bamboo Artisan",
    wage: "$8 per hour",
    hours: "5 hours",
    location: "Village Paderu",
    image: "https://via.placeholder.com/400x300?text=Bamboo+Craft"
  },
  {
    title: "Embroidery Worker",
    wage: "$10 per hour",
    hours: "6 hours",
    location: "Village Amalapuram",
    image: "https://th.bing.com/th/id/OIP.-AV1hTN01lMMv1F_F9f6uQHaHa?rs=1&pid=ImgDetMain"
  },
  {
    title: "Terracotta Maker",
    wage: "$9 per hour",
    hours: "6 hours",
    location: "Village Rajahmundry",
    image: "https://www.dsource.in/sites/default/files/resource/terracotta-utility-and-artistic-products-kochi-kerala/making-process/minigallery/14227/10.jpg"
  },
  {
    title: "Jewelry Crafter",
    wage: "$11 per hour",
    hours: "5 hours",
    location: "Village Srikakulam",
    image: "https://img7.juzaphoto.com/001/shared_files/uploads/4576969.jpg"
  },
  {
    title: "Leather Craftsman",
    wage: "$12 per hour",
    hours: "6 hours",
    location: "Village Ongole",
    image: "https://img7.juzaphoto.com/001/shared_files/uploads/4576969.jpg"
  },
  {
    title: "Cane Furniture Maker",
    wage: "$10 per hour",
    hours: "6 hours",
    location: "Village Bhadrachalam",
    image: "https://www.dsource.in/sites/default/files/styles/mini_responsivecustom_user_moblie_1x/public/resource/cane-furniture-bangalore/making-process/minigallery/8896/10.jpg?itok=rPXb38gU%C3%97tamp=1443596302"
  },
  {
    title: "Block Printer",
    wage: "$9 per hour",
    hours: "5 hours",
    location: "Village Chirala",
    image: "https://www.thestatesman.com/wp-content/uploads/2022/02/Block-printing-Photo-Google-1.jpg"
  }
];

function HandicraftIndustries() {
  const jobSectionRef = useRef(null);

  return (
    <div className="HandicraftIndustries">
      <div className="main" ref={jobSectionRef}>
        <h2>Available Handicraft Industry Jobs</h2>
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
