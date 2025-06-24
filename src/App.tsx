import { Button, Paper, Table, TableBody, TableContainer, TableRow, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import { SteamResponse } from './schema/steam-schema';
import { UdemyResponse } from './schema/udemy-schema';
import { getSteamVoucher, getUdemyVoucher } from './services/voucher-service';

type Voucher = {
  steamDiscount: SteamResponse,
  udemyCoupon: UdemyResponse
}

function App() {
  const [vouchers, setVouchers] = useState<Voucher>();
  const [input, setInput] = useState<number>(-43894792);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [sData, uData] = await Promise.all([
          getSteamVoucher(input),
          getUdemyVoucher()
        ]);

        setVouchers({
          steamDiscount: sData,
          udemyCoupon: uData
        });
      }
      catch(error) {
        setError(`${error}`);
      }
    }

    loadData();
  }, []);
  
  return (
    <div className="App">
     <div>
      <TextField onChange={(e) => setInput(Number(e.target.value))}/>
      <Button>Fetch</Button>
       <TableContainer component={Paper}>                                    
                <Table>                                                           
                    <TableBody>                                                   
                        {vouchers && (vouchers.udemyCoupon.courses.map((row, rowIndex) => (                            
                            <TableRow key={rowIndex}>                             
                                {row.name} | {row.category}                                            
                            </TableRow>                                           
                        )))}
                    </TableBody>                                                  
                </Table>                                                          
            </TableContainer>     
      {vouchers?.steamDiscount.title} | {vouchers?.steamDiscount.original_price}                                                       
       
     </div>
    </div>
  );
}

export default App;
