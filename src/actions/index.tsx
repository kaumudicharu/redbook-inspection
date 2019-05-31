import { LIKE_POST } from "../constants/action-types";

export function likePost(id: string) {
    return { type: LIKE_POST, payload: id }
  };