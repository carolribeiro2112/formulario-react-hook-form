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
        <input ref={register({required:true})} type="text" name='name'placeholder="Nome"/>
        {errors.name && <p>Nome obrigatório</p>}
        <input ref={register} type="text" name='city'placeholder="cidade"/>
        <input ref={register({required:true})} type="email" name='email'placeholder="e-mail"/>
        {errors.email && <p>E-mail obrigatório</p>}
        <input ref={register({required:true, min:18})} type='number' name='age' placeholder="idade"/>
        {errors.age?.type === "required"  && <p>idade obrigatória</p>}
        {errors.age?.type==="min" && <p>usuário deve ser maior de 18 anos</p>}
        <label>Estado Civil</label>
        <input ref={register} type="radio" name="civil-state" value="casado"/>casado
        <input ref={register} type="radio" name="civil-state" value="solteiro"/>solteiro
        <input ref={register} type="radio" name="civil-state" value="divorciado"/>divorciado
        <input ref={register} type="radio" name="civil-state" value="viúvo"/>viúvo
        {
          casado ==='casado' && (
            <div>
              <label>Nome do conjuge</label>
              <input type="text" name='conjuge' ref={register}/>
            </div>
          )
        }
      
        <button>Enviar</button>
      </form>
    </>
  )
}

export default Formulario;