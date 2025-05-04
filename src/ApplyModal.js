// ApplyModal.js
import React, { useState } from "react";
import "./ApplyModal.css";

function ApplyModal({ onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, jobTitle })
      });

      if (!res.ok) throw new Error("Server error");

      alert("✅ Application submitted successfully!");
      setFormData({ name: "", email: "", phone: "", skills: "" });
      onClose();
    } catch (err) {
      console.error("❌ Submission error:", err);
      alert("❌ Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Apply for: {jobTitle}</h2>
        <form className="job-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label>Phone</label>
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />

          <label>Skills</label>
          <input name="skills" value={formData.skills} onChange={handleChange} />

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

export default ApplyModal;
