import React, { useState, useEffect, useMemo } from "react";
import { toastr } from "react-redux-toastr";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { COMPANY_MASTERS_GRID } from "../_Common/Constants/Queries/CompanyMasters";
import { useQuery } from "@apollo/client";

function Test() {
  // const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  const [RowDataLoading, setRowDataLoading] = useState(false);

  const handleGetCompanyMasters = useQuery(COMPANY_MASTERS_GRID);

  // Each Column Definition results in one Column.
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

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  // Example load data from sever
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

  return (
    <div>
      <div
        className="ag-theme-alpine"
        style={{ /* width: "100%", */ height: 500 }}
      >
        <AgGridReact
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          // onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
}
export default Test;
