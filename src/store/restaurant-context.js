import React from 'react';

const RestaurantContext = React.createContext({
  ordersQueue: [],
  tables: [],
  updateTableStatus: () => {},
  deleteOrder: () => {},
  updateOrder: () => {},
});

export default RestaurantContext;
