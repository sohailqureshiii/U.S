
import axiosIntance from "../helpers/axios";
import { categoryContants } from "./constants";

export const getAllCategory = () => {
    return async (dispatch) => {

        dispatch({ type: categoryContants.GET_ALL_CATEGORIES_REQUEST });
        const res = await axiosIntance.get(`category/getcategory`);
        console.log(res);
        if (res.status === 200) {

            const { categoryList } = res.data;
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        } else {
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}


