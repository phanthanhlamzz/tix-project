import {MOVIELIST_REQ,MOVIELIST_SUC,MOVIELIST_FAIL} from './constant';
import Axios from 'axios';

export const actMovieList = () =>{
    return (dispatch,getState)=>{
        dispatch(actMovieList_req());
        const url ="https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
        Axios(
            {
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
            //     method:"POST",
            //     data:user,
            //    headers:{
            //        Authorization:`Bearer ${accessToken}`
            //    }
            }
        )
        .then((result) => {
          // GỌI API thành công
          dispatch(actMovieList_suc(result.data));
        })
        .catch((err) => {
          // GỌI API thất bại
          dispatch(actMovieList_fail(err));
        });
    }
}
const actMovieList_req=()=>{
    return {
        type:MOVIELIST_REQ,
    };
}
const actMovieList_suc=(data)=>{
    return{
        type:MOVIELIST_SUC,
        payload:data
    };
}
const actMovieList_fail=(err)=>{
    return {
        type:MOVIELIST_FAIL,
        payload:err
    };
}