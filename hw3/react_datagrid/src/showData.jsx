import { useState, useEffect } from 'react';
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';

const columns = [
    { key: 'name', name: '名稱', width: 600 },
    { key: 'site', name: '地點', width: 600},
    { key: 'price', name: '票價', width: 300},
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
        <div style={{ height: 1000, width: '100%' }}>
            <DataGrid rows={row} columns={columns} pageSize={10}  /> 
        </div> 
        </>
    );
  
}
// checkboxSelection
 

export default ShowData;