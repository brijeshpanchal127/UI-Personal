import React from "react";
import data from "../../../../data/data";
import Detail from "../Detail/Detail.jsx";

export default function MainPanel() {
  // window.QsmShoppingCart.addCartItem({id:456, description:'phone cover', unitPrice:4.99, qty:1});
  // var cartItems = window.QsmShoppingCart.getCartItems();
  // console.log('ShoppingCartMainPanel - cartItems', cartItems);  
  return (
    <div className="shoppingCart__main">
      <div className="shoppingCart__main--inventory">
        <div className="inventory">
          {/* Search bar */}
          <div className={"search"}>
            <div className={"searchIcon"}>
              <i class="fa fa-search"></i>
            </div>
            <div className="MuiInputBase-root inputRoot">
              <input
                placeholder="Store"
                type="text"
                aria-label="search"
                class="MuiInputBase-input inputInput"
                value=""
              />
            </div>
          </div>

          {/* Invetory panel */}
          <div className="shoppingCart__main_root">
            <ul component="nav" aria-label="main mailbox folders">
              {data.inventory.map((item, index) => (
                <>
                  {index === 0 ? <hr class="solid" /> : null}
                  <li id="shoppingInventoryParent" key={item.NAME}>
                    <div className="shoppingInventoryFirstRow">
                      <div>
                        <span className="inventory__card--label">SKU: </span>
                        {item.SKU}
                      </div>
                      <div>
                        <span className="inventory__card--label">UID: </span>
                        {item.UID}
                      </div>
                      <div>
                        <span className="inventory__card--label">QTY: </span>
                        {item.QTY}
                      </div>
                      <div>
                        <span className="inventory__card--label">PRICE: </span>
                        {item.PRICE}
                      </div>
                    </div>
                    <div className={"shopping_InventorySecondRow"}>
                      <div>{item.NAME}</div>
                    </div>
                    <div className={"iconContainer"}>
                      <hr class="solid" />
                    </div>
                  </li>
                  <hr class="solid" />
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side Bar */}
      <div className="shoppingCart__main--detail">
        <Detail />
      </div>
    </div>
  );
}
