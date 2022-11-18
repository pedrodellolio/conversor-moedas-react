import { FormControl, MenuItem, Select, TextField, OutlinedInput } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { APISettings } from '../api/apiSettings';

type Props = {
    onInputChange: any;
    onSelectionChange: any;
    setAlert: any;
    moeda: string;
    valor: string;
    readOnly: boolean;
    hasError: boolean;
    setHasError: any;
}

type Moeda = {
    sigla: string;
    nome: string;
}

function InputComponent(props: Props) {
    const [moedas, setMoedas] = useState<Moeda[]>([]);

    useEffect(() => {
        fetch(APISettings.BASE_URL + '/currencies.json')
            .then(res => res.json())
            .then(data => {
                props.setAlert("")
                let array = [] as Moeda[];
                Object.keys(data).forEach(key => {
                    array.push({sigla: key, nome: data[key]})
                })
                setMoedas(array);
            })
            .catch(() => {
                props.setAlert("Não foi possível retornar as moedas para conversão. Tente novamente mais tarde.")
            })
    }, []);

    const handleSelectionChange = (event: any) => {
        props.onSelectionChange(event.target.value);
    }

    const handleInputValue = (event: any) => {
        props.onInputChange(event.target.value);
        props.setHasError(false);
    }

    return (
      <>
        <Box sx={{
            display: 'flex',
            flexDirection: {md: 'row-reverse', sm: 'row-reverse', xs: 'column'},
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            py: 2,
        }}>
            <FormControl fullWidth sx={{my:3, flex: {sm: 1, md: 2}}}>
                <Select
                    defaultValue={props.moeda}
                    value={props.moeda}
                    onChange={handleSelectionChange}
                    input={<OutlinedInput />}
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => {
                        return selected.toUpperCase();
                    }}
                >
                    {moedas.map((moeda) => (
                        <MenuItem
                        key={moeda.sigla}
                        value={moeda.sigla}
                        >
                        <Box component='span' fontWeight={600}>{moeda.sigla.toUpperCase()}</Box> - {moeda.nome}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField fullWidth
                sx={{marginRight: {md: 2, sm: 2, xs: 0}, flex: 3, backgroundColor: '#fff', height: '65px'}} 
                id="outlined-basic" 
                variant="standard"
                inputProps={{readOnly: props.readOnly}}
                label={props.readOnly ? 'Valor convertido' : 'Valor desejado'}
                onChange={handleInputValue} 
                value={props.valor}
                error={!props.readOnly && props.hasError}
                helperText={(!props.readOnly && props.hasError) && "Insira um valor válido."}
            />
        </Box>
      </>
    );
  }
  
  export default InputComponent;
  