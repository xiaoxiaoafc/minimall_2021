import {request} from "./request";

const homeAPI = {
    getGoodsData : function (goodsType,pageNo){
        return request({
            url:'api/home/goods',
            params : {
                goodsType :  goodsType,
                pageNo : pageNo
            }
        });
    },
    getRecommend : function () {
        return request({
            url:'api/home/getRecommend'
        });
    },
    getBanner : function () {
        return request({
            url:'api/home/getBanner',
        });
    }
}




export default {
    homeAPI
}