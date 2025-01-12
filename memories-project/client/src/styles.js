import { styled } from '@mui/material/styles';
import { AppBar, Typography, Box } from '@mui/material';

// Styled AppBar
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius || 15, // Use theme value if available
  margin: theme.spacing(4, 0), // Use theme.spacing for consistency
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Styled Heading
export const StyledHeading = styled(Typography)(() => ({
  color: 'rgba(0,183,255, 1)',
}));

// Styled Image Wrapper
export const ImageWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2), // Use theme.spacing for margin consistency
}));
