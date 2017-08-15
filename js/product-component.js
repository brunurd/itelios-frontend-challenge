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
        this.paymentConditionsValueElement.setAttribute("class","product__info__payment-conditions--value");

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

    imageElement : { },
    imageName : "",

    nameElement : { },
    name : "",

    priceElement : { },
    priceValueElement : { },
    price : "",
    priceOldValueElement : { },
    oldPrice : "",

    productInfo : { },

    buttonElement : { },

    init : function(parent, imageName, name, price) {
        this.parent = parent;
        this.imageName = imageName;
        this.name = name;
        this.price = price;

        this.element = document.createElement("DIV");
        this.element.setAttribute("class","product");

        this.imageElement = document.createElement("IMG");
        this.imageElement.setAttribute("class","product__img");
        this.imageElement.setAttribute("src", this.imageName);
        this.imageElement.setAttribute("alt", "Imagem do produto " + this.name);
        this.element.appendChild(this.imageElement);

        this.nameElement = document.createElement("P");
        this.nameElement.setAttribute("class","product__name");
        this.nameElement.appendChild(document.createTextNode(this.name));
        this.element.appendChild(this.nameElement);

        this.nameElement = document.createElement("P");
        this.nameElement.setAttribute("class","product__name");
        this.nameElement.appendChild(document.createTextNode(this.name));
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
        this.buttonElement.appendChild(document.createTextNode("adicionar ao carrinho"));

        var buttonIcon = document.createElement("I");
        buttonIcon.setAttribute("class","material-icons");
        buttonIcon.appendChild(document.createTextNode("add_shopping_cart"));
        this.buttonElement.appendChild(buttonIcon);

        this.element.appendChild(this.buttonElement);
        this.parent.appendChild(this.element);
    },

    setOldPrice(oldPrice) {
        this.oldPrice = oldPrice;

        this.priceOldValueElement = document.createElement("SPAN");
        this.priceOldValueElement.appendChild(document.createTextNode(this.oldPrice));

        this.priceElement.appendChild(document.createTextNode(" "));
        this.priceElement.appendChild(this.priceOldValueElement);
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
