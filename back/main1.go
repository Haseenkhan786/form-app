package main

import ( 
	"github.com/gin-contrib/cors"
	"database/sql"
	"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
	"github.com/joho/godotenv"
    "os"
)
var err = godotenv.Load()

var (

    databaseHost     = os.Getenv("host")

    databaseUser     = os.Getenv("user")

    databasePassword = os.Getenv("password")

    databasename     = os.Getenv("dbname")
	x=os.Getenv("localHost")
	resumeLOcation=os.Getenv("fileLocation")
)
// const (
// 	host     = "localhost"
// 	port     = 5432
// 	user     = "haseen"
// 	password = "1302001"
// 	dbname   = "postgres"
// )

type CompanyData struct {
	FullName      string `form:"name" `
	Gender        string `form:"gender"`
	Leave_date     string `form:"leave_dates" `
	Leave_duration       string `form:"leave_duration"`
	Leave_type         string `form:"leave_type"`
	Manager_name         string `form:"manager_name"`
	Team_name         string `form:"team_name"`
}
type CompanyDetails struct {
	FullName      string `form:"name" `
	Gender        string `form:"gender"`
	Leave_date     string `form:"leave_date" `
	Leave_duration       string `form:"leave_duration"`
	Leave_type         string `form:"leave_type"`
	Manager_name         string `form:"manager_name"`
	Team_name         string `form:"team_name"`
}

const port=5432

var employees = []CompanyData{}




func main() {
	
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:4200"} // Replace with the URL of your Angular application
	config.AllowHeaders = []string{"Origin", "Content-Type"}
	router.Use(cors.New(config))
	router.GET("/getemployeesdata", getEmployeesData)
	router.POST("/postemployeesdata", postEmployeesData)


	router.GET("/getkpi3", kpi3)
	router.GET("/getkpi4", kpi4)


	router.Run(x)


	
}

// POST
func postEmployeesData(c *gin.Context) {
	var newEmployee CompanyData

	if err := c.ShouldBind(&newEmployee); err != nil {
		c.String(http.StatusBadRequest, "Failed to parse form data")
		return
	}
	

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		databaseHost, port, databaseUser, databasePassword, databasename)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to the database"})
		return
	}
	defer db.Close()


	insertDynStmt := `INSERT INTO "manager"  VALUES ($1, $2, $3, $4, $5, $6,$7)`

	_, err = db.Exec(insertDynStmt, newEmployee.FullName, newEmployee.Gender, newEmployee.Leave_date, newEmployee.Leave_duration, newEmployee.Leave_type, newEmployee.Manager_name, newEmployee.Team_name)
	if err != nil {
		c.String(http.StatusInternalServerError, "Failed to insert form data into the database")
		return
	}

	c.String(http.StatusOK, "Leave application submitted successfully!")
}

// GET
func getEmployeesData(c *gin.Context) {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		databaseHost, port, databaseUser, databasePassword, databasename)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to the database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM manager")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch employee data from the database"})
		return
	}
	defer rows.Close()

	var employees []CompanyDetails

	for rows.Next() {
		var emp CompanyDetails
		err := rows.Scan(&emp.FullName, &emp.Gender, &emp.Leave_date, &emp.Leave_duration, &emp.Leave_type,&emp.Manager_name , &emp.Team_name)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan employee data from the database"})
			return
		}
		employees = append(employees, emp)
	}

	c.IndentedJSON(http.StatusOK, employees)
}



// get kpi3

func kpi3(c *gin.Context) {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		databaseHost, port, databaseUser, databasePassword, databasename)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to the database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM kpi3")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch employee data from the database"})
		return
	}
	defer rows.Close()

	var employees []CompanyDetails

	for rows.Next() {
		var emp CompanyDetails
		err := rows.Scan(&emp.FullName, &emp.Leave_duration)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan employee data from the database"})
			return
		}
		employees = append(employees, emp)
	}

	c.IndentedJSON(http.StatusOK, employees)
}




//getkpi 4



func kpi4(c *gin.Context) {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		databaseHost, port, databaseUser, databasePassword, databasename)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to the database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM kpi4")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch employee data from the database"})
		return
	}
	defer rows.Close()

	var employees []CompanyDetails

	for rows.Next() {
		var emp CompanyDetails
		err := rows.Scan(&emp.FullName, &emp.Leave_duration)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan employee data from the database"})
			return
		}
		employees = append(employees, emp)
	}

	c.IndentedJSON(http.StatusOK, employees)
}
