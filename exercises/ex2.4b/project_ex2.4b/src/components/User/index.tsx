interface UserProps {
    name: string,
    age:number,
    isOnline:boolean,
}


const User = (props : UserProps)=>{
    return (
        <div>
         <h2> Nom: {props.name}</h2>
         <h2>Age : {props.age}</h2>
         <div className={props.isOnline ? "online" : "offline"}>
  {props.isOnline ? "En ligne" : "Hors ligne"}
</div>
        </div>
    )
};

export default User;