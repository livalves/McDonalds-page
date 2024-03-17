import * as S from "./components/Header/header_style";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {

    return (
       <>
            <S.GlobalStyle/>
            <Header/>
            <Main/>
            <Footer/>
       </>
    );
}

export default App
