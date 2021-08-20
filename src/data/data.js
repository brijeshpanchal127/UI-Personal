const data = {
  "DISPLAY_PROFILE": [
    {
      "name": "LOGIN",
      "searchInputPlaceholder": "",
      "sideBarFunctionalities": []
    },
    {
      "name": "STORE_SELECTION",
      "searchInputPlaceholder": "Store",
      "sideBarFunctionalities": ["MESSAGES", "SETTINGS", "LOGOUT", "HELP", "ABOUT"]
    },
    {
      "name": "STORE_FUNCTIONALITIES",
      "searchInputPlaceholder": "Store/ Message",
      "sideBarFunctionalities": ["MESSAGES", "SETTINGS", "SWITCH STORE", "LOGOUT", "HELP", "ABOUT"]
    },
    {
      "name": "STORE_POS",
      "searchInputPlaceholder": "SKU/ Serial #/ Transaction #/ Text",
      "sideBarFunctionalities": ["SHORTCUTS", "PROMOS", "MESSAGES", "SETTINGS"]
    }
  ],
  "SIDE_BAR_ITEMS": [
    {
      "name": "SHORTCUTS",
      "url": "",
      "items": [],
    },
    {
      "name": "PROMOS",
      "items": [],
    },
    {
      "name": "MESSAGES",
      "url": "",
      "items": [],
    },
    {
      "name": "SETTINGS",
      "url": "",
      "items": [
        {
          "name": "SWITCH STORE",
          "url": "",
          "items": [],
        },
        {
          "name": "STARRED",
          "url": "",
          "items": [],
        }
      ],
    },
    {
      "name": "LOGOUT",
      "url": "",
      "items": [],
    },
    {
      "name": "HELP",
      "url": "",
      "items": [],
    },
    {
      "name": "ABOUT",
      "url": "",
      "items": [],
    }
  ],

  "STORE_PROFILE_FUNCTIONALITIES": [
    {
      "name": "OPEN POS",
      "url": "/shopping",
      "displayProfle": "STORE_POS"
    },
    {
      "name": "START/STOP SHIFT",
      "url": "/shift",
      "displayProfle": "STORE_FUNCTIONALITIES"
    },
    {
      "name": "STORE ADMIN",
      "url": "/admin",
      "displayProfle": "STORE_FUNCTIONALITIES"
    }
  ],
  //functionalities: ["OPEN POS", "START/STOP SHIFT", "STORE ADMIN"],
  inventory: [
    { SKU: 'IPHONE12MAX', UID: '1207126312638', QTY: 1, PRICE: '0.00', NAME: 'IPHONE 12 MAX' },
    { SKU: 'WLCHARGER', UID: '120712342342638', QTY: 1, PRICE: '29.99', NAME: 'QI WIRELESS CHARGER' },
    { SKU: 'NTDSWITCH', UID: '2342374987272', QTY: 1, PRICE: '329.99', NAME: 'NINTENDO SWITCH LITE' }
  ]
};
export default data;
