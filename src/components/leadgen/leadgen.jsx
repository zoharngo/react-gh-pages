import React, { useMemo, useContext } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import RestaurantContext from '../../store/restaurant-context';

const Leadgen = () => {
  const { tables = [] } = useContext(RestaurantContext);
  const availableTables = useMemo(() => tables.filter((t) => t.orderId === false).length, [tables]);
  const takenTables = useMemo(() => tables.length - availableTables, [availableTables, tables]);
  return (
    <Box padding={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} component='div'>
      <Box m={1}>
        <Typography sx={{ color: 'green', fontWeight: 700, lineHeight: '3vh', fontSize: '2vh' }}>
          AVAILABLE TABLES: ({availableTables})
        </Typography>
      </Box>
      <Box m={1}>
        <Typography sx={{ color: 'red', fontWeight: 700, lineHeight: '3vh', fontSize: '2vh' }}>TAKEN TABLES: ({takenTables})</Typography>
      </Box>
    </Box>
  );
};

export default Leadgen;
