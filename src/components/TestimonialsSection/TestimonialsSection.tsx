import './TestimonialsSection.scss';
import client1 from '../../assets/images/client1.jpg';
import client2 from '../../assets/images/client2.jpg';

const testimonials = [
  {
    name: 'Client 1',
    feedback: 'Amazing experience, highly recommended!',
    image: client1,
  },
  {
    name: 'Client 2',
    feedback: 'The best training program I have ever done!',
    image: client2,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.feedback}</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
