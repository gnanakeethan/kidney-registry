package models

import (
	"encoding/json"
	"fmt"
	"io"
	
	"github.com/kr/pretty"
)

type ResultsModel map[string]interface{}

// UnmarshalGQL implements the graphql.Unmarshaler interface
func (y *ResultsModel) UnmarshalGQL(v interface{}) error {
	pretty.Println(v)
	yMap, ok := v.(map[string]interface{})
	if !ok {
		return fmt.Errorf(" Examination result must be a map string, got: %v", v)
	}
	*y = yMap
	return nil
}

// MarshalGQL implements the graphql.Marshaler interface
func (y ResultsModel) MarshalGQL(w io.Writer) {
	result, _ := json.Marshal(y)
	w.Write(result)
}
