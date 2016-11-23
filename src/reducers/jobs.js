const initState = [];

export default function jobs(state = initState, action) {
  switch (action.type) {
    case "FETCH_JOBS_SUCCESS":
      return action.data;
    default:
      return state;
  }
}
