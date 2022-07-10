const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((transaction) => transaction.id !== action.payload);

      localStorage.setItem('transactions', JSON.stringify(transactions)); /* store all the items in browsers memory */

      return transactions;
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state]; /* spread operator */

      localStorage.setItem('transactions', JSON.stringify(transactions)); /* store all the items in browsers memory */

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;