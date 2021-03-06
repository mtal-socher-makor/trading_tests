import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, TextField, withStyles, Button, IconButton, Switch } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    buttonRow:{
        width: "40vw",
        margin: "10vh auto 20px auto",
        justifyContent: "space-evenly",
               
    },
    vizContainer:{
        backgroundColor: 'var(--main)',
        width: "100%",
        height: "700px",
        borderRadius: "8px",
        marginTop:50,
        overflowX: "auto",
        overflowY: "hidden"

        

    }

}))

export const FilledButton = withStyles({
    root: {
      padding: '7px 39px',
      backgroundColor: 'var(--secondary)',
      fontWeight: 600,
      fontSize: '18px',
      color: '#FFFFFF',
      borderRadius: '21px',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'var(--secondaryDark)',
        boxShadow: '0px 6px 10px #00185829',
        transition: '.3s',
      },
      '&.Mui-disabled': {
        backgroundColor: '#ACB1BF',
        color: '#868DA2',
      },
    },
  })(Button);

  export const StyledTextField = withStyles({
    root: {
      width: '100%',
      '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        '& fieldset': {
          borderColor: '#EDEFF3',
        },
        '&:hover fieldset': {
          border: '1px solid #EDEFF3',
        },
        '&.Mui-focused fieldset': {
          border: '1px solid #EDEFF3',
        },
        '& .MuiSelect-select:focus': {
          backgroundColor: 'transparent',
          borderRadius: '8px',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '11px',
        '&::placeholder': {
          color: '#868DA2',
          opacity: 1,
        },
      },
  
      '& .MuiInputLabel-outlined': {
        transform: 'translate(12px, 12px) scale(1)',
      },
    },
  })(TextField);