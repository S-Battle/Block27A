import React from  "react";



const Total = ({amount, cost, indexNo, totalsArrayMethod}) => {
    

    const total = cost * amount;
          return(
                             <>
                             <p >{amount } x ${`${cost}`} = ${total.toFixed(2)} </p>

                             </>
          );

}



export default Total;
