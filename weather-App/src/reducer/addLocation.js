export default (state=[], {type, payload}) => {
  console.log('am in the reducer');
  switch (type) {
  case 'ADD_LOCATION':
    state = [];
    return [... state, payload.forecast];
  default:
    return state;
  }
};
