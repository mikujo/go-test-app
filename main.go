package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	controller "go-test-app/controllers"
)

func main() {
	serve()
}

func serve() {
	router := gin.Default()

	/* 静的ファイルのパス指定 */
	router.Static("/views", "./views")

	/* ルーターの指定　URLへのアクセスに対して静的ページを返す */
	router.StaticFS("/go-test-app", http.Dir("./views/static"))
	/* 全ての商品情報のJSONを返す */
	router.GET("/fetchAllProducts", controller.FetchAllProducts)
	/* 1つの商品情報の状態のJSONを返す */
	router.GET("/fetchProduct", controller.FindProduct)
	/* 商品情報を検索する */
	router.GET("/searchProduct", controller.SearchProduct)
	/* 商品情報をDBへ登録する */
	router.POST("/addProduct", controller.AddProduct)
	/* 商品情報の状態を変更する */
	router.POST("/updateProduct", controller.UpdateProduct)
	/* 商品情報を削除する */
	router.POST("/deleteProduct", controller.DeleteProduct)

	if err := router.Run(":8080"); err != nil {
		log.Fatal("Server Run Failed.", err)
	}
}
