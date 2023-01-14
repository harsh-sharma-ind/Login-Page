import { Container } from "./components/Container.style";
import { Sidebar } from "./components/Sidebar";
import { Global } from "./Global.style";
import { One } from "./components/One.style";
import { Two } from "./components/Two.style";
import { LoginForm } from "./components/Login_form";

function App() {
  return (
    <Global>
      <Container>
        <One>
          
      <Sidebar/>
        </One>
        <Two>
          <LoginForm/>
        </Two>
      </Container>
    </Global>
  );
}

export default App;
