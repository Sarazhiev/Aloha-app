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


const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'category', label: 'Category', minWidth: 100 },
    {
        id: 'colors',
        label: 'Colors',
        minWidth: 170,
        align: 'right'
    },
    {
        id: 'size',
        label: 'Size',
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
    category,
    colors,
    size,
    price
) {
    return { title, category, colors, size, price };
}

const rows = [
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),
    createData('India', 'IN', ['red', 'black', 'white'], ['S', 'M', 'L', 'XL'], 200),

];



const Users = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

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
                                <Button style={{color : '#E0BEA2', borderColor: '#E0BEA2'}} variant="outlined" >Add</Button>
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
                                                                if (item === item.toLowerCase()){
                                                                    return  <li style={{background: item }}  className='admin__circle' key={item + idx}/>
                                                                } else {
                                                                    return  <li className='admin__size' key={item + idx}>
                                                                        {item}
                                                                    </li>
                                                                }
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