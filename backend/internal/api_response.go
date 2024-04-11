package internal

import (
	"net/http"
	"time"

	"github.com/julienschmidt/httprouter"
)

type Decorator func(APIHandler) APIHandler
type APIHandler func(http.ResponseWriter, *http.Request, httprouter.Params) (interface{}, error)

type Err struct {
	Code int
	Text string
}

func (e Err) Error() string {
	return e.Text
}

func Decorate(f APIHandler, ds ...Decorator) httprouter.Handle {
	decorated := f
	for _, decorate := range ds {
		decorated = decorate(decorated)
	}

	return func(w http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		decorated(w, req, ps)
	}
}

func Log() Decorator {
	return func(f APIHandler) APIHandler {
		return func(w http.ResponseWriter, r *http.Request, p httprouter.Params) (interface{}, error) {
			start := time.Now()
			response, err := f(w, r, p)
			elapsed := time.Since(start)
			status := 200
			
		}
	}
}