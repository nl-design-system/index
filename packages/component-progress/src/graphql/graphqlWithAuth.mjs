/* eslint-env node */
import { Octokit } from '@octokit/core';
import { paginateGraphQL } from '@octokit/plugin-paginate-graphql';

export const graphqlWithAuth = () => {
  const MyOctokit = Octokit.plugin(paginateGraphQL);

  if (!process.env.GH_ISSUES_TOKEN) {
    throw Error('GH_ISSUES_TOKEN is not set');
  }

  return new MyOctokit({ auth: process.env.GH_ISSUES_TOKEN });
};
