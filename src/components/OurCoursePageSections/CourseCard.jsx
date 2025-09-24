
const CourseCard = ({ image, title, description, price }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card-image" />
      <div className="card-info">
        <span className="course-price">{price}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default CourseCard;