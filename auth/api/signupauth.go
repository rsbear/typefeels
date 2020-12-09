package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/rsbear/typefeel-auth/utils"
	"github.com/shurcooL/graphql"
)

// Response type { status, message }
type Response struct {
	status  int32
	message string
}

var userByEmail struct {
	GetUser struct {
		Email graphql.String
	} `graphql:"getUser(email: $email)"`
}

var userByUsername struct {
	GetUser struct {
		Email graphql.String
	} `graphql:"getUser(username: $username)"`
}

// Signupauth rest endpoint
func Signupauth(w http.ResponseWriter, r *http.Request) {
	email, username := r.Body.email
	variables := map[string]interface{}{
		"email": graphql.String(email),
	}

	err := utils.Client.Query(context.Background(), &userByEmail, variables)
	if err != nil {
		fmt.Println("Failed to query")
		fmt.Println(err)
	}
	fmt.Println("Carry on")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(query.GetKeyboard)
}
