/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BioQuery
// ====================================================

export interface BioQuery_site_siteMetadata_author {
  name: string | null;
  summary: string | null;
}

export interface BioQuery_site_siteMetadata_social {
  twitter: string | null;
}

export interface BioQuery_site_siteMetadata {
  author: BioQuery_site_siteMetadata_author | null;
  social: BioQuery_site_siteMetadata_social | null;
}

export interface BioQuery_site {
  siteMetadata: BioQuery_site_siteMetadata | null;
}

export interface BioQuery {
  site: BioQuery_site | null;
}
