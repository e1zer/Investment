import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import actionCreaters from "@store/action-creaters";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreaters, dispatch);
}