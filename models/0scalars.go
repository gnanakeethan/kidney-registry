package models

import (
	"encoding/json"
	"fmt"
	"io"
)

type ResultsModel map[string]string

// UnmarshalGQL implements the graphql.Unmarshaler interface
func (y *ResultsModel) UnmarshalGQL(v interface{}) error {
	_, ok := v.(map[string]string)
	if !ok {
		return fmt.Errorf(" Examination result must be a map string, got: %v", v)
	}
	return nil
}

// MarshalGQL implements the graphql.Marshaler interface
func (y ResultsModel) MarshalGQL(w io.Writer) {
	result, _ := json.Marshal(y)
	w.Write(result)
}
