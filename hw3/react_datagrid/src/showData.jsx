import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

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
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid rows={row} columns={columns} pageSize={10}  /> 
        </div> 
        </>
    );
  
}
// checkboxSelection
 

export default ShowData;