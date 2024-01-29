import { useDispatch } from "react-redux";
import { stateType } from "../constants/utils";
import { actionType } from "../constants/utils";
import { participantType } from "../constants/utils";

const initialState = {
  data: [
  ],
  status: 'loading'
};
export default function tournaments(
  state: stateType = initialState,
  action: actionType
) {
  switch (action.type) {
    case 'get_started':
      return { status: 'loading', data: state.data }
    case 'get_success':
      return { status: 'finished', data: action.payload }
    case 'get_failure':
      return { status: 'error', data: [] }
    default:
      return state
  }
}
