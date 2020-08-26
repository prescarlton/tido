import gql from "graphql-tag";

export const ListLists = gql`
    query listLists {
        listLists {
            items {
            id
            name
            tasks {
                items {
                    name
                    priority
                }
            }
        }
        }

    }
`;

export const FetchLists = gql`
    query listLists {
        listLists {
            items {
                id
                name
                tasks {
                    items{
                        name
                        priority
                    }
                    
                }
            }

        }
    }

`;