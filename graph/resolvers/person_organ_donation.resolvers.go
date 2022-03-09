package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/kr/pretty"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) CreatePersonOrganDonation(ctx context.Context, input models.PersonOrganDonationInput) (*models.PersonOrganDonation, error) {
	pretty.Println(input.Donor)
	donor, err := models.AddPatient(input.Donor)

	if err != nil {
		panic(err)
	}
	personOrganDonation := models.PersonOrganDonation{
		ID:             ksuid.New().String(),
		Recipient:      &models.Person{ID: input.Recipient.ID},
		Donor:          donor,
		DonationType:   PointerString(input.DonationType),
		PlannedDate:    GetDate(PointerString(input.PlannedDate)),
		PerformedDate:  GetDate(PointerString(input.PerformedDate)),
		DischargedDate: GetDate(PointerString(input.DischargedDate)),
		AcuteRejection: PointerBool(input.AcuteRejection),
	}
	if _, err = models.AddPersonOrganDonation(&personOrganDonation); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return &personOrganDonation, nil
	}
	return &personOrganDonation, err
}

func (r *mutationResolver) UpdatePersonOrganDonation(ctx context.Context, input models.PersonOrganDonationInput) (*models.PersonOrganDonation, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeletePersonOrganDonation(ctx context.Context, id string) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personOrganDonationResolver) FollowUps(ctx context.Context, obj *models.PersonOrganDonation) ([]*models.PersonFollowUp, error) {
	return nil, nil
}

func (r *personOrganDonationResolver) PlannedDate(ctx context.Context, obj *models.PersonOrganDonation) (*string, error) {
	return StringPointer(formatDate(obj.PlannedDate)), nil
}

func (r *personOrganDonationResolver) PerformedDate(ctx context.Context, obj *models.PersonOrganDonation) (*string, error) {
	return StringPointer(formatDate(obj.PerformedDate)), nil
}

func (r *personOrganDonationResolver) DischargedDate(ctx context.Context, obj *models.PersonOrganDonation) (*string, error) {
	return StringPointer(formatDate(obj.DischargedDate)), nil
}

func (r *queryResolver) GetPersonOrganDonation(ctx context.Context, id string) (*models.PersonOrganDonation, error) {
	return models.GetAnyById(models.PersonOrganDonation{ID: id})
}

func (r *queryResolver) ListPersonOrganDonations(ctx context.Context, personID string, filter *models.PersonOrganDonationFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonOrganDonationList, error) {
	if filter == nil {
		filter = &models.PersonOrganDonationFilter{}
	}
	filter.Recipient = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &personID}}
	return models.ListPersonOrganDonations(ctx, filter, page, limit, sortBy, orderBy)
}

// PersonOrganDonation returns generated.PersonOrganDonationResolver implementation.
func (r *Resolver) PersonOrganDonation() generated.PersonOrganDonationResolver {
	return &personOrganDonationResolver{r}
}

type personOrganDonationResolver struct{ *Resolver }
