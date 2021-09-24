import React, { useReducer } from 'react';
import ordersQueue from './data/orders.json';
import tables from './data/tables.json';

import RestaurantContext from './restaurant-context';
import { restaurantReducer, DELETE_ORDER, UPDATE_ORDER, UPDATE_TABLE_STATUS } from './restuarant-reducer';

const RestaurantProvider = (props) => {
  const [restaurantState, dispatch] = useReducer(restaurantReducer, {
    ordersQueue,
    tables,
  });

  const updateTableStatus = (tableId, orderId) => {
    dispatch({ type: UPDATE_TABLE_STATUS, tableId, orderId });
  };

  const deleteOrder = (orderId) => {
    setTimeout(() => {
      dispatch({ type: DELETE_ORDER, orderId });
    }, 700);
  };

  const updateOrder = (order) => {
    setTimeout(() => {
      dispatch({ type: UPDATE_ORDER, order });
    }, 700);
  };

  return (
    <RestaurantContext.Provider
      value={{
        updateTableStatus,
        deleteOrder,
        updateOrder,
        ...restaurantState,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
