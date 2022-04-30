package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	
	"github.com/beego/beego/v2/client/orm"
	"github.com/kr/pretty"
	
	"github.com/gnanakeethan/kidney-registry/models"
)

func (r *queryResolver) PatientStatusChart(ctx context.Context) (*models.PieChart, error) {
	var chart models.PieChart
	chart.Name = "Patient Status"
	o := orm.NewOrm()
	rows, err := o.Raw("SELECT COUNT(*) AS count, status as Label FROM persons GROUP BY status").QueryRows(&chart.Data)
	if err != nil {
		return nil, err
	}
	// chart.Data = []*models.PieChartData{
	// 	{
	// 		Label: "Active",
	// 		Value: 10,
	// 	},
	// 	{
	// 		Label: "Inactive",
	// 		Value: 20,
	// 	},
	// 	{
	// 		Label: "Deceased",
	// 		Value: 30,
	// 	},
	// }
	pretty.Println(chart, rows)
	return &chart, nil
}

func (r *queryResolver) PatientStatusChartByDate(ctx context.Context, date *string) (*models.PieChart, error) {
	panic(fmt.Errorf("not implemented"))
}
