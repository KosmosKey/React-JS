import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-detials-button"
          bsStyle="link"
          variant="light"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "See" : `Hide`} item details
          {this.state.open === false ? "+" : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <Media.Body>
                <img
                  height={200}
                  width={200}
                  alt="thumbnail"
                  src="//i5.walmartimages.com/asr/4104a16d-4ebb-4387-ae36-2619f3d2f232_1.466980d10b5491837b6578303f1c4967.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
                />
              </Media.Body>
              <Media.Body>
                <p>Essentials by OFM Gaming Leather Gaming Chair, Blue</p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong>{`$${this.props.price}`} </strong>
                  <br />
                  <strong className="price-strike">
                    {`$${this.props.price}`}
                  </strong>
                </Col>
                <Col md={6}>Qty: 1</Col>
              </Row>
              </Media.Body>
             
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
