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

class shoppingCart {
    items = [];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput.innerHTML = `Total: \₹${1}`;
    }

    render() {
        const prodEl = document.createElement('section');
        prodEl.className = 'cart';
        prodEl.innerHTML = `
            <h2>Total: \₹${0}</h2>
            <button>Order Now!</button>
        `;
        this.totalOutput = prodEl.querySelector('h2');
        return prodEl;
    }
}

class ProductItem {
    constructor(product){
        this.product = product;
    }

    addToCart(){
        // console.log('Adding to Cart ...');
        // console.log(this.product);
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
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
        return prodEl;
    }
}

class ProductList {
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

    constructor() {}

    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        const productList = new ProductList();
        const prodListEl = productList.render();
        this.cart = new shoppingCart();
        const cartEl = this.cart.render();
        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App {
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