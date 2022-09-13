import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "reactfire";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form({ messagesCollection }) {
  const [newMessage, setNewMessage] = useState("");
  const { data: user } = useUser();

  const { uid, displayName, photoURL } = user;

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      addDoc(messagesCollection, {
        text: trimmedMessage,
        createdAt: serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{width:'80%', display: 'inline'}}>
        <TextField sx={{width:'80%'}} id="input-with-sx" label="Type your message here..." variant="standard" value={newMessage} onChange={handleChange}/>
      
        <Button variant="contained" type="submit" disabled={!newMessage} sx={{marginLeft:1 ,width:'10%',padding:1,display:'inline'}}>Send</Button>
      </Box>
    </form>
  );
}
