export default function usersReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_USER':
  
        console.log({ users: state.users.concat(action.payload.text) });
  
        return { users: state.users.concat(action.payload.text) };
  
      default:
        return state;
    }
  }