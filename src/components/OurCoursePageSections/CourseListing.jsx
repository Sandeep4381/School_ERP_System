// src/components/OurCoursePageSections/CourseListing.jsx

import React from 'react';
import CourseCard from './CourseCard.jsx';
// Import your CSS file for styling the grid layout

const courses = [
  {
    image: '/path/to/course-image1.png',
    title: '50 Days of Ethical Hacking From Beginner to Pro in 2024',
    description: 'Master ethical hacking, from beginner to advanced professional...',
    price: '$ 1,999'
  },
  {
    image: '/path/to/course-image2.png',
    title: '50 Hours of Excel: From Zero to Pro in Excel Full Course in 2024',
    description: 'Become a certified Excel expert with this complete 50-hour course...',
    price: '$ 1,999'
  },
  {
    image: '/path/to/course-image3.png',
    title: '20 Hours of DevOps From Beginner to Expert in DevOps Engineering Course',
    description: 'Get hands-on experience in DevOps and learn to automate your workflows...',
    price: '$ 1,999'
  }
];

const CourseListing = () => {
  return (
    <section className="course-listing">
      <div className="course-card-grid">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseListing;