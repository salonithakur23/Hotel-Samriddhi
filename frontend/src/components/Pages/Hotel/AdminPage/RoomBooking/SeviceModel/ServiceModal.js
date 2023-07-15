import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from 'react-toastify';

const baseURL = "http://localhost:4000/api/v1/room-services";

const ServiceModal = ({ opens, setOpens }) => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const inputRef = useRef(null);
  const [service_Name, setService_Name] = useState(null);
  const [date_Time, setDate_Time] = useState(null);

  const submitform = () => {
    try {
      axios.post("http://localhost:4000/api/v1/room-booking/new", {
        Service_Name: service_Name,
        Date_Time: date_Time

      });
      toast.success("Room Added Successfully");
      // navigate("/roomlist");
    } catch (error) {
      console.log(error.response);
    }
  };


  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setServices(response.data.ser);
    });
  }, []);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedServices((prevServices) => [...prevServices, value]);
    } else {
      setSelectedServices((prevServices) =>
        prevServices.filter((service) => service !== value)
      );
    }
  };

  const handleInputClick = () => {
    setShowCheckboxes((prevShowCheckboxes) => !prevShowCheckboxes);
  };

  const handleSubmit = () => {

    console.log(selectedServices);
  };

  return (
    <Modal
      style={{ width: "100%", height: "100%" }}
      show={opens}
      onHide={() => setOpens(false)}
      size="large"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title> &#128968; &nbsp;Add Service Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={12}>
              <div className="col-md-12 position-relative">
                <div className="col-md-12 position-relative">
                  <label className="label">Booking Date</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    // value={booking_Date_Time}
                    // onChange={(e) => setBooking_Date_Time(e.target.value)}
                    required
                  />
                </div>
                <br />
                <Form>
                  <Form.Group controlId="services">
                    <label className="label">Select Service</label>
                    <Form.Control
                      type="text"
                      value={service_Name}
                      onChange={(e) => setService_Name(e.target.value)}
                      placeholder="Choose"
                      onClick={handleInputClick}
                      readOnly
                      ref={inputRef}
                    />
                    {showCheckboxes && (
                      <div className="checkbox-options">
                        {services.map((service) => (
                          <Form.Check
                            key={service._id}
                            type="checkbox"
                            id={service._id}
                            label={service.Service_Name}
                            value={service.Service_Name}
                            checked={selectedServices.includes(
                              service.Service_Name
                            )}
                            onChange={handleCheckboxChange}
                          />
                        ))}
                      </div>
                    )}
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={submitform}>
          Add Services
        </Button>
      </Modal.Footer>

    </Modal>
  );
};

export default ServiceModal;


















