// src/components/JobCard.js
import React, { useState } from "react";
import ApplyModal from "../ApplyModal";

function JobCard({ job }) {
  const [showModal, setShowModal] = useState(false);

  const handleApplyClick = () => {
    setShowModal(true);
  };

  return (
    <div className="job-card">
      {/* Image */}
      <img src={job.image} alt={job.title} className="job-image" />

      {/* Title & Wage */}
      <h3>{job.title}</h3>
      <div className="job-wage">{job.wage}</div>

      {/* Details */}
      <div className="job-info">
        <p><strong>Hours:</strong> {job.hours}</p>
        <p><strong>Location:</strong> {job.location}</p>
      </div>

      {/* Apply Button */}
      <button className="apply-btn" onClick={handleApplyClick}>
        Apply Now
      </button>

      {/* Modal */}
      {showModal && (
        <ApplyModal
          onClose={() => setShowModal(false)}
          jobTitle={job.title}
        />
      )}
    </div>
  );
}

export default JobCard;
