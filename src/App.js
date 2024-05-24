import "./App.css";
import { Header, Main, Footer } from "./components";
import { ThemeProvider } from "./providers/ThemeProvider";




function App() {
  return (
    <ThemeProvider>
      
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  );
  
}

export default App;