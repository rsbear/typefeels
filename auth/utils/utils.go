package utils

import "github.com/shurcooL/graphql"

// Client for graphql
var Client = graphql.NewClient("/graphql", nil)
