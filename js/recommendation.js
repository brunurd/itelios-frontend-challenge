function populateVisited(element) {
    getJson("visited.json", function(obj) {
        for (var i = 0; i < obj[0].data.visited.length; i++) {
            var productData =  obj[0].data.visited[i];
            var productObj = new Product();

            productObj.init(element, productData.imageName, productData.name, productData.price);

            if (productData.oldPrice != null) {
                productObj.setOldPrice(productData.oldPrice);
            }

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
            productObj.element.setAttribute("class","product product--recommendation");

            if (productData.oldPrice != null) {
                productObj.setOldPrice(productData.oldPrice);
            }

            productObj.setProductInfo(productData.productInfo.paymentConditions);
        }
    });
}

function resize(productContainer, products) {
    var displayedQuantity = 3,
        containerWidth = (100 * products.length) / displayedQuantity,
        productWidth = 100 / products.length;

    productContainer.style.width = containerWidth + "%";

    for (var i = 0; i < products.length; i++) {
        products[i].style.width = productWidth + "%";
    }
}

function setActiveDot(index) {
    for (var i = 0; i < dotsElement.length; i++) {
        if (i == index) {
            dotsElement[i].setAttribute("class","dot dot--active");
        }

        else {
            dotsElement[i].setAttribute("class","dot");
        }
    }
}

function carrouselDots(dots, elements, dotSize) {
    if (dots.children.length < elements.length) {
        dots.style.width = (elements.length * dotSize) + "px";

        for (var i = 0; i < elements.length; i++) {
            dotsElement.push(document.createElement("LI"));

            dotsElement[i].setAttribute("onclick","spinCarrousel("+i+");");
            dots.appendChild(dotsElement[i]);
        }

        setActiveDot(0);
    }
}

function spinCarrousel(index) {
    var displayedQuantity = 3,
        carrousel = document.querySelector(".cross-sell__recommendation__products"),
        value = index * -(100 / 3);

        setActiveDot(index);
        carrousel.style.marginLeft = value + "%";
}

function loop(fps, callback) {
    callback();

    setTimeout(function() {
        loop(fps, callback);
    }, 1000 / fps);
}

var dotsElement = [];

populateVisited(document.querySelector(".cross-sell__visited"));
populateRecommendation(document.querySelector(".cross-sell__recommendation__products"));

loop(12, function() {
    resize(document.querySelector(".cross-sell__recommendation__products"), document.querySelectorAll(".product--recommendation"));
    carrouselDots(document.querySelector(".dots__container"), document.querySelectorAll(".product--recommendation"), 22);
});
