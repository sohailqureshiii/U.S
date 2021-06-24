
export const followStore = (from) =>{

    return async(dispatch)=>{
      const res = await axiosIntance.put(`/follow`,{...from});
  
    if(res.status===201){
         const {following} = res.data;
         console.log(following);
        dispatch({
          type: authConstants.ADD_NEW_FOLLOWING_SUCCESS,
          payload:{following:following}
        })
    }
    }
   
  
  }
  
  export const unfollowStore = (from) =>{
    return async(dispatch)=>{
      const res = await axiosIntance.put(`/unfollow`,{...from});
      console.log(res);
    }
   
  
  }
  