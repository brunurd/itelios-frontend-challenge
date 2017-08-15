function ProductInfo() {}
function Product() {}

ProductInfo.prototype = {
    parent : { },
    productInfoElement : { },

    paymentConditionsElement : { },
    paymentConditions: "",
    paymentConditionsValueElement : { },

    init(paymentConditions) {
        this.productInfoElement = document.createElement("DIV");
        this.productInfoElement.setAttribute("class","product__info");

        this.paymentConditionsElement = document.createElement("P");
        this.paymentConditionsElement.setAttribute("class","product__info__payment-conditions");

        this.paymentConditionsValueElement = document.createElement("SPAN");
        this.paymentConditionsValueElement.setAttribute("class","product__info__payment-conditions product__info__payment-conditions--value");

        var paymentConditionsSplit = paymentConditions.split("ou até ");

        if (paymentConditionsSplit[0] != paymentConditions) {
            this.paymentConditionsElement.appendChild(document.createTextNode("ou até "));
            paymentConditions = paymentConditionsSplit[1];
        }

        paymentConditionsSplit = paymentConditions.split(" sem juros")[0];

        this.paymentConditionsValueElement.appendChild(document.createTextNode(paymentConditionsSplit));
        this.paymentConditionsElement.appendChild(this.paymentConditionsValueElement);

        if (paymentConditionsSplit != paymentConditions) {
            this.paymentConditionsElement.appendChild(document.createTextNode(" sem juros"));
        }

        this.productInfoElement.appendChild(this.paymentConditionsElement);
    },

    setParent(parent, before) {
        this.parent = parent;

        if (before === undefined) {
            this.parent.appendChild(this.productInfoElement);
        }

        else {
            this.parent.insertBefore(this.productInfoElement, before);
        }
    }
}

Product.prototype = {
    parent : { },
    element : { },

    imageContainerElement : { },
    imageElement : { },
    imageName : "",

    nameElement : { },
    name : "",

    priceElement : { },
    priceValueElement : { },
    price : "",


    priceOldElement : { },
    priceOldValueElement : { },
    oldPrice : "",

    productInfo : { },

    buttonElement : { },

    init : function(parent, imageName, name, price) {
        this.parent = parent;
        this.imageName = imageName;
        this.name = name;
        this.price = price;

        this.element = document.createElement("A");
        this.element.setAttribute("class","product");

        this.imageElement = document.createElement("IMG");
        this.imageElement.setAttribute("class","product__img");
        this.imageElement.setAttribute("src", this.imageName);
        this.imageElement.setAttribute("alt", "Imagem do produto " + this.name);

        this.imageContainerElement = document.createElement("DIV");
        this.imageContainerElement.setAttribute("class","product__img-container");
        this.imageContainerElement.appendChild(this.imageElement);
        this.element.appendChild(this.imageContainerElement);

        this.nameElement = document.createElement("P");
        this.nameElement.setAttribute("class","product__name");
        var clippedText = this.name.substring(0,60);
        if (clippedText != this.name) {
            clippedText += "...";
        }
        this.nameElement.appendChild(document.createTextNode(clippedText));
        this.element.appendChild(this.nameElement);

        this.priceElement = document.createElement("P");
        this.priceElement.setAttribute("class","product__price");

        this.priceElement.appendChild(document.createTextNode("Por: "));

        this.priceValueElement = document.createElement("SPAN");
        this.priceValueElement.setAttribute("class","product__price--value");
        this.priceValueElement.appendChild(document.createTextNode(this.price));
        this.priceElement.appendChild(this.priceValueElement);

        this.element.appendChild(this.priceElement);

        this.buttonElement = document.createElement("BUTTON");
        this.buttonElement.setAttribute("class","product__button");
        this.buttonElement.setAttribute("name","addToCart");
        this.buttonElement.setAttribute("type","button");

        var buttonText = document.createElement("P");
        buttonText.setAttribute("class","product__button__text");
        buttonText.appendChild(document.createTextNode("adicionar ao carrinho"));
        this.buttonElement.appendChild(buttonText);

        var buttonIcon = document.createElement("I");
        buttonIcon.setAttribute("class","material-icons");
        buttonIcon.appendChild(document.createTextNode("add_shopping_cart"));
        this.buttonElement.appendChild(buttonIcon);

        this.element.appendChild(this.buttonElement);
        this.parent.appendChild(this.element);
    },

    setOldPrice(oldPrice) {
        this.oldPrice = oldPrice;

        this.priceOldElement = document.createElement("P");
        this.priceOldElement.setAttribute("class","product__old-price");
        this.priceOldElement.appendChild(document.createTextNode("De: "));

        this.priceOldValueElement = document.createElement("SPAN");
        this.priceOldValueElement.setAttribute("class","product__old-price product__old-price--value");
        this.priceOldValueElement.appendChild(document.createTextNode(this.oldPrice));
        this.priceOldElement.appendChild(this.priceOldValueElement);

        this.element.insertBefore(this.priceOldElement, this.priceElement);
    },

    setProductInfo(paymentConditions) {
        this.productInfo = new ProductInfo();
        this.productInfo.init(paymentConditions);
        this.productInfo.setParent(this.element, this.buttonElement);
    },

    removeButton() {
        this.element.removeChild(this.buttonElement);
    }
}
