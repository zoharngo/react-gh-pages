import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RestaurantContext from '../../store/restaurant-context';
import { List, ListItem, ListItemText, Popover, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: 'white',
  height: '10vh',
  fontSize: '1.3vh',
  borderRadius: '30px',
  boxSizing: 'border-box',
}));

export default function RestaurantGrid() {
  const { tables = [] } = React.useContext(RestaurantContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPopover = open ? 'simple-popover' : undefined;
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {tables.map(({ id, size, orderId }, _index) => {
        return (
          <Grid item xs={size + 1} key={id}>
            <Paper sx={{ background: 'brown' }} elevation={24}>
              <Item onClick={handleClick} sx={{ background: `${orderId || orderId === 0 ? 'red' : 'green'}` }}>
                <Typography>ID:{id}</Typography>
                <Typography sx={{ fontSize: '1.7vh', fontWeight: 500 }}>SIZE:{size}</Typography>
                {(orderId || orderId === 0) && (
                  <Typography sx={{ fontSize: '1.7vh', fontWeight: 500 }}>ORDER ID:{orderId}</Typography>
                )}
              </Item>
            </Paper>
            <Popover
              elevation={0}
              id={idPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ClearIcon />
                    </ListItemIcon>
                    <ListItemText primary='Release table' />
                  </ListItemButton>
                </ListItem>
              </List>
            </Popover>
          </Grid>
        );
      })}
    </Grid>
  );
}
