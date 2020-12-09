package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/rsbear/typefeel-auth/utils"
	"github.com/shurcooL/graphql"
)

var query struct {
	GetKeyboard struct {
		Alias graphql.String
		Name  graphql.String
	} `graphql:"getKeyboard(alias: \"iron_165\")"`
}

// Test rest endpoint
func Test(w http.ResponseWriter, r *http.Request) {
	err := utils.Client.Query(context.Background(), &query, nil)
	if err != nil {
		fmt.Println("Failed to query")
		fmt.Println(err)
	}
	fmt.Println(query.GetKeyboard.Name)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(query.GetKeyboard)
}
