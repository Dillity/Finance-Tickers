import React, {useEffect} from "react";
import FinanceTable from "./table";
import {useDispatch, useSelector} from "react-redux";
import {getTableData} from "../../redux/reducers/tickersTableReducer";
import {io} from "socket.io-client";

const TableContainer = () => {

    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.tickersTable.tickers);


    useEffect(() => {
        const newSocket = io('http://localhost:4000/');
        newSocket.on('ticker', (data) => {
            dispatch(getTableData(data));
        });
        return () => newSocket.close();
    }, []);


    return (
        <FinanceTable tableData={tableData} />
    );
}

export default TableContainer;