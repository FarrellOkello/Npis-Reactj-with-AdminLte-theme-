import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import { COMPANY_MASTERS_GRID } from "../_Common/Constants/Queries/CompanyMasters";
import { AgGridReact } from "ag-grid-react";
import CompanyMasterModal from "./CompanyMasterModal";
import { Button } from "reactstrap";
import { CREATE_COMPANY_MASTER } from "../_Common/Constants/Mutations/CompanyMasters";
import TableSpinner from "../Table/TableSpinner";

function CompanyMasters() {
  const [ID, setID] = useState(0);
  const [CompanyCode, setCompanyCode] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyRegistrationNumber, setCompanyRegistrationNumber] =
    useState("");
  const [Email, setEmail] = useState("");
  const [ContactPersonName, setContactPersonName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Nationality, setNationality] = useState("");
  const [CompanyType, setCompanyType] = useState("");
  const [Corporatestatus, setCorporatestatus] = useState("");
  const [IsActive, setIsActive] = useState(0);
  const [AlternateEmail, setAlternateEmail] = useState("");
  const [AlternateContactNumber, setAlternateContactNumber] = useState("");
  const [Fax, setFax] = useState("");
  const [TaxIdentificationNumber, setTaxIdentificationNumber] = useState("");
  const [IsSubmitted, setIsSubmitted] = useState(0);
  const [RegisterAddress, setRegisterAddress] = useState("");
  const [AlternateAddress, setAlternateAddress] = useState("");
  const [District, setDistrict] = useState("");
  const [CompanyRegion, setCompanyRegion] = useState("");
  const [County, setCounty] = useState("");
  const [Subcounty, setSubcounty] = useState("");
  const [Parish, setParish] = useState("");
  const [Zone_LC1, setZone_LC1] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  // const [CreatedBy] = useState(0);
  // const [ModifiedBy] = useState(0);
  const [CompanyRole, setCompanyRole] = useState("");
  const [CompanyLogoExtension, setCompanyLogoExtension] = useState("");
  const [PermitType, setPermitType] = useState("");
  const [PermitNumber, setPermitNumber] = useState("");
  const [PermitStatus, setPermitStatus] = useState("");
  const [Company_Site, setCompany_Site] = useState("");
  const [PermitDetails, setPermitDetails] = useState("");

  const [rowData, setRowData] = useState([]);
  const [RowDataLoading, setRowDataLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const handleGetCompanyMasters = useQuery(COMPANY_MASTERS_GRID);
  const [addCompanyMaster] = useMutation(CREATE_COMPANY_MASTER);

  const [columnDefs, setColumnDefs] = useState([
    { field: "ID", filter: true, resizable: false, hide: true },
    { field: "Company Code", filter: true, field: "CompanyCode" },
    { field: "Company Name", filter: true, field: "CompanyName" },
    {
      field: "Company Registration Number",
      filter: true,
      field: "CompanyRegistrationNumber",
    },
    { field: "Email", filter: true, field: "Email" },
    { field: "Contact Person Name", filter: true, field: "ContactPersonName" },
    { field: "Contact Number", filter: true, field: "ContactNumber" },
    { field: "Fax", filter: true, field: "Fax" },
    { field: "Nationality", filter: true, field: "Nationality" },
    { field: "Corporate status", filter: true },
    { field: "Company Type", filter: true, field: "CompanyType" },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  useEffect(() => {
    const { loading, error, data } = handleGetCompanyMasters;

    if (error) toastr.error("Failed", error.message);

    if (!loading && data) {
      setRowDataLoading(true);
      const companyMasters = data.companyMasters.map((d) => {
        return {
          ...d,
        };
      });
      setRowData(companyMasters);
      setRowDataLoading(false);
    }
  }, [handleGetCompanyMasters]);

  const handleAddNew = () => {
    setAction("Add");
    setShow(true);
  };

  const handleEdit = (data) => {
    setAction("Update");
    setShow(true);
    setID(data.ID);
  };

  const clearData = () => {
    setAction("");
  };

  const onHide = () => {
    setShow(false);
    clearData();
  };

  const onShowDelete = (data) => {
    setShowDelete(true);
  };

  const onHideDelete = () => {
    setShowDelete(false);
    clearData();
  };

  const handleSubmit = () => {
    if (action === "Add") {
      addCompanyMaster({
        variables: {
          CompanyCode: CompanyCode,
          CompanyName: CompanyName,
          CompanyRegistrationNumber: CompanyRegistrationNumber,
          Email: Email,
          ContactPersonName: ContactPersonName,
          ContactNumber: ContactNumber,
          Nationality: Nationality,
          Corporatestatus: Corporatestatus,
          CompanyType: CompanyType,
          IsActive: 1 /* IsActive */,
          AlternateEmail: AlternateEmail,
          AlternateContactNumber: AlternateContactNumber,
          Fax: Fax,
          TaxIdentificationNumber: TaxIdentificationNumber,
          IsSubmitted: 1,
          RegisterAddress: RegisterAddress,
          AlternateAddress: AlternateAddress,
          District: District,
          CompanyRegion: CompanyRegion,
          County: County,
          Subcounty: Subcounty,
          Parish: Parish,
          Zone_LC1: Zone_LC1,
          PostalCode: PostalCode,
          CreatedBy: 1,
          ModifiedBy: 1,
          CompanyRole: CompanyRole,
          CompanyLogoExtension: CompanyLogoExtension,
          PermitType: PermitType,
          PermitNumber: PermitNumber,
          PermitStatus: PermitStatus,
          Company_Site: Company_Site,
          PermitDetails: PermitDetails,
        },
      })
        .then(({ data: { createCompanyMaster } }) => {
          if (createCompanyMaster) {
            handleGetCompanyMasters.refetch();
            clearData();
            setShow(false);
            toastr.success("Success", "Company Master Added");
          } else {
            toastr.error("Failed", "Company Master Not Added");
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error, null, 2));
          toastr.error(
            "Failed",
            JSON.parse(JSON.stringify(error, null, 2)).message
          );
        });
      // } else if (action === "Update") {
      //   updateCgProject({
      //     variables: {
      //       Project_ID: Project_ID,
      //       Vote_By_Sub_SubProgID: Vote_By_Sub_SubProgID,
      //       Project_Code: Project_Code,
      //       Project_Name: Project_Name,
      //       Mandatory_Objectives: "",
      //       Responsible_Officer: "",
      //       Category: Category,
      //       Status: Status,
      //       Project_Status: Project_Status,
      //       Start_Date: Start_Date,
      //       End_Date: End_Date,
      //       Electronic_Signature_FileName: "",
      //       Modified_By: Modified_By,
      //     },
      //   })
      //     .then(({ data: { updateCgProject } }) => {
      //       if (updateCgProject) {
      //         handleGetProjects.refetch();
      //         clearData();
      //         setShow(false);
      //         toastr.success("Success", "Project Updated");
      //       } else {
      //         toastr.error("Failed", "Project Not Updated");
      //       }
      //     })
      //     .catch((error) => {
      //       toastr.error(
      //         "Failed",
      //         JSON.parse(JSON.stringify(error, null, 2)).message
      //       );
      //     });
    }
  };

  const handleDelete = () => {
    // if (Project_ID) {
    //   removeCgProject({
    //     variables: {
    //       Project_ID: Project_ID,
    //     },
    //   })
    //     .then(({ data: { removeCgProject } }) => {
    //       if (removeCgProject) {
    //         handleGetProjects.refetch();
    //         clearData();
    //         setShowDelete(false);
    //         toastr.success("Success", "Project Deleted");
    //       } else {
    //         toastr.error("Failed", "Project Not Deleted");
    //       }
    //     })
    //     .catch((error) => {
    //       toastr.error(
    //         "Failed",
    //         `Project Not Deleted${extractErrorMessage(error)}`
    //       );
    //     });
    // } else {
    //   toastr.error("Error", "Select Project to delete");
    // }
  };

  return (
    <>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Company Masters</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Company Masters</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <section className="col-lg-12 connectedSortable">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Company Masters</h3>
                  <div className="card-tools">
                    <ul className="nav nav-pills ml-auto">
                      <li className="nav-item">
                        <Button color="primary" onClick={handleAddNew}>
                          Add CompanyMaster
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="ag-theme-alpine" style={{ height: 400 }}>
                  {RowDataLoading ? (
                    <TableSpinner />
                  ) : (
                    <AgGridReact
                      rowData={rowData}
                      columnDefs={columnDefs}
                      defaultColDef={defaultColDef}
                      animateRows={true}
                      rowSelection="multiple"
                    />
                  )}
                </div>

                {/* <div
                  className="ag-theme-alpine"
                  style={{ width: 500, height: 500 }}
                >
                  <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    rowSelection="multiple"
                  />
                </div> */}
              </div>
            </section>
          </div>
        </div>
      </div>
      <CompanyMasterModal
        action={action}
        handleSubmit={handleSubmit}
        show={show}
        onHide={onHide}
        showDelete={onShowDelete}
        onHideDelete={onHideDelete}
        // handleDelete={handleDelete}
        ID={ID}
        CompanyCode={CompanyCode}
        changeCompanyCode={(e) => setCompanyCode(e.target.value)}
        CompanyName={CompanyName}
        changeCompanyName={(e) => setCompanyName(e.target.value)}
        CompanyRegistrationNumber={CompanyRegistrationNumber}
        changeCompanyRegistrationNumber={(e) =>
          setCompanyRegistrationNumber(e.target.value)
        }
        Email={Email}
        changeEmail={(e) => setEmail(e.target.value)}
        ContactPersonName={ContactPersonName}
        changeContactPersonName={(e) => setContactPersonName(e.target.value)}
        ContactNumber={ContactNumber}
        changeContactNumber={(e) => setContactNumber(e.target.value)}
        Nationality={Nationality}
        changeNationality={(e) => setNationality(e.target.value)}
        CompanyType={CompanyType}
        changeCompanyType={(e) => setCompanyType(e.target.value)}
        Corporatestatus={Corporatestatus}
        changeCorporatestatus={(e) => setCorporatestatus(e.target.value)}
        IsActive={IsActive}
        changeIsActive={(e) => setIsActive(e.target.value)}
        AlternateEmail={AlternateEmail}
        changeAlternateEmail={(e) => setAlternateEmail(e.target.value)}
        AlternateContactNumber={AlternateContactNumber}
        changeAlternateContactNumber={(e) =>
          setAlternateContactNumber(e.target.value)
        }
        Fax={Fax}
        changeFax={(e) => setFax(e.target.value)}
        TaxIdentificationNumber={TaxIdentificationNumber}
        changeTaxIdentificationNumber={(e) =>
          setTaxIdentificationNumber(e.target.value)
        }
        IsSubmitted={IsSubmitted}
        changeIsSubmitted={(e) => setIsSubmitted(e.target.value)}
        RegisterAddress={RegisterAddress}
        changeRegisterAddress={(e) => setRegisterAddress(e.target.value)}
        AlternateAddress={AlternateAddress}
        changeAlternateAddress={(e) => setAlternateAddress(e.target.value)}
        District={District}
        changeDistrict={(e) => setDistrict(e.target.value)}
        CompanyRegion={CompanyRegion}
        changeCompanyRegion={(e) => setCompanyRegion(e.target.value)}
        County={County}
        changeCounty={(e) => setCounty(e.target.value)}
        Subcounty={Subcounty}
        changeSubcounty={(e) => setSubcounty(e.target.value)}
        Parish={Parish}
        changeParish={(e) => setParish(e.target.value)}
        Zone_LC1={Zone_LC1}
        changeZone_LC1={(e) => setZone_LC1(e.target.value)}
        PostalCode={PostalCode}
        changePostalCode={(e) => setPostalCode(e.target.value)}
        // CreatedBy] = useState(0);
        // ModifiedBy] = useState(0);
        CompanyRole={CompanyRole}
        changeCompanyRole={(e) => setCompanyRole(e.target.value)}
        CompanyLogoExtension={CompanyLogoExtension}
        changeCompanyLogoExtension={(e) =>
          setCompanyLogoExtension(e.target.value)
        }
        PermitType={PermitType}
        changePermitType={(e) => setPermitType(e.target.value)}
        PermitNumber={PermitNumber}
        changePermitNumber={(e) => setPermitNumber(e.target.value)}
        PermitStatus={PermitStatus}
        changePermitStatus={(e) => setPermitStatus(e.target.value)}
        Company_Site={Company_Site}
        changeCompany_Site={(e) => setCompany_Site(e.target.value)}
        PermitDetails={PermitDetails}
        changePermitDetails={(e) => setPermitDetails(e.target.value)}
      />
    </>
  );
}
export default CompanyMasters;
