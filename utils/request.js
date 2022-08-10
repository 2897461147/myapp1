function request(params){
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:'http://localhost:3000'+params.url,
            success:(res)=>{
                resolve(res.data)
            },
            fail:(err)=>{
                reject(err)
            }
        })
    })
}
export  default  request