import React from "react";
import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const FinanceTable = (props) => {

    return (
        <Container sx={{mt: 2}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right"><b>Ticker</b></TableCell>
                            <TableCell align="right"><b>Exchange</b></TableCell>
                            <TableCell align="right"><b>Price</b></TableCell>
                            <TableCell align="right"><b>Change</b></TableCell>
                            <TableCell align="right"><b>Change percent</b></TableCell>
                            <TableCell align="right"><b>Dividend</b></TableCell>
                            <TableCell align="right"><b>Yield</b></TableCell>
                            <TableCell align="right"><b>Last trade time</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.tableData.map((row) => (
                            <TableRow
                                key={row.ticker}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.ticker}</TableCell>
                                <TableCell align="right">{row.exchange}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.change}</TableCell>
                                <TableCell align="right">{row.change_percent}</TableCell>
                                <TableCell align="right">{row.dividend}</TableCell>
                                <TableCell align="right">{row.yield}</TableCell>
                                <TableCell align="right">{row.last_trade_time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default FinanceTable;