import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          {/* <div className="col-md-12"> */}
            <div className="col-md-8">
              <NavLink
                className="navbar-brand text-black fw-bold fs-4 px-2"
                to="/"
              >
                {' '}
                Quinnnaira Store
              </NavLink>
            </div>
            <div className="col-md-8">
              <a
                className="text-dark fs-4"
                href="https://www.linkedin.com/in/obehi-isikhuemen-297756205/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          {/* </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
