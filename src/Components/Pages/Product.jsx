import React, { useState } from "react";

export default function FeaturedProducts() {
  const products = [
    {
      src: "/img/rangoli.jpeg",
      title: "Rangoli Design",
      // price: "Rs 78",
    },
    {
      src: "/img/p12.jpeg",
      title: "Shawl",
      // price: "Rs 200",
    },
    {
      src: "/img/4h.jpg",
      title: "Handmade Bags",
      // price: "Rs 30",
    },
    {
      src: "/img/p7.jpeg",
      title: "Scented Candle",
      // price: "Rs 90",
    },
    {
      src: "/img/c4.jpeg",
      title: "Mop",
      // price: "Rs 20",
    },
    {
      src: "/img/c5.jpeg",
      title: "Piggy Bank",
      // price: "Rs 15",
    },
    {
      src: "/img/p8.jpeg",
      title: "Jewellery Box",
      // price: "Rs 200",
    },
    {
      src: "/img/p13.jpeg",
      title: "Turmeric",
      // price: "Rs 120",
    },
    {
      src: "/img/pur.jpg",
      title: "Purse",
      // price: "Rs 120",
    },
    {
      src: "/img/C100.jpg",
      title: "Pottery",
      // price: "Rs 120",
    },
    {
      src: "/img/p6.jpeg",
      title: "Gel Diya",
      // price: "Rs 120",
    },
    {
      src: "/img/p9.jpg",
      title: "Ladies Shawl",
      // price: "Rs 120",
    },
  ];

  // State to track favorite status for each product
  const [favorites, setFavorites] = useState(Array(products.length).fill(false));

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const styles = {
    section: {
      padding: "20px",
      textAlign: "center",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
    product: {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "center",
      borderRadius: "8px",
      width: "200px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
    },
    productHover: {
      transform: "scale(1.05)",
    },
    img: {
      width: "100%",
      borderRadius: "5px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    price: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "10px",
    },
    heart: {
      cursor: "pointer",
      fontSize: "20px",
      marginTop: "10px",
    },
  };

  return (
    <section style={styles.section}>
      <h2>Featured Products</h2>
      <p>Echoes of Inspiration</p>
      <div style={styles.container}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              ...styles.product,
              ...(favorites[index] ? styles.productHover : {}),
            }}
          >
            <img src={product.src} alt={product.title} style={styles.img} />
            <div style={styles.des}>
              <h5 style={styles.title}>{product.title}</h5>
              <h4 style={styles.price}>{product.price}</h4>
              {/* Heart Icon */}
              <div
                onClick={() => toggleFavorite(index)}
                style={{
                  ...styles.heart,
                  color: favorites[index] ? "red" : "gray",
                }}
              >
                <i className={`fas fa-heart`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
