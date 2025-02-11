import { capitalize } from '../utils';

/*

Field-specific data loading query template for a dynamic array of item IDs

(example: `categoriesIds` where $value is ['foo123', 'bar456'])

*/
export const fieldDynamicQueryTemplate = ({ queryResolverName, labelPropertyName }) =>
  `query FormComponent${capitalize(queryResolverName)}Query($value: [String!]) {
    ${queryResolverName}(input: { 
      filter: {  _id: { _in: $value } },
      sort: { ${labelPropertyName}: asc }
    }){
      results{
        _id
        ${labelPropertyName}
      }
    }
  }
`;

/*

Field-specific data loading query template for *all* items in a collection

*/
export const fieldStaticQueryTemplate = ({ queryResolverName, labelPropertyName }) =>
  `query FormComponent${capitalize(queryResolverName)}Query {
  ${queryResolverName}(input: { 
    
    sort: { ${labelPropertyName}: asc }
  }){
    results{
      _id
      ${labelPropertyName}
    }
  }
}
`;


/*

Query template for loading a list of autocomplete suggestions

*/
export const autocompleteQueryTemplate = ({ queryResolverName, labelPropertyName }) => `
  query Autocomplete${capitalize(queryResolverName)}Query($queryString: String) {
    ${queryResolverName}(
      input: {
        filter: {
          ${labelPropertyName}: { _like: $queryString }
        },
        limit: 20
      }
    ){
      results{
        _id
        ${labelPropertyName}
      }
    }
  }
`;
