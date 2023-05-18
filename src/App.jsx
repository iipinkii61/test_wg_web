import Router from "./routes/Router";
import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
