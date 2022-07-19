import React, {useEffect,useState} from 'react';
import axios from "../../axios";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {toast} from "react-toastify";




function createData(
    time,
    name,
    count,
    status, price,
    number,
    orders,
    _id
) {
    return {
        time,
        name,
        count,
        price,
        status,
        number,
        history: orders,
        _id
    };
}

function Row({row, setOrders}) {
    const [open, setOpen] = React.useState(false);

    const handleActionStatus = (status, number,id) => {
        axios.patch(`users/status/${id}`, {
            status,
            number
        }).then(() => {
            axios('/orders').then(({data}) => {
                setOrders(data)
                status === 'success' ? toast("Покупка подтверждена!") : toast("Покупка отклонена!")
            })
        })
    }
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
                <TableCell align="right">{row.count}</TableCell>
                <TableCell style={{color: row.status === 'pending' ? 'yellow' : row.status === 'success' ? 'green' : row.status === 'cancel' ? 'red' : '', fontSize: '16px'}} align="right">{row.status}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                    {
                        row.status === 'pending' ?   <div className='admin__btns'>
                            <Button  style={{marginRight: '5px', fontSize: '12px'}} variant="contained" color="success" onClick={() => handleActionStatus('success', row.number, row._id )
                            }>
                                Подтвердить
                            </Button>
                            <Button style={{fontSize: '12px'}}  variant="outlined" color="error" onClick={() => handleActionStatus('cancel', row.number, row._id )}>
                                Отклонить
                            </Button>
                        </div> :  <div className='admin__btns'/>
                    }

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, background: '#E0BEA280'}} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Номер заказа : {row.number}
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
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow._id + historyRow.size}>
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

export default function CollapsibleTable() {

    const [orders, setOrders] = useState([])


    useEffect(() => {
        axios('/orders').then(({data}) => {
            setOrders(data)
        })
    },[])


    return (
        <TableContainer >
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Total price ($)</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders && orders.map((item) => createData(item.time, item.name, item.orders.length, item.status, item.price,item.number, item.orders, item._id)).map((row) => (
                       <React.Fragment key={row.time + row.name}>
                           <Row setOrders={setOrders} row={row} />
                       </React.Fragment>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}