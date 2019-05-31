import { LIKE_POST } from "../constants/action-types";
import LikedPosts from "../model/likedPosts";
const initialState = {
  likedPosts: []
};
  function rootReducer(state: any , action: any) {
    if (action.type === LIKE_POST) {
        return Object.assign({}, state, {
          likedPosts: state.likedPosts.push(action.id)
          });
      }
    return state;
  };
  export default rootReducer;