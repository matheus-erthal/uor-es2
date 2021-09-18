import { useContext, useState, useEffect } from 'react';

import LoaderContext from '../../../context/loader';

import DefaultBtn from '../../../components/buttons/default-btn';
import TransparentBtn from '../../../components/buttons/transparent-btn';
import TextField from '../../../components/forms/text-field';

import { StorageService } from '../../../services';

import './style.scss';

import logoImg from '../../../assets/images/logo.png';

export default function SignInPage(props: any){
  const loaderContext = useContext(LoaderContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext])

  async function login() {
    loaderContext?.setLoading(true);
    // const body = { email, password };
    const resp = {
      "type": "bearer",
      "token": "NQ.US2ogNc8BIbmlPdMSx8JX8cmer6lCQMDK3Y3apR7GFBOsUHL0r28enNJygAy"
    }
    // const resp = await AuthApi.session.login(JSON.stringify(body));
    if (resp != null) {
      StorageService.login(resp.token, resp.token);
      props.history.push({pathname: '/'});
      return;
    };
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
                label="Entrar"
                onClick={() => login()}
              />
              <TransparentBtn 
                label="Cadastre-se"
                onClick={() => props.history.push({pathname: '/sign-up'})}
              />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}