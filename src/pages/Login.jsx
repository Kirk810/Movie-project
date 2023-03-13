import { useContext, useRef } from 'react';

import { userContext } from '../context/Context';
import Main from '../ui-components/Main';

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(userContext);
  return (
    <Main className="Login">
      <h3>Log in</h3>
      <div className="Input">
        <input type="text" placeholder="Username" ref={inputRef} />
        <button onClick={() => login(inputRef.current.value)}>Login</button>
      </div>
    </Main>
  );
};

export default Login;
