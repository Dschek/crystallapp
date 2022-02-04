const axios = require('axios').default;

axios.get('');

axios.post('', {userid:1, ad:2}).then((response)=>{response.data}).catch((error)=>{})


async function getImg(imgId){
    await axios({
        url:'/getImg',
        params: {imgId}
    }).then((res)=>{
        return res
    }).catch((err)=>{
        return {code:400, mesage:'Ошибка сети, не удалось запросить изображение'}
    })
}
async function savePointes(pointes, imgid){
    await axios({
        method:'POST',
        body:{
            pointes,
            imgid
        }
    }).then((res)=>{
        return res
    }).catch((err)=>{
        return {code:400, mesage:'Ошибка сети, не удалось сохранить изображение'}
    })
}
async function 



module.exports = { getImg, savePointes }