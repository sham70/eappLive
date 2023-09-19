

const CartReducer = (state,action) => {

    if(action.type==='ADD_TO_CART'){
        let{id,color,amount,product}=action.payload;
        // console.log(product);

//handlind existing cart items
       let existingProduct=state.cart.find((curEle)=>curEle.id===id+color);

       if(existingProduct){
        let updatedProdect=state.cart.map((curEle)=>{
            if(curEle.id===id+color){
                let newAmount=curEle.amount+amount;

                if(newAmount >=curEle.max){
                    newAmount=curEle.max;
                }
                return{
                    ...curEle,
                    amount:newAmount,
                };
            }else{
                return curEle;
            }
        })
        return{
            ...state,
            cart:updatedProdect,
        }
       }else{

       
        let cartProduct;
        cartProduct={
            id:id+color,
            name:product.name,
            color,
            amount,
            image:product.image[0].url,
            price:product.price,
            max:product.stock,

        }
        return{
            ...state,
            cart:[...state.cart,cartProduct],
        }
    }
    }

    if(action.type==='SET_DECREASE'){
        let updatedProduct=state.cart.map((curEle)=>{
            if(curEle.id===action.payload){
                let decAmount=curEle.amount-1;
                if(decAmount<=1){
                    decAmount=1;
                }

                return{
                    ...curEle,
                    amount:decAmount,
                }
            }else{
                return curEle;
            }
        });
        return{...state,cart:updatedProduct}
    }



    if(action.type==='SET_INCREASE'){
        let updatedProduct=state.cart.map((curEle)=>{
            if(curEle.id===action.payload){
                let incAmount=curEle.amount+1;
                if(incAmount>=curEle.max){
                    incAmount=curEle.max;
                }

                return{
                    ...curEle,
                    amount:incAmount,
                }
            }else{
                return curEle;
            }
        });
        return{...state,cart:updatedProduct}
    }



    if(action.type==='REMOVE_CART'){

        let updatedCart = state.cart.filter((curEle)=>{
            return  curEle.id !== action.payload;
        })
        return{
            ...state,
            cart: updatedCart,
        }
    }
    if(action.type==='CLEAR_CART'){
        return{
            ...state,
            cart:[],
        }
    }

    if(action.type=== 'TOTAL_ITEM'){
        let updatedItem=state.cart.reduce((initialValue,curEle)=>{
            let {amount}=curEle;
            return initialValue=initialValue+amount;
        },0)

        return {
            ...state,
            total_item: updatedItem,
        }
    }

    if(action.type === 'TOTAL_PRICE_ORDER'){

        let updatedPrice=state.cart.reduce((initialVal,curEle)=>{
            let {price, amount}=curEle;

             initialVal=initialVal + price *amount;
             return initialVal;
        },0)

        return {
            ...state,
            total_price:updatedPrice,
        }
    }
    

  return state;
}

export default CartReducer