import person from './person.graphql';
import titles from "./titles.graphql";

const schemas = {
  ...[person],
  ...[titles]
};

export default schemas;
