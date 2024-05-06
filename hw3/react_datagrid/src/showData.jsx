import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

const columns = [
    { field: 'name', headerName: '名稱', width: 600 },
    { field: 'site', headerName: '地點', width: 600},
    { field: 'price', headerName: '票價', width: 300},
];

const ShowData = ()=>{
    
    const [row,setRow] = useState([])
    useEffect(()=>{
        fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
        .then(res=>res.json())
        .then(json=>{
            const newRows = json.map(item => ({
                id: item.UID,
                name: item.title,
                site: item.showInfo[0].location,
                price: item.showInfo[0].price,
            }));
            setRow(newRows);
        });
    },[]);
    
    
    
    return(
        <>
        <h1>觀光景點</h1>
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid 
                rows={row} 
                columns={columns} 
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                  }}
                  pageSizeOptions={[5, 10, 25]}
            />  
        </div> 
        </>
    );
  
}

export default ShowData;
