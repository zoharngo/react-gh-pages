import React from 'react';

const RestaurantContext = React.createContext({
  ordersQueue: [],
  tables: [],
  updateTableStatus: () => {},
  deleteOrder: (id) => {},
  updateOrder: (order) => {},
});

export default RestaurantContext;
