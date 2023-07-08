import React from "react";
import { Modal, Container, Row, Table } from "react-bootstrap";

const ModalCamp = ({ open, setOpen, selectedItems, itemQuantities }) => {

  return (
    <>
      <Modal
        style={{ width: "100%", height: "100%" }}
        show={open}
        onHide={() => setOpen(false)}
        size="small"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>&#128968; &nbsp;Order Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <div className='form-div'>
                <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Item-Details</h5>
                <Container>
                  <Table responsive>
                    <table class="table table-bordered border-secondary">
                      <thead>
                        <tr>
                          <th>Item Name</th>
                          <th>Item Quantity</th>

                        </tr>
                      </thead>
                      <tbody>
                        {selectedItems.map((item) => (
                          <tr key={item.Item_Name}>
                            <td>{item.Item_Name}</td>
                            <td>{itemQuantities[item.Item_Name] || 1}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Table>
                </Container>

              </div>
            

            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCamp;
