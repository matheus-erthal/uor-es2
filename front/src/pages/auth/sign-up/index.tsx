import { useContext, useState } from 'react';

import { StorageService, ApiRoutesService } from '../../../services';

import LoaderContext from '../../../context/loader';

import TextField from '../../../components/forms/text-field';
import TransparentBtn from '../../../components/buttons/transparent-btn';
import DefaultBtn from '../../../components/buttons/default-btn';

import logoImg from '../../../assets/images/logo.png';

export default function SignUpPage(props: any){
  const loaderContext = useContext(LoaderContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function register() {
    loaderContext?.setLoading(true);
    const body = { name, email, password };
    
    var resp = await ApiRoutesService.AuthApi.session.register(JSON.stringify(body));
    if (resp != null) {
      resp = await ApiRoutesService.AuthApi.session.login(JSON.stringify(body));
      if (resp != null) {
        StorageService.login(resp.token, resp.token);
        props.history.push({pathname: '/home'});
        return;
      };
    }
    
    loaderContext?.setLoading(false);
  }

  return (
    <div className="default-section">
      <div className="container">
        <div className="login-container">
          <div className="col-md-4">
            <div className="form-container">
              <img src={logoImg} alt="Logo do Game" />
              <TextField 
                label={'Nome'}
                name={'name'}
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                placeholder={'Digite seu nome'}
              />
              <TextField 
                label={'E-mail'}
                name={'E-mail'}
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder={'Digite seu e-mail'}
              />
              <TextField 
                label={'Senha'}
                name={'Senha'}
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                placeholder={'Digite sua senha'}
              />
              <DefaultBtn 
                label="Cadastrar"
                onClick={() => register()}
              />
              <TransparentBtn 
                label="Voltar"
                onClick={() => props.history.push({pathname: '/sign-in'})}
              />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}