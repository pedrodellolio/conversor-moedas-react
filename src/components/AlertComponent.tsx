import { Alert } from '@mui/material';

type Props = {
  text: string;
}

function AlertComponent(props: Props) {
  return (
    <>
      <Alert severity="error">
        {props.text}
      </Alert>
    </>
  );
  }
  
  export default AlertComponent;
  