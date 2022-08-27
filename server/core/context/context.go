package context

import (
	"context"
	"net/http"

	"github.com/mileusna/useragent"
)

type OS struct{}

var OsKey OS

// / userAgentの取得
func NewContext(r *http.Request) context.Context {
	ctx := r.Context()
	userAgent := r.UserAgent()
	ua := useragent.Parse(userAgent)

	return context.WithValue(ctx, OsKey, ua.OS)
}
