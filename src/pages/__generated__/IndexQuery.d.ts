/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_site_siteMetadata {
  title: string | null;
}

export interface IndexQuery_site {
  siteMetadata: IndexQuery_site_siteMetadata | null;
}

export interface IndexQuery_allMarkdownRemark_nodes_fields {
  slug: string | null;
}

export interface IndexQuery_allMarkdownRemark_nodes_frontmatter {
  date: any | null;
  title: string | null;
  description: string | null;
}

export interface IndexQuery_allMarkdownRemark_nodes {
  excerpt: string | null;
  fields: IndexQuery_allMarkdownRemark_nodes_fields | null;
  frontmatter: IndexQuery_allMarkdownRemark_nodes_frontmatter | null;
}

export interface IndexQuery_allMarkdownRemark {
  nodes: IndexQuery_allMarkdownRemark_nodes[];
}

export interface IndexQuery {
  site: IndexQuery_site | null;
  allMarkdownRemark: IndexQuery_allMarkdownRemark;
}
