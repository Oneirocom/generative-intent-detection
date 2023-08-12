export type Intent =
  | 'Business Growth and Expansion'
  | 'Product and Service Development'
  | 'Partnerships and Collaborations'
  | 'Investments and Financial Management'
  | 'Legal and Regulatory Compliance'
  | 'Customer Engagement and Market Presence'
  | 'Quality and Supply Chain Management'
  | 'Operational Efficiency and Cost Management'
  | 'Employee Wellbeing and Talent Management'
  | 'Technology Adoption and Digital Transformation'
  | 'Corporate Governance and Risk Management'
  | 'Sustainability and CSR Initiatives'
  | 'Marketing Strategies'
  | 'Data and Information Management'
  | 'Other';

export type IdentificationMethod =
  | 'Funding and Financial Information'
  | 'Acquisitions and Hires'
  | 'Company Announcements and Press Releases'
  | 'Product and Service Developments'
  | 'Partnerships and Collaborations'
  | 'Research and Development Activities'
  | 'Legal and Regulatory Documents'
  | 'Corporate Social Responsibility and Sustainability Reports'
  | 'Restructuring and Bankruptcy Filings'
  | 'Business Operations and Strategies'
  | 'Cybersecurity Measures'
  | 'Other';

export interface intentItem {
  intent: Intent;
  identificationMethod: IdentificationMethod;
}

export interface report {
  items: [intentItem?, intentItem?, intentItem?];
}
