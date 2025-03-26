import React, { useState, useEffect } from "react";
import Total from "./Total";
import produceData from "../javascript/produceData";



const  totalsArray = new Array(produceData.length);
  totalsArray.fill(0);




const Listing = ({ item, price, total, data, indexNo, totalsAmount }) => {
  const [valueObject, setValueObject] = useState({ value: 0,   index: 0  })
  const [amount, setAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);


    useEffect(()=>{       

       const runTrip =  async ()=>{            
            await addToTotalsArray();
            let newValue = await calculateTotalsArray();
            console.log('New Value is ', newValue);
            setTotalCost(newValue.toFixed(2))
            console.log("The Totals Array is ", totalsArray);
            console.log('Total cost is' ,totalCost);
            totalsAmount(totalCost);
        }  
        runTrip();

    }, [valueObject, totalCost])

    const addToTotalsArray = async()=> {
        const {value, index} = valueObject;
        totalsArray[index] = Number(value.toFixed(2));
        console.log("useEffectCalled");    
      }

    const calculateTotalsArray = async()=>{        
        
        return(
        totalsArray.reduce((init,val)=>{
                return (init + val);
            })
        )
           
    }
    

  const twentyStyle = {
    display: "flex",
    flex: "20%",
    alignItems: "center",
  };
  const buttonStyle = {
    display: "flex",
    flex: "20%",
    justifyContent: "start",
    alignItems: "center",
  };
  const fortyStyle = {
    display: "flex",
    flex: "40%",
    alignItems: "center",
  };

  


  const addAmount = () => {
    setAmount((prevAmt) => {
      return (prevAmt = prevAmt + 1);
    });
    updateTotalsArray(price.toFixed(2) * (amount + 1))
  };

const updateTotalsArray = async  (valueAmt) => {        
    setValueObject(  (obj)=>{
        return {  ...obj,            
            value: valueAmt,
            index: indexNo,
        }
    }
);}

  const subtractAmount = () => {
    if (amount > 0) {
      setAmount((prevAmt) => {
        return (prevAmt = prevAmt - 1);
      });
      updateTotalsArray(price.toFixed(2) * (amount -1))
    }
  };

  return (
    <div  className="boxHolder"  >
      <div className="box" style={twentyStyle}>
        {item}
      </div>
      <div className="box" style={twentyStyle}>
        ${price.toFixed(2)}
      </div>
      <div className="box" style={buttonStyle}>
        <button onClick={addAmount}>+</button>
        <button onClick={subtractAmount}>-</button>
      </div>
      <div style={fortyStyle}>
        <Total
          cost={price.toFixed(2)}
          indexNo={indexNo}
          amount={amount}
          total={total}
          totalsArrayMethod={updateTotalsArray}
        />
      </div>
    </div>
  );
};

export default Listing;


