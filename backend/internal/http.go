package internal

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type httpServer struct {
	router http.Handler
}

func newHttpServer() *httpServer {
	router := httprouter.New()
	router.HandleMethodNotAllowed = true
	router.PanicHandler = http_api.LogPanicHandler(nsqd.logf)
	router.NotFound = http_api.LogNotFoundHandler(nsqd.logf)
	router.MethodNotAllowed = http_api.LogMethodNotAllowedHandler(nsqd.logf)
}
