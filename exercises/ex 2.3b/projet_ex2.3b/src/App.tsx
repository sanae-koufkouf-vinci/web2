const App = () => {
  const title = "Welcome to My App";

  const usersList = [
    {name : "Alice",
      age :25,},

    {name : "Bob",
        age :30,},

    {name : "Charlie",
          age :35,},  
  ];
  const footerText = "© 2023 My App";

  return (
    <div>
      <Title title={title}/>
      <div>
        <User users={usersList}/>
      </div>
      
      <Footer footer={footerText}></Footer>
    </div>
  );
};

export default App;

const Title = ( titleObject : {title: string} ) => {
  return <h1>{titleObject.title}</h1>

}

interface UserProps {
  name : string,
  age : number;
}
interface UserList{
  users : UserProps[]
}

const User = (userlist : UserList) => {
  return ( 
    <div>
      {userlist.users.map((user) =>
      (
      <li>{user.name} - Age: {user.age} </li> 
      ))
    }
    </div>
    
    
    
  )
}

const Footer = ( footerObject : {footer: string} ) => {
  return <h1>{footerObject.footer}</h1>

}

