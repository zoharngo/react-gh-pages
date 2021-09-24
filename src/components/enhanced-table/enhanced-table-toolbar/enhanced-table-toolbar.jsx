import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';

function EnhancedTableToolbar({ numSelected }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
          Orders
        </Typography>
      )}

      {numSelected > 0 ? (
        <>
          <Tooltip title='Confirm'>
            <IconButton>
              <ThumbUpIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Clear'>
            <IconButton>
              <BackspaceOutlinedIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar;
