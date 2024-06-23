/* global process */
import { Octokit } from '@octokit/core';
import { paginateGraphQL } from '@octokit/plugin-paginate-graphql';

export const graphqlWithAuth = () => {
  const MyOctokit = Octokit.plugin(paginateGraphQL);
  return new MyOctokit({ auth: `token ${process.env.GH_ISSUES_TOKEN}` });
};
