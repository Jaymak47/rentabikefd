import React from "react";
import MobileBanner from "../images/mobilebanner.png";
import RentABike from "../images/rentabike.png";
import { Row, Col } from "react-bootstrap";

function Banner() {
  return (
    <Row style={{ margin: "2px" }}>
      <Col md="6">
        <Row className="bannerText">
          <h1>Providing Quick Rental Bike Services </h1>
          <h1 className="quickloans">Scooters!</h1>{" "}
          <h5>
            Road Bike.Mountain Bike.Touring Bike.Folding Bike.Fixed Gear/ Track
            Bike.BMX.Recumbent Bike.Cruiser.
          </h5>
        </Row>

        <Row className="discounts">
          <button className="btn ">
            <h2>Open Account</h2>
            <img src={RentABike} alt="logo" className="openaccount" />
          </button>
        </Row>
      </Col>
      <Col>
        <img src={MobileBanner} alt="logo" className="mobilebanner" />
      </Col>
    </Row>
  );
}

export default Banner;
