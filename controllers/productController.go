package controller

import (
	"strconv"

	db "go-test-app/models/db"
	entity "go-test-app/models/entity"

	"github.com/gin-gonic/gin"
)

/* 商品の購入状態 */
const (
	NotPurchased = 0
	Purchased    = 1
)

/* 全ての商品情報取得*/
func FetchAllProducts(c *gin.Context) {
	products := db.FindAllProducts()
	c.JSON(200, products)
}

/* 指定したIDの商品情報取得 */
func FindProduct(c *gin.Context) {
	productIDStr := c.Query("productID")
	productID, _ := strconv.Atoi(productIDStr)
	product := db.FindProduct(productID)
	c.JSON(200, product)
}

/* 検索条件に合致する商品情報取得 */
func SearchProduct(c *gin.Context) {
	productName := c.Query("productName")
	products := db.SearchProduct(productName)
	c.JSON(200, products)
}

/* 承認情報を登録 */
func AddProduct(c *gin.Context) {
	productName := c.PostForm("productName")
	productMemo := c.PostForm("productMemo")

	var product = entity.Product{
		Name:  productName,
		Memo:  productMemo,
		State: NotPurchased,
	}
	db.InsertProduct(&product)
}

/* 商品情報の状態を更新 */
func UpdateProduct(c *gin.Context) {
	reqProductID := c.PostForm("productID")
	reqProductState := c.PostForm("productState")

	productID, _ := strconv.Atoi(reqProductID)
	productState, _ := strconv.Atoi(reqProductState)

	changeState := NotPurchased
	if productState == NotPurchased {
		changeState = Purchased
	} else {
		changeState = NotPurchased
	}

	db.UpdateStateProduct(productID, changeState)
}

/* 商品情報削除 */
func DeleteProduct(c *gin.Context) {
	productIDStr := c.PostForm("productID")
	productID, _ := strconv.Atoi(productIDStr)

	db.DeleteProduct(productID)
}
