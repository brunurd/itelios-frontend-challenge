function getJson(fileName,callback){var xmlhttp;xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),xmlhttp.onreadystatechange=function(){if(4===xmlhttp.readyState&&200===xmlhttp.status){var jsonData;try{jsonData=JSON.parse(xmlhttp.responseText)}catch(e){eval("jsonData = ("+xmlhttp.responseText+");")}callback.apply(this,[jsonData])}},xmlhttp.open("GET",fileName,!0),xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xmlhttp.send(null)}function ProductInfo(){}function Product(){}function populateVisited(e){getJson("visited.json",function(t){for(var n=0;n<t[0].data.visited.length;n++){var i=t[0].data.visited[n],o=new Product;o.init(e,i.imageName,i.name,i.price),null!=i.oldPrice&&o.setOldPrice(i.oldPrice),o.setProductInfo(i.productInfo.paymentConditions),o.removeButton()}})}function populateRecommendation(e){getJson("products.json",function(t){for(var n=0;n<t[0].data.recommendation.length;n++){var i=t[0].data.recommendation[n],o=new Product;o.init(e,i.imageName,i.name,i.price),o.element.setAttribute("class","product product--recommendation"),null!=i.oldPrice&&o.setOldPrice(i.oldPrice),o.setProductInfo(i.productInfo.paymentConditions)}})}function getDisplayedQuantity(){var e=3;return window.innerWidth<912&&(e=2),window.innerWidth<700&&(e=1),e}function resize(e,t){var n=getDisplayedQuantity(),i=100*t.length/n,o=100/t.length;e.style.width=i+"%";for(var l=0;l<t.length;l++)t[l].style.width=o+"%"}function setActiveDot(e){for(var t=0;t<dotsElement.length;t++)t==e?dotsElement[t].setAttribute("class","dot dot--active"):dotsElement[t].setAttribute("class","dot")}function carrouselDots(e,t,n){if(e.children.length<t.length){e.style.width=t.length*n+"px";for(var i=0;i<t.length;i++)dotsElement.push(document.createElement("LI")),dotsElement[i].setAttribute("onclick","spinCarrousel("+i+");"),e.appendChild(dotsElement[i]);setActiveDot(0)}}function spinCarrousel(e){var t=getDisplayedQuantity(),n=document.querySelector(".cross-sell__recommendation__products"),i=e*(-100/t);currentDot=e,setActiveDot(e),n.style.marginLeft=i+"%"}function loop(e,t){t(),setTimeout(function(){loop(e,t)},1e3/e)}ProductInfo.prototype={parent:{},productInfoElement:{},paymentConditionsElement:{},paymentConditions:"",paymentConditionsValueElement:{},init:function(e){this.productInfoElement=document.createElement("DIV"),this.productInfoElement.setAttribute("class","product__info"),this.paymentConditionsElement=document.createElement("P"),this.paymentConditionsElement.setAttribute("class","product__info__payment-conditions"),this.paymentConditionsValueElement=document.createElement("SPAN"),this.paymentConditionsValueElement.setAttribute("class","product__info__payment-conditions product__info__payment-conditions--value");var t=e.split("ou até ");t[0]!=e&&(this.paymentConditionsElement.appendChild(document.createTextNode("ou até ")),e=t[1]),t=e.split(" sem juros")[0],this.paymentConditionsValueElement.appendChild(document.createTextNode(t)),this.paymentConditionsElement.appendChild(this.paymentConditionsValueElement),t!=e&&this.paymentConditionsElement.appendChild(document.createTextNode(" sem juros")),this.productInfoElement.appendChild(this.paymentConditionsElement)},setParent:function(e,t){this.parent=e,void 0===t?this.parent.appendChild(this.productInfoElement):this.parent.insertBefore(this.productInfoElement,t)}},Product.prototype={parent:{},element:{},imageContainerElement:{},imageElement:{},imageName:"",nameElement:{},name:"",priceElement:{},priceValueElement:{},price:"",priceOldElement:{},priceOldValueElement:{},oldPrice:"",productInfo:{},buttonElement:{},init:function(e,t,n,i){this.parent=e,this.imageName=t,this.name=n,this.price=i,this.element=document.createElement("A"),this.element.setAttribute("class","product"),this.imageElement=document.createElement("IMG"),this.imageElement.setAttribute("class","product__img"),this.imageElement.setAttribute("src",this.imageName),this.imageElement.setAttribute("alt","Imagem do produto "+this.name),this.imageContainerElement=document.createElement("DIV"),this.imageContainerElement.setAttribute("class","product__img-container"),this.imageContainerElement.appendChild(this.imageElement),this.element.appendChild(this.imageContainerElement),this.nameElement=document.createElement("P"),this.nameElement.setAttribute("class","product__name");var o=this.name.substring(0,60);o!=this.name&&(o+="..."),this.nameElement.appendChild(document.createTextNode(o)),this.element.appendChild(this.nameElement),this.priceElement=document.createElement("P"),this.priceElement.setAttribute("class","product__price"),this.priceElement.appendChild(document.createTextNode("Por: ")),this.priceValueElement=document.createElement("SPAN"),this.priceValueElement.setAttribute("class","product__price--value"),this.priceValueElement.appendChild(document.createTextNode(this.price)),this.priceElement.appendChild(this.priceValueElement),this.element.appendChild(this.priceElement),this.buttonElement=document.createElement("BUTTON"),this.buttonElement.setAttribute("class","product__button"),this.buttonElement.setAttribute("name","addToCart"),this.buttonElement.setAttribute("type","button");var l=document.createElement("P");l.setAttribute("class","product__button__text"),l.appendChild(document.createTextNode("adicionar ao carrinho")),this.buttonElement.appendChild(l);var s=document.createElement("I");s.setAttribute("class","material-icons"),s.appendChild(document.createTextNode("add_shopping_cart")),this.buttonElement.appendChild(s),this.element.appendChild(this.buttonElement),this.parent.appendChild(this.element)},setOldPrice:function(e){this.oldPrice=e,this.priceOldElement=document.createElement("P"),this.priceOldElement.setAttribute("class","product__old-price"),this.priceOldElement.appendChild(document.createTextNode("De: ")),this.priceOldValueElement=document.createElement("SPAN"),this.priceOldValueElement.setAttribute("class","product__old-price product__old-price--value"),this.priceOldValueElement.appendChild(document.createTextNode(this.oldPrice)),this.priceOldElement.appendChild(this.priceOldValueElement),this.element.insertBefore(this.priceOldElement,this.priceElement)},setProductInfo:function(e){this.productInfo=new ProductInfo,this.productInfo.init(e),this.productInfo.setParent(this.element,this.buttonElement)},removeButton:function(){this.element.removeChild(this.buttonElement)}};var dotsElement=[],currentDot=0;populateVisited(document.querySelector(".cross-sell__visited")),populateRecommendation(document.querySelector(".cross-sell__recommendation__products")),loop(12,function(){resize(document.querySelector(".cross-sell__recommendation__products"),document.querySelectorAll(".product--recommendation")),carrouselDots(document.querySelector(".dots__container"),document.querySelectorAll(".product--recommendation"),22)}),window.addEventListener("resize",function(){spinCarrousel(currentDot)});