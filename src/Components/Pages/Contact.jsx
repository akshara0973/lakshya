import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Contact() {
  const [result, setResult] = useState("");
  const [rating, setRating] = useState(0); // State for the rating

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Add access key and rating
    formData.append("access_key", "95dbfcaf-b6bd-4310-bd8d-bbdf9f3e3c6e");
    formData.append("rating", rating); // Add numeric rating to the form data

    // Add star representation of the rating
    const starRepresentation = "★".repeat(rating) + "☆".repeat(5 - rating);
    formData.append("rating_stars", starRepresentation); // Add stars to form data

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset(); // Reset the form after success
        setRating(0); // Reset the rating
      } else {
        console.error("Error:", data);
        setResult(data.message || "Form submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Contact Us
          </h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"></div>
          <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={onSubmit}>
              <input type="hidden" name="from_name" value="Lakshya Foundation" />
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Mobile No"
                      required
                    />
                    <label htmlFor="phone">Mobile No</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      name="message"
                      style={{ height: "150px" }}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                {/* Rating Section */}
                <div className="col-12">
                  <Typography component="legend">Rate Your Experience</Typography>
                  <Rating
                    name="user-rating"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue); // Update rating state
                    }}
                  />
                </div>

                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from contact page"
                />
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
