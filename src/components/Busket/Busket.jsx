import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { useBusket } from '../../contexts/busketContext';
import { Button, Grid, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Busket() {
const {getCart, cart, changeProductCount, deleteCartProduct}= useBusket()
const navigate = useNavigate()


  React.useEffect(() => {
    getCart();
  }, []);

  const resetCart = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  console.log(cart);
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "0%" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Изображение</StyledTableCell>
            <StyledTableCell align="right">Наименование</StyledTableCell>
            <StyledTableCell align="right">Компания</StyledTableCell>
            <StyledTableCell align="right">Цена</StyledTableCell>
            <StyledTableCell align="right">Информация</StyledTableCell>
            <StyledTableCell align="right">Кол-во</StyledTableCell>
            <StyledTableCell align="right">Сумма</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} width="130px" />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600 }} align="right">
                {row.item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                {row.item.description}
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600 }} align="right">
                {row.subPrice}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => deleteCartProduct(row.item.id)}>
                  DELETE
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Grid sx={{display:'flex', flexDirection: 'row-reverse'}}>
      <Button onClick={()=>{
        resetCart()
        navigate('/orders')
      }}>Buy ALL {cart?.totalPrice}$</Button>

      </Grid>
    </TableContainer>
  );
}
