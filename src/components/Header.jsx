import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

const Header = () => {
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-dark">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-2 text-center">
              <Link to="/">
                <img
                  alt="logo"
                  width={70}
                  height={70}
                  src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png"
                />
              </Link>
            </div>
            <div className="col-sm-1">
                <Link to="/404" style={{ textDecoration:'none' }}>
                  <div style={{color:'orange', fontWeight: '500'}}>Delivery</div>
                  <div style={{color:'white', fontWeight: '500'}}><h4>Order</h4></div>
                </Link>
            </div>
            <div className="col-sm-1">
                <Link to="/404" style={{ textDecoration:'none' }}>
                  <div style={{color:'orange', fontWeight: '500'}}>Get Fresh</div>
                  <div style={{color:'white', fontWeight: '500'}}><h4>Promotions</h4></div>
                </Link>
            </div>
            <div className="col-sm-3">
                <Link to="/404" style={{ textDecoration:'none'}}>
                  <div className = "ms-5" style={{color:'orange', fontWeight: '500'}}>Exclusive</div>
                  <div className = "ms-5" style={{color:'white', fontWeight: '500'}}><h4>Large Order</h4></div>
                </Link>
            </div>
            <div className="col-md-1">
              <div className="position-relative d-inline">
                  <Link to="/404" style={{ textDecoration:'none'}}>
                     <div className = "ms-5" style={{color:'orange', fontWeight: '500'}} />
                     <div style={{color:'white', fontWeight: '500'}}><h3>Login</h3></div>
                  </Link>
              </div>
            </div>
            <div className="col-sm-3">
                <Link to="/404" className="btn btn-secondary" style={{height: '100px'}}>
                  <IconCart3 className="i-va" style={{height: '70px', width: '50px'}}/>
                  <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                    2
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
