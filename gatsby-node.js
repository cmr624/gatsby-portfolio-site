/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const result = await graphql(`
//     query MyQuery {
//         allWebdevJson {
//           edges {
//             node {
//               slug
//               name
//               blurb
//               credits
//             }
//           }
//         }
//       }
//     `)
//     result.data.allWebdevJson.edges.forEach(({ node }) => {
//       createPage({
//         path : node.slug,
//         component : require.resolve('./src/components/templates/project.tsx'),
//         context : {
//           node : node,
//         }
//       })
//     });
//   }