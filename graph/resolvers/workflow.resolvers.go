package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	
	"github.com/kr/pretty"
	
	"github.com/gnanakeethan/kidney-registry/graph/generated"
	"github.com/gnanakeethan/kidney-registry/models"
)

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
