import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useEffect, useState} from "react";
import axios from "../../axios";

function createData(
    email,
    login,
    phone,
    orders
) {
    return {
        email,
        login,
        phone,
        history: orders,
    };
}

function SecondRow({row}) {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.time.slice(0,10)}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.orders.length}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, background: '#90839290'}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Номер заказа
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Category</TableCell>
                                        <TableCell align="right">Colors</TableCell>
                                        <TableCell align="right">Size</TableCell>
                                        <TableCell align="right">Count</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.orders.map((historyRow) => (
                                        <TableRow key={historyRow._id}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.title}
                                            </TableCell>
                                            <TableCell>{historyRow.category}</TableCell>
                                            <TableCell align="right">{historyRow.color}</TableCell>
                                            <TableCell align="right">{historyRow.size}</TableCell>

                                            <TableCell align="right">
                                                {historyRow.count}
                                            </TableCell>
                                            <TableCell align="right">
                                                {historyRow.count * historyRow.price}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}



function Row({row}) {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.email}
                </TableCell>
                <TableCell align="right">{row.login}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 , background: '#E0BEA280'}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Count</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <SecondRow key={row.email} row={historyRow}/>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CollapsibleTable() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios('/users').then(({data}) => {
            setUsers(data)
        })
    },[])

    return (
        <TableContainer >
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Login</TableCell>
                        <TableCell align="right">Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((item) => createData(item.email, item.login, item.phone, item.orders)).map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
