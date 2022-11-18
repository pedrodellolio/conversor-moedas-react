import { useState, useEffect } from 'react';
import { APISettings } from '../api/apiSettings';
import InputComponent from './InputComponent';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {Button, Box, IconButton, Typography, AlertTitle, Alert} from '@mui/material';
import AlertComponent from './AlertComponent';

function FormComponent() {
    const [moedaA, setMoedaLadoA] =  useState<string>("brl");
    const [valorA, setValorA] = useState<string>("");
    const [moedaB, setMoedaLadoB] =  useState<string>("usd");
    const [valorB, setValorB] = useState<string>("");
    const [taxaCambio, setTaxaCambio] = useState<number>(0);
    const [hasError, setHasError] = useState<boolean>(false);
    const [alert, setAlert] = useState<string>("");

    useEffect(() => {
      getTaxaCambio()
        .then((data) => setTaxaCambio(data));
    }, [moedaA, moedaB]);
  
    const onSubmit = async (event: any) => {
        event.preventDefault();
        await converterValor();
    }

    const getTaxaCambio = () : Promise<number> => {
      return fetch(APISettings.BASE_URL + `/currencies/${moedaA}/${moedaB}.json`)
        .then(res => res.json())
        .then(data => {
          setAlert("");
          return data[moedaB];
        })
        .catch(() => {
            setAlert("Não foi possível retornar a taxa de câmbio. Tente novamente mais tarde.")
        });
    }

    const converterValor = async () : Promise<void> => {
      setHasError(!isNumeric(valorA));
      if (!isNumeric(valorA) || alert !== "") setValorB("0");
      else {
        const valorConvertido = parseFloat(valorA) * taxaCambio;
        setValorB(valorConvertido.toFixed(2));
      }
    }

    const alternarCampos = async () : Promise<void> => {
        const prevMoedaA = moedaA;
        setMoedaLadoA(moedaB);
        setMoedaLadoB(prevMoedaA);
    }

    function isNumeric(str: string): boolean {
      if (typeof str !== 'string') {
        return typeof str !== 'string';
      }
      if (str.trim() === '') {
        return false;
      }
      return !Number.isNaN(Number(str));
    }

    return (
      <>
      {alert != "" &&
        <AlertComponent text={alert}/>
      }
      <form className='form' noValidate onSubmit={async (event) => {onSubmit(event)}}>
          <Box sx={{
            px: 3,
            borderRadius: '.3rem',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: {md: 'row', sm: 'column', xs: 'column'}
          }}>
              <InputComponent 
                onSelectionChange={setMoedaLadoA}
                onInputChange={setValorA}
                valor={valorA}
                moeda={moedaA}
                readOnly={false}
                hasError={hasError}
                setHasError={setHasError}
                setAlert={setAlert}
              />
              <IconButton
                aria-label="alternar"
                onClick={async () => await alternarCampos()} 
              >
                <CompareArrowsIcon sx={{color: '#fff'}}/>
              </IconButton>
              <InputComponent 
                onSelectionChange={setMoedaLadoB}
                onInputChange={setValorB}
                valor={valorB}
                moeda={moedaB}
                readOnly={true}
                hasError={hasError}
                setHasError={setHasError}
                setAlert={setAlert}
              />
          </Box>
          <Box sx={{
            mt: 3,
            px: 3,
            display: 'flex',
            flexDirection: {md: 'row', sm: 'row', xs: 'column'},
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: '250px',
                backgroundColor: '#E8E8E8',
                m: 2
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    color: 'grey',
                    p: 1,
                }}>{`${1} ${moedaA.toLocaleUpperCase()} = ${taxaCambio !== undefined ? taxaCambio : "?"} ${moedaB.toLocaleUpperCase()}`}</Typography>
            </Box>
            <Button type="submit" variant='contained' sx={{width: {xs: '100%', sm: '20%'}}}>Converter</Button>
          </Box>
        </form>
      </>
    );
  }
  
  export default FormComponent;
  