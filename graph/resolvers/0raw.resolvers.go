package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/google/uuid"
)

func (r *mutationResolver) Sample(ctx context.Context, id string) (*models.Error, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) CreateUser(ctx context.Context, id *string) (*models.User, error) {
	// Construct the newly sent message and append it to the existing messages
	msg := models.User{
		ID:   uuid.Must(uuid.NewRandom()).String(),
		Name: randString(10),
	}
	r.UsersF = append(r.UsersF, &msg)
	r.mu.Lock()
	// Notify all active subscriptions that a new message has been posted by posted. In this case we push the now
	// updated ChatMessages array to all clients that care about it.
	for _, observer := range r.Observers {
		observer <- &msg
	}
	r.mu.Unlock()
	return &msg, nil
}

func (r *queryResolver) Sample(ctx context.Context, id string) (*models.Error, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *subscriptionResolver) Users(ctx context.Context) (<-chan *models.User, error) {
	// Create an ID and channel for each active subscription. We will push changes into this channel.
	// When a new subscription is created by the client, this resolver will fire first.
	id := randString(8)
	msgs := make(chan *models.User, 1)
	
	ctx.Value("user")
	
	// Start a goroutine to allow for cleaning up subscriptions that are disconnected.
	// This go routine will only get past Done() when a client terminates the subscription. This allows us
	// to only then remove the reference from the list of ChatObservers since it is no longer needed.
	go func() {
		<-ctx.Done()
		r.mu.Lock()
		delete(r.Observers, id)
		r.mu.Unlock()
	}()
	r.mu.Lock()
	// Keep a reference of the channel so that we can push changes into it when new messages are posted.
	r.Observers[id] = msgs
	r.mu.Unlock()
	// This is optional, and this allows newly subscribed clients to get a list of all the messages that have been
	// posted so far. Upon subscribing the client will be pushed the messages once, further changes are handled
	// in the PostMessage mutation.
	// r.Observers[id] <- r.UsersF
	return msgs, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }
