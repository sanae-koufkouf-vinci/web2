import { useState, useEffect } from "react";

interface Dog {
    message: string;
    status: string;
  }

const RandomDog = () =>{

    const [dog, setDog] = useState<Dog | undefined >(undefined);
    
    const fetchDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        setDog({
          message: data.message ?? "No dog found",
          status: data.status ?? "Error",
        });
    });

    };

    useEffect(()=>{
     fetchDogImage();

    },[]);
   
    if(!dog){
        return <p>Loading...</p>
    }


    return(
        <>
        <div>
        <h2>Random Dog</h2>
        <img src={dog.message} alt="dog image" style={{ maxHeight: 300 }}  />
        </div> 
        </>
    )

};
export default RandomDog;