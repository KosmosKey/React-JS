import React, { Component } from "react";
import {
  Button,
  Collapse,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Form,
} from "react-bootstrap";
class PromoCodeDiscount extends Component {
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
          className="promo-code-button"
          bsStyle="link"
          variant="light"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <Row className="show-grid mt-3">
            <Col md={12}>
              <Form>
                <FormGroup controlId="formInlineName">
                  <FormLabel>Promo Code</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter promo code"
                    value={this.props.promoCode}
                    onChange={this.handleChnage}
                  />
                  <Button
                    block
                    bsStyle="success"
                    variant="success"
                    className="btn-round mt-3"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default PromoCodeDiscount;
