class Product {
//   These initializations can be removed here 
//   title = "Default";
//   imageURL;
//   description;
//   price;

  constructor(title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
    constructor(attrName, attrValue){
        this.name = attrName;
        this.value = attrValue;
    }
}

class component {
    constructor(renderHookId){
        //console.log("xqf")
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClass, attributes){
        const rootElement = document.createElement(tag);
        if(cssClass){
            rootElement.className = cssClass;
        }
        if(attributes && attributes.length > 0){
            for(const attr of attributes){
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class shoppingCart extends component {
    items = [];

    constructor(renderHookId) {
        super(renderHookId);
    }

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \₹${this.totalAmount}</h2>`;
    }

    get totalAmount() {
        let amt = 0;
        for(const item of this.items){
            amt += item.price;
        }
        return amt;
    }

    order() {
        console.log('Order Successful!');
        console.log('Order Amount ' + this.totalAmount);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const prodEl = this.createRootElement('section', 'cart');
        //prodEl.className = 'cart';
        prodEl.innerHTML = `
            <h2>Total: \₹${0}</h2>
            <button>Order Now!</button>
        `;
        this.totalOutput = prodEl.querySelector('h2');
        const orderBtn = prodEl.querySelector('button');
        orderBtn.addEventListener('click', this.order.bind(this));
        //return prodEl;
    }
}

class ProductItem extends component{
    constructor(product,renderHookId){
        super(renderHookId);
        this.product = product;
    }

    addToCart(){
        console.log('Adding to Cart ...');
        console.log(this.product);
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl = this.createRootElement('li', 'product-item');
        
        // prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
            <img src = '${this.product.imageURL}' alt = '${this.product.title}'>
            <div class = 'product-item__content'>
                <h2>${this.product.title}</h2>
                <h3>\₹${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
        const addButton = prodEl.querySelector('button');
        addButton.addEventListener('click', this.addToCart.bind(this));
        //return prodEl;
    }
}

class ProductList extends component {
    products = [
        new Product(
        "chain",
        "https://images.unsplash.com/photo-1574105079631-4f915922b61b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        "This is a chain",
        500
        ),
        new Product(
        "carpet",
        "https://images.unsplash.com/photo-1603913996638-c01100417b4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
        "This is a traditional carpet",
        2000
        )
    ];

    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        //const prodList = document.createElement('ul');
        const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id','prod-list')]);
        //prodList.id = 'prod-list';
        //prodList.className = 'product-list';
        for(const prod of this.products){
            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
            // prodList.append(prodEl);
        }
        //return prodList;
    }
}

class Shop {
    render() {
        //const renderHook = document.getElementById('app');
        this.cart = new shoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
        //renderHook.append(cartEl);
        //renderHook.append(prodListEl);
    }
}

class App {
    static cart;

    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }
    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();