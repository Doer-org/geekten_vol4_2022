package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"fmt"
)


func main() {
    server := gin.Default()
    server.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "hello world",
        })
    })
    
	fmt.Println("http://localhost:8000")
	server.Run(":8000")
}