package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *personOrganDonationResolver) Donor(ctx context.Context, obj *models.PersonOrganDonation) (*models.Person, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personOrganDonationResolver) Recipient(ctx context.Context, obj *models.PersonOrganDonation) (*models.Person, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personOrganDonationResolver) FollowUps(ctx context.Context, obj *models.PersonOrganDonation) ([]*models.FollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personOrganDonationResolver) PlannedDate(ctx context.Context, obj *models.PersonOrganDonation) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personOrganDonationResolver) PerformedDate(ctx context.Context, obj *models.PersonOrganDonation) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personOrganDonationResolver) DischargedDate(ctx context.Context, obj *models.PersonOrganDonation) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

// PersonOrganDonation returns generated.PersonOrganDonationResolver implementation.
func (r *Resolver) PersonOrganDonation() generated.PersonOrganDonationResolver {
	return &personOrganDonationResolver{r}
}

type personOrganDonationResolver struct{ *Resolver }
