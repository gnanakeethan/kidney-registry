package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/kr/pretty"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) CreatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUpEdge, error) {
	pretty.Println(input)
	personFollowUp := &models.PersonFollowUp{
		ID:                input.ID,
		Description:       PointerString(input.Description),
		Complaints:        PointerString(input.Complaints),
		CaseStatus:        PointerString(input.CaseStatus),
		OtherFindings:     PointerString(input.OtherFindings),
		Referrals:         PointerString(input.Referrals),
		ConsultantOpinion: PointerString(input.ConsultantOpinion),
		CreatedAt:         time.Now(),
		UpdatedAt:         time.Now(),
		DeletedAt:         time.Time{},
		Person:            &models.Person{ID: input.Person.ID},
	}
	if input.Donation != nil {
		personFollowUp.Donation = &models.PersonOrganDonation{ID: PointerString(input.Donation.ID)}
	}

	if results, err := json.Marshal(input.DialysisPlan); err == nil {
		personFollowUp.DialysisPlan.Set(string(results))
	}
	if _, err := models.AddPersonFollowUps(personFollowUp); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		if personFollowUp.Person, err = models.GetPersonsById(personFollowUp.Person.ID); err == nil {
			personFollowUp.Person.Status = models.PatientStatus(personFollowUp.CaseStatus)
			models.UpdatePersonsById(personFollowUp.Person)
		}
		for _, medicineInput := range input.Medicines {
			startDate, _ := time.Parse("2006-01-01", PointerString(medicineInput.StartDate))
			endDate, _ := time.Parse("2006-01-01", PointerString(medicineInput.EndDate))
			frequency := PointerString(medicineInput.Frequency)
			dosage := PointerString(medicineInput.Dosage)
			name := PointerString(medicineInput.Name)
			if name == "" || frequency == "" || dosage == "" {
				continue
			}
			medicine := models.PersonFollowUpsMedicine{
				ID:           ksuid.New().String(),
				MedicineCode: PointerString(medicineInput.MedicineCode),
				Name:         name,
				Dosage:       dosage,
				Frequency:    frequency,
				Duration:     PointerString(medicineInput.Duration),
				StartDate:    startDate,
				EndDate:      endDate,
				FollowUpId:   personFollowUp,
			}
			models.AddPersonFollowUpsMedicines(&medicine)
		}
		return &models.PersonFollowUpEdge{
			Node: personFollowUp,
		}, nil
	} else {
		return nil, err
	}
}

func (r *mutationResolver) UpdatePersonFollowUp(ctx context.Context, input models.PersonFollowUpInput) (*models.PersonFollowUpEdge, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *personFollowUpResolver) DialysisPlan(ctx context.Context, obj *models.PersonFollowUp) (*models.DialysisPlan, error) {
	dialysisString := obj.DialysisPlan.String()
	dialysisPlan := models.DialysisPlan{}
	json.Unmarshal([]byte(dialysisString), &dialysisPlan)
	return &dialysisPlan, nil
}

func (r *personFollowUpResolver) CreatedAt(ctx context.Context, obj *models.PersonFollowUp) (*string, error) {
	return StringPointer(formatDateTime(obj.CreatedAt)), nil
}

func (r *personFollowUpResolver) UpdatedAt(ctx context.Context, obj *models.PersonFollowUp) (*string, error) {
	return StringPointer(formatDateTime(obj.UpdatedAt)), nil
}

func (r *queryResolver) GetPersonFollowUp(ctx context.Context, id string) (*models.PersonFollowUpEdge, error) {
	personFollowUp, err := models.GetAnyById(models.PersonFollowUp{ID: id})
	return &models.PersonFollowUpEdge{Node: personFollowUp}, err
}

func (r *queryResolver) ListPersonFollowUps(ctx context.Context, personID string, filter *models.PersonFollowUpFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (models.Connection, error) {
	if filter == nil {
		filter = &models.PersonFollowUpFilter{}
	}
	filter.Person = &models.PersonFilter{ID: &models.StringFilter{Comparison: "EQUAL", Value: &personID}}
	return models.ListAnyGenerics(ctx, models.PersonFollowUp{}, filter, models.PersonFollowUpEdge{}, &models.PersonFollowUpList{}, page, limit, sortBy, orderBy)
}

func (r *queryResolver) ListAllPersonFollowUps(ctx context.Context, filter *models.PersonFollowUpFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (models.Connection, error) {
	if filter == nil {
		filter = &models.PersonFollowUpFilter{}
	}
	return nil, nil
}

// PersonFollowUp returns generated.PersonFollowUpResolver implementation.
func (r *Resolver) PersonFollowUp() generated.PersonFollowUpResolver {
	return &personFollowUpResolver{r}
}

type personFollowUpResolver struct{ *Resolver }
