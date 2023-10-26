import React from 'react';

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
  <div className="card bg-dark text-white border-0 mx-3">
    <img
      className="card-img img-fluid"
      src="./images/ecommerce.jpg"
      alt="Card"
      height={500}
    />
    <div className="card-img-overlay d-flex align-items-center">
      <div className="container text-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}> 
        <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
        <p className="card-text fs-5 d-none d-sm-block">
          Your one-stop destination for all your shopping needs. Explore a vast selection of products, from the latest fashion trends to cutting-edge electronics, all designed to make your life better and more enjoyable.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
