package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/beego/beego/v2/client/orm"
	"github.com/gnanakeethan/kidney-registry/models"
	"github.com/kr/pretty"
)

func (r *queryResolver) PatientStatusChart(ctx context.Context) (*models.PieChart, error) {
	var chart models.PieChart
	chart.Name = "Patient Status Chart"
	o := orm.NewOrm()
	rows, err := o.Raw("SELECT COUNT(*) AS value, status as group FROM persons GROUP BY status").QueryRows(&chart.Data)
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
