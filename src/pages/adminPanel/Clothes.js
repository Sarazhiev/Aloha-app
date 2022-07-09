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
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../redux/reducers/clothes";


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
    {
        id: 'action',
        label: 'Action',
        minWidth: 170,
        align: 'right'
    },
];



function createData(
    title,
    category,
    colors,
    size,
    price,
    action,
    id

) {
    return { title, category, colors, size, price,  action,id };
}



const Clothes = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const clothes = useSelector(s => s.clothes.clothes)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


        useEffect(() => {
            axios('/clothes').then(({data}) => dispatch(getAll({arr: data})))
        }, []);


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDeleteClothes = (id) => {

        axios.delete(`/clothes/${id}`)
            .then(() => {
                toast("Товар удален!")
                axios('/clothes').then(({data}) => dispatch(getAll({arr: data})))
            }).catch(() => {
                toast("Ошибка при удалении !")
        })
    }

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={5}>
                                Clothes
                            </TableCell>
                            <TableCell align="center" colSpan={1}>
                                <Button onClick={() => navigate('add')} style={{color : '#E0BEA2', borderColor: '#E0BEA2'}} variant="outlined" >Add</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column, idx) => (
                                <TableCell
                                    key={idx}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clothes && clothes.map((item) => createData(item.title, item.category, item.colors, item.sizes, item.price,'action',item._id))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column , idx) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={value + idx} align={column.align}>
                                                    {Array.isArray(value) ? <ul className='admin__clothes-list'>
                                                        {
                                                            value.map((item, idx) => {
                                                                    return  <li className='admin__size' key={item + idx}>
                                                                        {item}
                                                                    </li>
                                                        })}
                                                    </ul> : idx === 2 ? <div  align={column.align}>
                                                        <div style={{background: value }}  className='admin__circle' />
                                                    </div>  : value === 'action' ?  <div className='admin__btns'>
                                                        <Button onClick={() => navigate(`update/${row.id}`)} style={{marginRight: '5px'}} variant="contained" color="success">
                                                            Update
                                                        </Button>
                                                        <Button onClick={() => handleDeleteClothes(row.id)} variant="outlined" color="error">
                                                            Delete
                                                        </Button>
                                                    </div> : value}
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
                count={clothes.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
export default Clothes