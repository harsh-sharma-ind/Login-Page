import { TandC, Btn, Register } from "./Two.style";
export const LoginForm = () => {
  return (<>
    <h1>Login</h1>

    <label>Login ID</label>
    <input type="text" placeholder="Enter Login ID" />

    <label>Password</label>
    <input type="password" placeholder="Enter Password" id="inp" />

    <div>
      <span>
        <input type="checkbox" />
        Remember Me
      </span>

      <a href="#">Change Password</a>

    </div>
    <TandC>
    <span ><input type="checkbox"/>Agree to <a href="#" >Terms and Conditions</a></span>
    </TandC>

    <Btn>Login</Btn>

    <Register>
    <span ><input type="checkbox"/>Don't have an account ? <a href="#" >Register Please</a></span>
    </Register>
  </> );
};
