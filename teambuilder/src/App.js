import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";

function App() {
  const[members, setMembers] = useState([]);

  const newMember = member=> setMembers([...members, member]);
  const update = info => {
    console.log(members);
    setMembers([
      ...members.map(member => {
        if (member.id === info.id){
          return info;
        }
        return member;
      })
    ])
  }
  return (
    <div className="App">
      <Form newMember={newMember}></Form>
      {members.map(member=> {
        return (
          <div>
            {member.name}
            <button onClick={update}>edit</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
