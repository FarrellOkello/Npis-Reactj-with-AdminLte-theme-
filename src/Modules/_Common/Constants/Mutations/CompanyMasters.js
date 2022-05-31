import { gql } from "@apollo/client";

const CREATE_COMPANY_MASTER = gql`
  mutation addCompanyMaster(
    $CompanyCode: String!
    $CompanyName: String!
    $CompanyRegistrationNumber: String!
    $Email: String!
    $AlternateEmail: String!
    $ContactPersonName: String!
    $ContactNumber: String!
    $AlternateContactNumber: String!
    $Fax: String!
    $TaxIdentificationNumber: String!
    $Nationality: String!
    $Corporatestatus: String!
    $IsSubmitted: Float!
    $IsActive: Float!
    $CompanyType: String!
    $RegisterAddress: String!
    $AlternateAddress: String!
    $District: String!
    $CompanyRegion: String!
    $County: String!
    $Subcounty: String!
    $Parish: String!
    $Zone_LC1: String!
    $PostalCode: String!
    $CreatedBy: Float!
    $ModifiedBy: Float!
    $CompanyRole: String!
    $CompanyLogoExtension: String!
    $PermitType: String!
    $PermitNumber: String!
    $PermitStatus: String!
    $Company_Site: String!
    $PermitDetails: String!
  ) {
    createCompanyMaster(
      data: {
        CompanyCode: $CompanyCode
        CompanyName: $CompanyName
        CompanyRegistrationNumber: $CompanyRegistrationNumber
        Email: $Email
        AlternateEmail: $AlternateEmail
        ContactPersonName: $ContactPersonName
        ContactNumber: $ContactNumber
        AlternateContactNumber: $AlternateContactNumber
        Fax: $Fax
        TaxIdentificationNumber: $TaxIdentificationNumber
        Nationality: $Nationality
        Corporatestatus: $Corporatestatus
        IsSubmitted: $IsSubmitted
        IsActive: $IsActive
        CompanyType: $CompanyType
        RegisterAddress: $RegisterAddress
        AlternateAddress: $AlternateAddress
        District: $District
        CompanyRegion: $CompanyRegion
        County: $County
        Subcounty: $Subcounty
        Parish: $Parish
        Zone_LC1: $Zone_LC1
        PostalCode: $PostalCode
        CreatedBy: $CreatedBy
        ModifiedBy: $ModifiedBy
        CompanyRole: $CompanyRole
        CompanyLogoExtension: $CompanyLogoExtension
        PermitType: $PermitType
        PermitNumber: $PermitNumber
        PermitStatus: $PermitStatus
        Company_Site: $Company_Site
        PermitDetails: $PermitDetails
      }
    ) {
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

export { CREATE_COMPANY_MASTER };
