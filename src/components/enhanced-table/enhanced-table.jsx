import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import RestaurantContext from '../../store/restaurant-context';
import EnhancedTableHead from './table-head/table-head';
import { getComparator, stableSort } from './helpers/sorts';
import EnhancedTableToolbar from './enhanced-table-toolbar/enhanced-table-toolbar';
import { MenuItem, TextField, Typography } from '@mui/material';
import { TimePicker } from '@mui/lab';

export default function EnhancedTable() {
  const { ordersQueue: rows = [], tables = [], updateTableStatus, updateOrder } = useContext(RestaurantContext);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      console.log(event.target.checked);
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.target.type === 'checkbox') {
      console.log(event.target);

      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }

      setSelected(newSelected);
    }
  };

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const setTimeChange = (rowId, value, field) => {
    updateOrder({
      id: Number(rowId),
      [field]: value,
    });
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table aria-labelledby='tableTitle' size={'small'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const tableId = tables.find((t) => t.orderId === row.id)?.id;
                  const { startTime = null, endTime = null } = row;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align='center' component='th' id={labelId}>
                        {row.id}
                      </TableCell>
                      <TableCell align='center'>{row.mobile}</TableCell>
                      <TableCell align='center'>{row.diners}</TableCell>
                      {tableId ? (
                        <TableCell align='center'>{tableId}</TableCell>
                      ) : (
                        <TableCell padding='normal' align='center'>
                          <TextField
                            sx={{ padding: '0', width: '100%' }}
                            id='outlined-select-table'
                            select
                            value={-1}
                            onChange={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              updateTableStatus(e.target.value, row.id);
                            }}
                            size='small'
                          >
                            {tables
                              .filter((t) => t.orderId === false && t.size === row.diners)
                              .map((t) => (
                                <MenuItem key={t.id} value={t.id}>
                                  <Typography sx={{ fontSize: '1.6vh' }}>
                                    Table ID {t.id}/{t.size}
                                  </Typography>
                                </MenuItem>
                              ))}
                          </TextField>
                        </TableCell>
                      )}
                      <TableCell>
                        <TimePicker
                          value={startTime}
                          onChange={(value) => setTimeChange(row.id, value, 'startTime')}
                          renderInput={(params) => <TextField size='small' {...params} />}
                        />
                      </TableCell>
                      <TableCell>
                        <TimePicker
                          value={endTime}
                          onChange={(value) => setTimeChange(row.id, value, 'endTime')}
                          renderInput={(params) => <TextField size='small' {...params} />}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
