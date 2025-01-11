import React, { useState } from "react";

export default function Team() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "What Lakshya Offers?",
      content: "Provides vocational training and life skills to help individuals lead independent and fulfilling lives. It focuses on building confidence, self-reliance, and practical skills essential for personal and professional growth. With an emphasis on skilled living.",
    },
    {
      title: "Handloom Projects",

      content: "Celebrating the rich tradition of handcrafted textiles while creating sustainable livelihoods for artisans. By blending heritage with innovation and promote eco-friendly practices, weaving a brighter future for all.",
    },
    {
      title: "Computer Training",
      content: "It equips individuals with essential digital skills, enabling them to thrive in today’s tech-driven world. It opens doors to learning, and career opportunities, fostering confidence and competence in the digital era.",
    },
    {
      title: "Marketting",
      content:"Through stalls offers a direct and engaging way to connect with customers. It creates a vibrant platform to showcase products, build brand awareness, and foster meaningful interactions, turning curiosity into lasting relationships.",
    },
    {
      title:"NIOS",
      content:"Schooling through NIOS provides a flexible and inclusive education system, catering to diverse learning needs. It empowers students to pursue education at their own pace, offering academic success and personal growth beyond conventional classrooms.",
    },
    {
      title:"Sports",
      content:"Sports inspire physical fitness, mental resilience, and teamwork. They foster discipline, determination, and a sense of community, shaping individuals into confident and well-rounded personalities while promoting a healthy and active lifestyle.",
    },
    {
      title:"Adventure",
      content:"It ignites the spirit of curiosity and courage, offering unforgettable experiences and personal growth. It pushes boundaries, and creates lasting memories, inspiring individuals to explore, discover, and live life to the fullest.",
    },
    {
      title:"Crafting Pickles & Spices",
      content:"Lakshya empowers individuals with disabilities by providing livelihood opportunities. Students even showcase their creativity by making products like pickles and masalas, fostering independence and confidence.",
    },
    {
      title:"And lot more..."
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <>
      <style>
        {`
          .book-container {
            position: relative;
            width: 80%;
            max-width: 900px;
            margin: 50px auto;
            perspective: 1000px;
          }

          .book {
            position: relative;
            width: 100%;
            height: 400px;
            background: #fdf6e3;
            border: 1px solid #d3cbb8;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            transform-style: preserve-3d;
            transform: rotateY(0deg);
            animation: flipIn 1s ease;
          }

          .book-page {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: #f9f5ec;
          }

          .book-title {
            font-family: 'Georgia', serif;
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          }

          .book-content {
            font-family: 'Arial', sans-serif;
            font-size: 1.3rem;
            color: #555;
            line-height: 1.6;
          }

          .book-controls {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }

          .book-controls button {
            background:rgb(163, 45, 227);
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 1.2rem;
            cursor: pointer;
            border-radius: 5px;
            transition: background 0.3s ease, transform 0.2s ease;
          }

          .book-controls button:hover {
            background: #d35400;
            transform: scale(1.05);
          }

          @keyframes flipIn {
            from {
              transform: rotateY(90deg);
              opacity: 0;
            }
            to {
              transform: rotateY(0deg);
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="book-container">
        <div className="book">
          <div className="book-page">
            <h2 className="book-title">{pages[currentPage].title}</h2>
            <p className="book-content">{pages[currentPage].content}</p>
          </div>
        </div>
        <div className="book-controls">
          <button onClick={prevPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </>
  );
}
