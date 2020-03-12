import {graphql} from 'gatsby';
export const allGamesQuery = graphql`
{
    allGamesJson {
    edges {
        node {
        name
        images
        blurb
        }
    }
    }
}
`
