function populateVisited(element) {
    getJson("visited.json", function(obj) {
        for (var i = 0; i < obj[0].data.visited.length; i++) {
            var productData =  obj[0].data.visited[i];
            var productObj = new Product();

            console.log(productData);

            productObj.init(element, productData.imageName, productData.name, productData.price);
            productObj.setOldPrice(productData.oldPrice);
            productObj.setProductInfo(productData.productInfo.paymentConditions);
            productObj.removeButton();
        }
    });
}

function populateRecommendation(element) {
    getJson("products.json", function(obj) {
        for (var i = 0; i < obj[0].data.recommendation.length; i++) {
            var productData =  obj[0].data.recommendation[i];
            var productObj = new Product();

            productObj.init(element, productData.imageName, productData.name, productData.price);
            productObj.setOldPrice(productData.oldPrice);
            productObj.setProductInfo(productData.productInfo.paymentConditions);
        }
    });
}

populateVisited(document.querySelector(".cross-sell__visited"));
populateRecommendation(document.querySelector(".cross-sell__recommendation"));
