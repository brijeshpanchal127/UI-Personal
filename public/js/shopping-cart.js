(function (global, factory) {            
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.QsmShoppingCart = factory();         

} (this,function() { 'use strict';

var cartItems = [];
var tenderItems = [];

const emptyCart = () => cartItems=[];

const addCartItem = (i) => cartItems.push(i);
const getCartItems = () => cartItems;

const addTenderItem = (i) => cartItems.push(i);
const getTenderItems = () => tenderItems;


return {
  addCartItem,
  getCartItems,
  addTenderItem,
  getTenderItems,
  emptyCart
}



}))