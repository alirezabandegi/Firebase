import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "reactfire";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

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
    <Toolbar sx={{padding: '0', margin: '0'}}>
      <form onSubmit={handleSubmit}>
        <Box position="fixed" sx={{width:'100%', display: 'inline', top: 'auto', bottom: 0, backgroundColor: '#f1f1f1', padding: '10px'}}>
          <TextField sx={{width:'80%', '&:hover': { color: 'red', opacity: [0.9, 0.8, 0.7],}}} id="input-with-sx" label="Type your message here..." variant="standard" value={newMessage} onChange={handleChange}/>
        
          <Button variant="contained" type="submit" disabled={!newMessage} sx={{marginLeft:1 ,width:'10%',padding:1,display:'inline'}}>Send</Button>
        </Box>
      </form>
    </Toolbar>
  );
}
