import request from "../utils/request";

export function getExamCategoryTree() {
  return request.get("/exam-category/tree");
}
