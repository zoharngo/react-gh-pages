export const DELETE_ORDER = 'DELETE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const UPDATE_TABLE_STATUS = 'UPDATE_TABLE_STATUS';
export const RELEASE_STATUS = 'UPDATE_TABLE_STATUS';

const updateOrder = (payload, state) => {
  const { order } = payload;
  return {
    ...state,
    ordersQueue: state.ordersQueue.map((o) => {
      return o.id === order.id
        ? {
            ...o,
            ...order,
          }
        : o;
    }),
  };
};

const removeOrder = (payload, state) => {};

const updateTableStatus = (payload, state) => {
  return {
    ...state,
    tables: state.tables.map((t) => {
      return payload.tableId === t.id
        ? {
            ...t,
            orderId: payload.orderId,
          }
        : t;
    }),
  };
};

export const restaurantReducer = (state, payload) => {
  switch (payload.type) {
    case DELETE_ORDER:
      return removeOrder(payload, state);
    case UPDATE_ORDER:
      return updateOrder(payload, state);
    case UPDATE_TABLE_STATUS:
      return updateTableStatus(payload, state);
    default:
      return state;
  }
};
