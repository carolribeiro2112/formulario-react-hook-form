import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css'

const Formulario = () => {
  const {register,handleSubmit,errors,watch} = useForm();
  const onSubmit = (data:any) => {
    console.log(data)
  }

  const casado = watch("civil-state")

  return(
    <>
      <h1>Formulário</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          inputRef={register({required:true})} 
          id="outlined-basic" label="nome" 
          variant="outlined" 
          type="text" name='nome'
        />
        {errors.nome && <p>Nome obrigatório</p>}

        <TextField  inputRef={register} variant="outlined" type="text" name='city'label="cidade"/>

        <TextField  inputRef={register({required:true})} variant="outlined" type="email" name='email'label="e-mail"/>
        {errors.email && <p>E-mail obrigatório</p>}

        <TextField  inputRef={register({required:true, min:18})} variant="outlined" type='number' name='age' label="idade"/>
        {errors.age?.type === "required"  && <p>idade obrigatória</p>}
        {errors.age?.type==="min" && <p>usuário deve ser maior de 18 anos</p>}
        
        <FormControl component="fieldset">
        <FormLabel component="legend">Estado Civil</FormLabel>
          <RadioGroup aria-label="gender" name="civil-state">
            <FormControlLabel inputRef={register} value="casado" control={<Radio />} label="casado" />
            <FormControlLabel inputRef={register} value="solteiro" control={<Radio />} label="solteiro" />
            <FormControlLabel inputRef={register} value="divorciado" control={<Radio />} label="divorciado" />
            <FormControlLabel inputRef={register} value="viúvo" control={<Radio />} label="viúvo" />
          </RadioGroup>
        </FormControl>
        {
          casado ==='casado' && (
            <div>
              <TextField 
                inputRef={register} 
                id="outlined-basic" label="nome do conjuge" 
                variant="outlined" 
                type="text" name='nome do conjuge'
              />
            </div>
          )
        }
      
        <button>Enviar</button>
      </form>
    </>
  )
}

export default Formulario;