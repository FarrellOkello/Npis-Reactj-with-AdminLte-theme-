import { ApolloProvider } from "@apollo/client";
import "./App.css";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import client from "./graphql/Client";
import Header from "./Header";
import Menu from "./Menu";
import CompanyMasters from "./Modules/CompanyMasters/CompanyMasters";
import Test from "./Modules/Test/Test";

function App() {
  return (
    <>
      <div class="wrapper">
        <ApolloProvider client={client}>
          <Header />
          <Menu />
          {/* <Dashboard /> */}
          <CompanyMasters />
          <Footer />
          {/* {/* <Test /> */}
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;
