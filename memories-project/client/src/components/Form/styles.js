import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

export const StyledPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius, // Adds rounded corners
  boxShadow: theme.shadows[1], // Optional: adds a subtle shadow for depth
}));

export const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '16px', // Adds consistent spacing between items
  padding: "16px",
});

export const FileInput = styled('div')(({ theme }) => ({
  width: '97%',
  margin: theme.spacing(1, 0), // Consistent spacing using theme
}));

export const ButtonSubmit = styled('button')(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1, 2),
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main, // Adds background color from theme
  color: theme.palette.common.white, // White text for contrast
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, // Hover effect
  },
}));
