import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';



function transformDate(date){
  let year = date.$y - 1911 ;
  let month = date.$M + 1 ;
  let day = date.$D;
  return `${year}-${month}-${day}`;
}

export default function DatePickers() {
  const [value, setValue] = useState(null);
  console.log(value);
  console.log('render');
  
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        format="民國YYYY年MM月DD日"
        onChange={(newValue)=>{
          
          console.log(newValue);
          // console.log(newValue.$d);
          console.log(dayjs('2000-01-01'));
          // setValue(dayjs('1000-01-01'));
          // setValue(newValue);
          setValue(dayjs(transformDate(newValue)));
        }}

      />
    </LocalizationProvider>
  );
}
