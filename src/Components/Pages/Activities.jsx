import React, { useState } from "react";

export default function Team() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "What Lakshya Offers?",
      content: "Offers vocational training & life skills to build confidence, & practical skills for personal & professional growth.",
    },
    {
      title: "Handloom Projects",

      content: 
      "Celebrates handcrafted textiles, blending heritage with innovation for sustainable, eco-friendly livelihoods.",
    },
    {
      title: "Computer Training",
      content: "Equips individuals with digital skills to thrive in a tech-driven world, fostering confidence,and career opportunities.",
    },
    {
      title: "Marketting",
      content:"Stalls provide a vibrant platform to showcase products, connect with customers, and build lasting relationships.",
    },
    {
      title:"NIOS",
      content:"NIOS offers flexible education, empowering students to learn at their own pace and grow academically and personally.",
    },
    {
      title:"Sports",
      content:"Sports foster fitness, resilience, confidence, and a healthy lifestyle.",
    },
    {
      title:"Adventure",
      content:"It sparks curiosity and courage, inspiring individuals to explore and live life fully.",
    },
    {
      title:"Crafting Pickles & Spices",
      content:"Empowers individuals by offering livelihood opportunities and fostering independence through products like pickles and masalas.",
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
