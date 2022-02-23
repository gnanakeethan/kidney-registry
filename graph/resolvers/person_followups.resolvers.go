package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	"fmt"
	"time"
	
	"github.com/segmentio/ksuid"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *mutationResolver) CreatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUp, error) {
	personFollowUp := &models.PersonFollowUp{
		ID:                ksuid.New().String(),
		Description:       *input.Description,
		Complaints:        *input.Complaints,
		CaseStatus:        *input.CaseStatus,
		OtherFindings:     *input.OtherFindings,
		Referrals:         *input.Referrals,
		ConsultantOpinion: *input.ConsultantOpinion,
		CreatedAt:         time.Now(),
		UpdatedAt:         time.Now(),
		DeletedAt:         time.Time{},
		Person:            &models.Person{ID: input.Person.ID},
	}
	if input.Donation != nil && input.Donation.ID != "" {
		personFollowUp.Donation = &models.PersonOrganDonation{ID: input.Donation.ID}
	}
	
	if results, err := json.Marshal(input.DialysisPlan); err == nil {
		personFollowUp.DialysisPlan.Set(string(results))
	}
	if _, err := models.AddPersonFollowUps(personFollowUp); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		for _, medicineInput := range input.Medicines {
			startDate, _ := time.Parse("2006-01-01", *medicineInput.StartDate)
			endDate, _ := time.Parse("2006-01-01", *medicineInput.EndDate)
			medicine := models.PersonFollowUpsMedicine{
				ID:           ksuid.New().String(),
				MedicineCode: *medicineInput.MedicineCode,
				Name:         *medicineInput.Name,
				Dosage:       *medicineInput.Dosage,
				Frequency:    *medicineInput.Frequency,
				Duration:     *medicineInput.Duration,
				StartDate:    startDate,
				EndDate:      endDate,
				FollowUpId:   personFollowUp,
			}
			models.AddPersonFollowUpsMedicines(&medicine)
		}
		return personFollowUp, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) UpdatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personResolver) FollowUps(ctx context.Context, obj *models.Person, filter *models.PersonFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonFollowUpList, error) {
	return nil, nil
}

func (r *personFollowUpResolver) RenalBiopsies(ctx context.Context, obj *models.PersonFollowUp) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personFollowUpResolver) DialysisPlan(ctx context.Context, obj *models.PersonFollowUp) (*models.DialysisPlan, error) {
	dialysisString := obj.DialysisPlan.String()
	dialysisPlan := models.DialysisPlan{}
	json.Unmarshal([]byte(dialysisString), &dialysisPlan)
	return &dialysisPlan, nil
}

func (r *queryResolver) PersonFollowUp(ctx context.Context, id string) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) PersonFollowUps(ctx context.Context, personID string, filter *models.PersonFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (*models.PersonFollowUpList, error) {
	panic(fmt.Errorf("not implemented"))
}

// PersonFollowUp returns generated.PersonFollowUpResolver implementation.
func (r *Resolver) PersonFollowUp() generated.PersonFollowUpResolver {
	return &personFollowUpResolver{r}
}

type personFollowUpResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *mutationResolver) DeletePersonFollowUp(ctx context.Context, id string) (*models.PersonFollowUp, error) {
	panic(fmt.Errorf("not implemented"))
}
