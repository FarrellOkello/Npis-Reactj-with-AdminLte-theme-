import React from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";

function CompanyMasterModal(props) {
  const {
    action,
    handleSubmit,
    show,
    onHide,
    //     handleDelete,
    //     showDelete,
    //     onHideDelete,
    //     ID,
    CompanyCode,
    changeCompanyCode,
    CompanyName,
    changeCompanyName,
    CompanyRegistrationNumber,
    changeCompanyRegistrationNumber,
    Email,
    changeEmail,
    ContactPersonName,
    changeContactPersonName,
    ContactNumber,
    changeContactNumber,
    Nationality,
    changeNationality,
    CompanyType,
    changeCompanyType,
    Corporatestatus,
    changeCorporatestatus,
    //     IsActive,
    //     changeIsActive,
    AlternateEmail,
    changeAlternateEmail,
    AlternateContactNumber,
    changeAlternateContactNumber,
    Fax,
    changeFax,
    TaxIdentificationNumber,
    changeTaxIdentificationNumber,
    IsSubmitted,
    changeIsSubmitted,
    RegisterAddress,
    changeRegisterAddress,
    AlternateAddress,
    changeAlternateAddress,
    District,
    changeDistrict,
    CompanyRegion,
    changeCompanyRegion,
    County,
    changeCounty,
    Subcounty,
    changeSubcounty,
    Parish,
    changeParish,
    Zone_LC1,
    changeZone_LC1,
    PostalCode,
    CompanyRole,
    changeCompanyRole,
    CompanyLogoExtension,
    changeCompanyLogoExtension,
    PermitType,
    changePermitType,
    PermitNumber,
    changePermitNumber,
    PermitStatus,
    changePermitStatus,
    Company_Site,
    changeCompany_Site,
    PermitDetails,
    changePermitDetails,
    changePostalCode,
    // CreatedBy] = useState(0);
    // ModifiedBy] = useState(0);
  } = props;

  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-xl"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-xl">
            {action} CompanyMasters
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md="3">
                <Form.Group controlId="CompanyCode">
                  <Form.Label>Company Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Code"
                    value={CompanyCode}
                    onChange={changeCompanyCode}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="CompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Code"
                    value={CompanyName}
                    onChange={changeCompanyName}
                    required
                  />
                </Form.Group>
              </Col>
              {/* </Row>
            <Row> */}
              <Col md="3">
                <Form.Group controlId="CompanyRegistrationNumber">
                  <Form.Label>Company Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Registration Number"
                    value={CompanyRegistrationNumber}
                    onChange={changeCompanyRegistrationNumber}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={Email}
                    onChange={changeEmail}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Group controlId="ContactPersonName">
                  <Form.Label>Contact Person Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact Person Name"
                    value={ContactPersonName}
                    onChange={changeContactPersonName}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="ContactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact Number"
                    value={ContactNumber}
                    onChange={changeContactNumber}
                    required
                  />
                </Form.Group>
              </Col>
              {/* </Row>
            <Row> */}
              <Col md="3">
                <Form.Group controlId="Nationality">
                  <Form.Label>Nationality</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nationality"
                    value={Nationality}
                    onChange={changeNationality}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="CompanyType">
                  <Form.Label>Company Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Type"
                    value={CompanyType}
                    onChange={changeCompanyType}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Group controlId="Corporatestatus">
                  <Form.Label>Corporate status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Corporate Status"
                    value={Corporatestatus}
                    onChange={changeCorporatestatus}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="AlternateEmail">
                  <Form.Label>Alternate Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Alternate Email"
                    value={AlternateEmail}
                    onChange={changeAlternateEmail}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="AlternateContactNumber">
                  <Form.Label>Alternate Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Alternate Contact Number"
                    value={AlternateContactNumber}
                    onChange={changeAlternateContactNumber}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="Fax">
                  <Form.Label>Fax</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Fax"
                    value={Fax}
                    onChange={changeFax}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Group controlId="TaxIdentificationNumber">
                  <Form.Label>TIN No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="TIN No."
                    value={TaxIdentificationNumber}
                    onChange={changeTaxIdentificationNumber}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="IsSubmitted">
                  <Form.Label>Is Submitted</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Is Submitted"
                    value={IsSubmitted}
                    onChange={changeIsSubmitted}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="RegisterAddress">
                  <Form.Label>Register Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Register Address"
                    value={RegisterAddress}
                    onChange={changeRegisterAddress}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="AlternateAddress">
                  <Form.Label>Alternate Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Alternate Address"
                    value={AlternateAddress}
                    onChange={changeAlternateAddress}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Group controlId="District">
                  <Form.Label>District</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="District"
                    value={District}
                    onChange={changeDistrict}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="CompanyRegion">
                  <Form.Label>Company Region</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Region"
                    value={CompanyRegion}
                    onChange={changeCompanyRegion}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="County">
                  <Form.Label>County</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="County"
                    value={County}
                    onChange={changeCounty}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="Subcounty">
                  <Form.Label>Subcounty</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subcounty"
                    value={Subcounty}
                    onChange={changeSubcounty}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Group controlId="Parish">
                  <Form.Label>Parish</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Parish"
                    value={Parish}
                    onChange={changeParish}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="Zone_LC1">
                  <Form.Label>Zone LC1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zone LC1"
                    value={Zone_LC1}
                    onChange={changeZone_LC1}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="PostalCode">
                  <Form.Label>PostalCode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PostalCode"
                    value={PostalCode}
                    onChange={changePostalCode}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="CompanyRole">
                  <Form.Label>CompanyRole</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CompanyRole"
                    value={CompanyRole}
                    onChange={changeCompanyRole}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Group controlId="CompanyLogoExtension">
                  <Form.Label>Company Logo Extension</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Logo Extension"
                    value={CompanyLogoExtension}
                    onChange={changeCompanyLogoExtension}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="PermitType">
                  <Form.Label>Permit Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Permit Type"
                    value={PermitType}
                    onChange={changePermitType}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="PermitNumber">
                  <Form.Label>Permit Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Permit Number"
                    value={PermitNumber}
                    onChange={changePermitNumber}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="PermitStatus">
                  <Form.Label>PermitStatus</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PermitStatus"
                    value={PermitStatus}
                    onChange={changePermitStatus}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Group controlId="Company_Site">
                  <Form.Label>Company Site</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Site"
                    value={Company_Site}
                    onChange={changeCompany_Site}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="PermitDetails">
                  <Form.Label>Permit Details</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Permit Details"
                    value={PermitDetails}
                    onChange={changePermitDetails}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-elevate"
          >
            {action}
          </button>
        </Modal.Footer>
      </Modal>

      {/* <Modal
        show={showDelete}
        onHide={onHideDelete}
        aria-labelledby="example-modal-sizes-title-xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-xl">
            Delete Company Master
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="overlay overlay-block cursor-default">
          <Alert variant="light">
            <Alert.Heading>
              Are you sure to permanently delete this record?
            </Alert.Heading>
            <hr />
            <h3>{ID}</h3>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={onHideDelete}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleDelete}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
export default CompanyMasterModal;
