import React, { useState } from  "react";
import Listing from "./Listing";
import TotalCalculations from "./TotalCalculations";



const ListDisplay = ({produceData}) => {
    const [calculatedValue, setCalculatedValue] = useState();
    

    const headingStyle = {
        flex: "20%",
    }
    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid white",
    }
    const sixtyStyle = {
        flex: "60%",
    }
    const calculateTotalAmount = (amount)=>{
        console.log("PROGRESS")
        console.log(amount)
        setCalculatedValue(amount);
    }

    console.log("HEREITIS", produceData);

          return(
                             <div id="listDisplay">
                             
                             <div style={containerStyle}>
                             <div style={headingStyle}>
                                    NAME
                             </div>
                             <div style={headingStyle}>
                                        PRICE
                             </div>
                             <div style={sixtyStyle}></div>
                             </div>

                             {produceData.map((produce, index) =>{
                             let {name, price, total} = produce;
                             console.log(name, " is this ", price, " this is price")
                                            
                                return(                                  
                                    <Listing 
                                    key={index}
                                    item={name}
                                    price={price}
                                    total={total}
                                    data={produceData}
                                    indexNo={index}
                                    totalsAmount={calculateTotalAmount}
                                     />                                   
                                )})}
                                
                                <TotalCalculations newCost={calculatedValue}  />
                                            
                             </div>
          );

}



export default ListDisplay;