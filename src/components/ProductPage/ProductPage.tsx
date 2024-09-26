import { useParams } from 'react-router-dom';
import './ProductPage.scss'; // You can style this page separately

const ProductPage: React.FC = () => {
  const { productName } = useParams<{ productName: string }>(); // Get product name from URL

  // Here you could fetch more data based on `productName` if needed.
  // For now, let's just display the product name.

  return (
    <section className="product-page">
      <h1>{productName?.replace(/-/g, ' ')}</h1> {/* Replace dashes with spaces */}
      <p>Welcome to the {productName} course! This page could display more detailed information about the product.</p>
      <button className="cta-button">Purchase</button> {/* Add purchase functionality later */}
    </section>
  );
};

export default ProductPage;
