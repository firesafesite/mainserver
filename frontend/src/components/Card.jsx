import "./Card.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Images({ images }) {
  const imgs = images.map((image) => {
    return (
      <img
        src={image + "?q=" + new Date()}
        alt=""
        key={image.id}
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open(image.replace("-175", ""), "_blank");
        }}
      />
    );
  });
  return imgs;
}

/**
 * Renders a card with a title, status, and a list of images.
 * The images are reloaded every 30 seconds.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.status - The status of the card.
 * @param {boolean} props.smokey - Indicates whether the card has a smokey background color.
 * @param {string[]} props.images - The list of image URLs to be displayed in the card.
 * @returns {JSX.Element} The rendered Card component.
 */
function Card({ title, status, smokey, images }) {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    smokey: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(Math.random());
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="card">
      <div className="card-header" style={{ display: "flex" }}>
        <div className="live-indicator flash-button"></div>
        <h3 style={{ width: "50%" }}>{title}</h3>
        <div
          className="status"
          style={{
            backgroundColor: smokey ? "#ff9797" : "#b4f3b4",
            borderRadius: "5px",
            width: "50%",
            padding: "1px 10px",
            height: "fit-content",
          }}
        >
          <p>{status}</p>
        </div>
      </div>
      <div className="images">
        <Images images={images} key={value} />
      </div>
    </div>
  );
}

export default Card;
