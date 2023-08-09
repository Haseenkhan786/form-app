package main

import (


	"net/http"
	"testing"

	"github.com/stretchr/testify/assert"
	"encoding/json"

	"net/http/httptest"
	"github.com/gin-gonic/gin"

)



func TestGetEmployee(t *testing.T) {
	router := gin.Default()
	router.GET("/getemployees", getEmployees)

	req, err := http.NewRequest("GET", "/getemployees", nil)
	assert.NoError(t, err)
	w := httptest.NewRecorder()

	router.ServeHTTP(w, req)
	assert.Equal(t, http.StatusOK, w.Code)

	var responseEmployees []CompanyEmployeeDetails
	err = json.Unmarshal(w.Body.Bytes(), &responseEmployees)
	
	assert.NoError(t, err)
	assert.NotEmpty(t, responseEmployees)
}

func TestAdd(t *testing.T){


	expected := 9
    actual := Add(4, 6)
    

    if actual != expected {
        t.Errorf("actual %d, expected %d", actual, expected)
    }
}

func testoddeven(t *testing.T){
	var expect=-1
	var act = oddeven(4)
	if act != expect{
		t.Errorf("actual %d, expected %d", act, expect)
	}
}