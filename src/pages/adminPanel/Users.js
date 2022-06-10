import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Button} from "@mui/material";
import {useNavigate} from 'react-router-dom'


const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'login', label: 'Login', minWidth: 100 },
    {
        id: 'number',
        label: 'Number',
        minWidth: 170,
        align: 'right'
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'right'
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 170,
        align: 'right'
    },
];



function createData(
    title,
    login,
    number,
    email,
    price
) {
    return { title,login, number, email, price };
}

const rows = [
    createData('India', 'Nurs', +996500326320, 'Nurs@mail.ru', 200),

];



const Users = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const navigate = useNavigate();

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={4}>
                                Users
                            </TableCell>
                            <TableCell align="center" colSpan={1}>
                                <Button onClick={() => navigate('add')} style={{color : '#E0BEA2', borderColor: '#E0BEA2'}} variant="outlined" >Add</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {Array.isArray(value) ? <ul className='admin__clothes-list'>
                                                        {
                                                            value.map((item, idx) => {
                                                                return item
                                                        })}
                                                    </ul> : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
export default Users