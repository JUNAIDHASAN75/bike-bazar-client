import { useEffect, useState } from "react";

const BikeComponent = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBikes(data)
        })
    },[]);
    console.log(bikes)
    return (
        <div>
            
        </div>
    );
};

export default BikeComponent;