import React, { useState } from "react";

export default (param)=>{
    const [status, updateStatus] = useState(0);
    function send(){
        updateStatus(1);
    }
    
    let result;
    switch (status){
        case 0: result='Сохраняется';break;
        case 1: result='Сохранено';break;
        default: result='Ошибка, попробуйте чуть позже снова';
    }

    return (
         <>{result}</>
    )
}