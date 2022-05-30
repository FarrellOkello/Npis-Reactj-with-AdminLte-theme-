import { gql } from "@apollo/client";

const COMPANY_MASTERS_GRID = gql`
  query companyMasters {
    companyMasters {
      ID
      CompanyCode
      CompanyName
      CompanyRegistrationNumber
      Email
      AlternateEmail
      ContactPersonName
      ContactNumber
      AlternateContactNumber
      Fax
      TaxIdentificationNumber
      Nationality
      Corporatestatus
      IsSubmitted
      IsActive
      CompanyType
      RegisterAddress
      AlternateAddress
      District
      CompanyRegion
      County
      Subcounty
      Parish
      Zone_LC1
      PostalCode
      CreatedBy
      ModifiedBy
      CreatedDate
      ModifiedDate
      CompanyRole
      ParentID
      CompanyLogoExtension
      PermitType
      PermitNumber
      IssueDate
      ExpiryDate
      PermitStatus
      Company_Site
      PermitDetails
    }
  }
`;

export { COMPANY_MASTERS_GRID };
