package resolvers

//go:generate go run github.com/99designs/gqlgen generate
import (
	"fmt"
	"math"
	"math/rand"
	"sync"
	"time"
	
	"github.com/mergestat/timediff/locale"
	
	"github.com/gnanakeethan/kidney-registry/models"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	UsersF    []*models.User
	Observers map[string]chan *models.User
	mu        sync.Mutex
}

var letterRunes = []rune("1234567890")

func randString(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}

var englishUnitedStates = locale.Formatters{
	-1 << 63:                    func(d time.Duration) string { return fmt.Sprintf("in %.0f years", math.Ceil(-d.Hours()/(24.0*30*12))) },
	-17 * (24 * time.Hour) * 30: func(_ time.Duration) string { return "in a year" },
	-10 * (24 * time.Hour) * 30: func(d time.Duration) string { return fmt.Sprintf("in %.0f months", math.Ceil(-d.Hours()/(24.0*30))) },
	-45 * (24 * time.Hour):      func(d time.Duration) string { return "in a month" },
	-25 * (24 * time.Hour):      func(d time.Duration) string { return fmt.Sprintf("in %.0f days", math.Ceil(-d.Hours()/24.0)) },
	-35 * time.Hour:             func(_ time.Duration) string { return "in a day" },
	-21 * time.Hour:             func(d time.Duration) string { return fmt.Sprintf("in %.0f hours", math.Ceil(-d.Hours())) },
	-89 * time.Minute:           func(_ time.Duration) string { return "in an hour" },
	-44 * time.Minute:           func(d time.Duration) string { return fmt.Sprintf("in %.0f minutes", math.Ceil(-d.Minutes())) },
	-89 * time.Second:           func(_ time.Duration) string { return "in a minute" },
	-44 * time.Second:           func(_ time.Duration) string { return "in a few seconds" },
	
	44 * time.Second:           func(_ time.Duration) string { return "a few seconds" },
	89 * time.Second:           func(_ time.Duration) string { return "a minute" },
	44 * time.Minute:           func(d time.Duration) string { return fmt.Sprintf("%.0f minutes", math.Ceil(d.Minutes())) },
	89 * time.Minute:           func(_ time.Duration) string { return "an hour" },
	21 * time.Hour:             func(d time.Duration) string { return fmt.Sprintf("%.0f hours", math.Ceil(d.Hours())) },
	35 * time.Hour:             func(_ time.Duration) string { return "a day" },
	25 * (24 * time.Hour):      func(d time.Duration) string { return fmt.Sprintf("%.0f days", math.Ceil(d.Hours()/24.0)) },
	45 * (24 * time.Hour):      func(d time.Duration) string { return "a month" },
	10 * (24 * time.Hour) * 30: func(d time.Duration) string { return fmt.Sprintf("%.0f months", math.Ceil(d.Hours()/(24.0*30))) },
	17 * (24 * time.Hour) * 30: func(_ time.Duration) string { return "a year" },
	1<<63 - 1:                  func(d time.Duration) string { return fmt.Sprintf("%.0f years", math.Ceil(d.Hours()/(24.0*30*12))) },
}
