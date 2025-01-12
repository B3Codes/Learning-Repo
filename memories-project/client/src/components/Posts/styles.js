import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1), // Use theme spacing directly
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

export default useStyles;
