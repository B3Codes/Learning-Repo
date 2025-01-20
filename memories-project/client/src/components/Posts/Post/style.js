import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia'; // Importing CardMedia from @mui/material

export const Media = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});

export const Border = styled('div')({
  border: 'solid',
});

export const FullHeightCard = styled('div')({
  height: '100%',
});

export const CardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
  background: 'white',
  boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
  overflow: 'hidden', // Ensure content does not overflow
});

export const Overlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

export const Overlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '0px',
  color: 'white',
});

export const GridContainer = styled('div')({
  display: 'flex',
});

export const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

export const Title = styled('h2')({
  padding: '0 16px',
});

export const CardActions = styled('div')({
  padding: '0 16px 8px 16px',
  display: 'flex',
  gap: '5em',
  justifyContent: 'space-between',
});
