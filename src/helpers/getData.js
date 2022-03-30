import { phones } from '../data'


export function getPhones (){
    return new Promise((res, rej) =>{
        setTimeout(() => res(phones), 1000);
    })

}


export function setInCart({id, inCart}){
    return new Promise((res, rej) => {
        setTimeout(() =>{
            phones = {
                ...phones,
                id :{
                    ...phones.id ,
                    inCart: inCart
                }
        }
        res()
        }, 500)
    })
}
