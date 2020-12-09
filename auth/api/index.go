package handler

import (
	"fmt"
	"net/http"
)

// Index typefeel-auth
func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>typefeel</h1>")
}
