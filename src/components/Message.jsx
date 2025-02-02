import { useRadioGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { doc, deleteDoc } from "firebase/firestore";
import { useFirestore, useUser } from 'reactfire';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


export default function Message({ createdAt, text, displayName, id, uid }) {
  const firestore = useFirestore();
  const { data: user } = useUser();

  return (
    <div>

      <Stack spacing={2} direction="row">
      <Box sx={{ 
                width: '80%',
                padding: 1,
                backgroundColor: 'red', 
                marginBottom:'5px', 
                paddingTop:2,
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
                wordWrap: 'break-word'
              }}>

      [
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      ]{" "}
      
      {displayName ? <Avatar {...stringAvatar(displayName + " .")} sx={{display:'inline', marginRight:1}}/> : null}
      
      <strong>
        {displayName ? displayName : null}
      </strong>{" "}
        {text}
      </Box>
      {uid === user.uid && <Button sx={{height:40}} variant="outlined" onClick={async () => {
        const docRef = doc(firestore, 'messages', id);
        await deleteDoc(docRef);
      }}>Delete message</Button>}
      
    </Stack>
      


    </div>
  );
}
