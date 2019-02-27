import {get, post } from './http.js'

export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);


// 下面是引入
// import { apiAddress } from '@/request/api';
// apiAddress({                    
//     type: 0,                    
//     sort: 1                
// }).then(res => {
//     // 获取数据成功后的其他操作          
// })