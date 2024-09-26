import React from 'react';
import './CoursesSection.scss';
import course1 from '../../assets/images/course1.jpg';
import course2 from '../../assets/images/course2.jpg';
import course3 from '../../assets/images/course3.jpg';
import { Link } from 'react-router-dom';

const courses = [
  { title: '30-Day Fitness Challenge', image: course1, price: 29.99, link: '30-day-fitness' },
  { title: '60-Day Fitness Challenge', image: course2, price: 49.99, link: '60-day-fitness' },
  { title: 'Nutrition Bootcamp', image: course3, price: 19.99, link: 'nutrition-bootcamp' },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="courses-section">
      <h2>Our Courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>€{course.price}</p>
            <Link to={`/product/${course.link}`}>
              <button className="cta-button">Enroll Now</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
