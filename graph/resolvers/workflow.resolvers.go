package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"

	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/kr/pretty"
	"github.com/segmentio/ksuid"
)

func (r *mutationResolver) AddWorkflow(ctx context.Context, input *models.WorkflowInput) (*models.WorkflowEdge, error) {
	workflow := &models.Workflow{
		ID:   ksuid.New().String(),
		User: &models.User{ID: input.User.ID},
		Name: input.Name,
	}
	if results, err := json.Marshal(input.Configuration); err == nil {
		workflow.Configuration.Set(string(results))
	}
	if _, err := models.AddWorkflow(workflow); err == nil || err.Error() == "<Ormer> last insert id is unavailable" {
		return &models.WorkflowEdge{
				Node: workflow,
			},
			nil
	} else {
		return nil, err
	}
}

func (r *queryResolver) GetWorkflow(ctx context.Context, id string) (*models.WorkflowEdge, error) {
	workflow, err := models.GetAnyById(models.Workflow{ID: id})
	return &models.WorkflowEdge{Node: workflow}, err
}

func (r *queryResolver) ListWorkflows(ctx context.Context, filter *models.WorkflowFilter, page *int, limit *int, sortBy []*string, orderBy []*models.OrderBy) (models.Connection, error) {
	// sortBy = append(sortBy, StringPointer("Order"))
	// orderByAc := models.OrderByAsc
	// orderBy = append(orderBy, &orderByAc)
	pretty.Println(filter)
	return models.ListAnyGenerics(ctx, models.Workflow{}, filter, models.WorkflowEdge{}, &models.WorkflowList{}, page, limit, sortBy, orderBy, nil)
}

func (r *workflowResolver) Configuration(ctx context.Context, obj *models.Workflow) (*models.Configuration, error) {
	configurationString := obj.Configuration.String()
	configuration := models.Configuration{}
	json.Unmarshal([]byte(configurationString), &configuration)
	return &configuration, nil
}

// Workflow returns generated.WorkflowResolver implementation.
func (r *Resolver) Workflow() generated.WorkflowResolver { return &workflowResolver{r} }

type workflowResolver struct{ *Resolver }
