const initState = {
  header: "",
  info: ""
};

export default function about(state = initState, action) {
  switch (action.type) {
    case 'FETCH_ABOUT_SUCCESS':
      return action.data;
    default:
      return state;
  }
}
