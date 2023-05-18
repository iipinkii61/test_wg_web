import Router from "./routes/Router";
import styled from "styled-components";

function App() {
  const Layout = styled.div`
    height: 100vh;
  `;
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
