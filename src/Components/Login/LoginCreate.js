import React from 'react';

import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import UseForm from '../../Hooks/UseForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginCreate = () => {
  const username = UseForm();
  const email = UseForm('email');
  const password = UseForm('password');

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const res = await fetch(url, options);
    if (res.ok) userLogin(username.value, password.value);
  }
  return (
    <section className='animeLeft'>
      <h1 className='title'> Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          {...username}
          label='Usuário'
          type='text'
          name='username'
          className
        />
        <Input {...email} label='Email' type='email' name='email' className />
        <Input {...password} label='Password' type='password' name='password' />

        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
