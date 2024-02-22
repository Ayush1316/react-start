import changeTheNumber from "./upDown";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    changeTheNumber,
    //we have to add one reducer in thi root to export this root because we can export only one in redux reducers
})
export default rootReducers