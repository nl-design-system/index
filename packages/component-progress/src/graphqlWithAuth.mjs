/* global process */
import { graphql } from '@octokit/graphql';

export const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_ISSUES_TOKEN}`,
  },
});