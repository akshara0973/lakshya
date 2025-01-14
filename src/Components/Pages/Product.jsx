import React, { useState } from "react";

export default function FeaturedProducts() {
  const products = [
    { src: "/img/doormat.jpg", title: "Doormat", note:"Inviting" },
    { src: "/img/p12.jpeg", title: "Shawl", note:"Luxurious" },
    { src: "/img/4h.jpg", title: "Handmade Bags",note:"Artisanal" },
    { src: "/img/p7.jpeg", title: "Scented Candle",note:"Aromatherapy" },
    { src: "/img/pickle.jpeg", title: "Pickle",note:"Zesty" },
    { src: "/img/c5.jpeg", title: "Piggy Bank",note:"Charming" },
    { src: "/img/p8.jpeg", title: "Jewellery Box",note:"Elegant" },
    { src: "/img/p13.jpeg", title: "Turmeric",note:"Golden" },
    { src: "/img/pur.jpg", title: "Purse",note:"Trendy" },
    { src: "/img/C100.jpg", title: "Pottery",note:"Exquisite" },
    { src: "/img/p6.jpeg", title: "Gel Diya" ,note:"Enchanting"},
    { src: "/img/p9.jpg", title: "Ladies Shawl",note:"Charming" },
  ];

  const [flipped, setFlipped] = useState(Array(products.length).fill(false));

  const handleCardClick = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <>
      <style>{`
        .featured-section {
          padding: 20px;
          text-align: center;
        }
       .featured-section h2,.featured-section p {
           font-family: 'Arial', sans-serif;
        }
       .featured-section p {
          font-style: italic;
          margin-top: 10px;
        }
        .products-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .card {
          perspective: 1000px;
          width: 200px;
          height: 250px;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .card-flipped {
          transform: rotateY(180deg); /* Flip the card */
        }
        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card-front {
          background: #fff;
        }
        .card-front img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        .card-back {
          background: linear-gradient(135deg,rgb(195, 64, 232), #feb47b); /* Gradient background */
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotateY(180deg);
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          padding: 10px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .card-back h5 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Text shadow for depth */
          font-family:times-new-roman;
        }
        .card-back p {
          font-size: 14px;
          font-weight: 600;
          margin-top: 8px;
          opacity: 0.9;
          font-family:italic;
        }
        .tap-message {
          font-size: 14px;
          font-weight: bold;
          color: #333;
          margin: 15px 0;
          text-align: center;
          font-family: 'Arial', sans-serif;
          background-color:rgb(249, 250, 233);
          padding: 8px;
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-out;
        }

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
      `}</style>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <p>Echoes of Inspiration</p>
        <p className="tap-message">Tap to flip and see details!</p>

        <div className="products-container">
          {products.map((product, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`card-inner ${
                  flipped[index] ? "card-flipped" : ""
                }`}
              >
                {/* Front side of the card */}
                <div className="card-front">
                  <img src={product.src} alt={product.title} />
                </div>
                {/* Back side of the card */}
                <div className="card-back">
                  <h5>{product.title}</h5>
                  <p>{product.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
