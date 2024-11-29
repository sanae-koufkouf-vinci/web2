import { useState, useEffect } from "react";

interface Dog {
    message: string;
    status: string;
  }

const RandomDog = () =>{

    const [dog, setDog] = useState<Dog | undefined >(undefined);
    
    const fetchDogImage = async ()  => {
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
       
        const data = await response.json();   
        setDog({
            message: data.message ?? "No dog found",
            status: data.status ?? "Error",
          });    
    }catch(error){
        console.error("Failed to fetch dog image", error);
      setDog({ message: "Failed to fetch dog image", status: "Error" });
    }

    };

    useEffect(()=>{
     fetchDogImage();
     const interval = setInterval(fetchDogImage,5000);
     return () => clearInterval(interval);

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