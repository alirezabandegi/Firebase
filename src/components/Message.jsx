import Avatar from '@mui/material/Avatar';

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


export default function Message({ createdAt, text, displayName }) {
  return (
    <div>
      [
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      ]{" "}
      
      <Avatar {...stringAvatar('a c')} />
      
      <strong>
        {displayName ? displayName : null}
      </strong>{" "}
      {text}
    </div>
  );
}
