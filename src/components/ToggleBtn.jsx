import { useDispatch } from "react-redux"
import { toggleDarkMode } from "../reducers/themeSlice"
import { toggleHighlight } from "../reducers/highlightSlice";

export default function ToggleBtn({toggleBtn}){

    const dispatch = useDispatch();

    function actionCreator(payload) {
        return dispatch => {
            dispatch(toggleDarkMode())
            dispatch(toggleHighlight())
        }
    }

    return (
        <button className="absolute right-3 top-3" alt="toggle dark mode">
            <img src={toggleBtn} onClick={ () => 
                {
                    dispatch(actionCreator())
                }
                } alt=""  />
        </button>
    )
}