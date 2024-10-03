import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/PretendardVariable.woff2') format('woff2');
    font-weight: 1 1000;
    font-style: normal;
  }

    @font-face {
      font-family: 'Maplestory Bold';
      src: url('/fonts/Maplestory Bold.ttf') format('truetype');
    }

    @font-face {
      font-family: 'Maplestory Light';
      src: url('/fonts/Maplestory Light.ttf') format('truetype');
    }


  button, input {
    font-family: 'Pretendard';
    src: url('/fonts/PretendardVariable.woff2') format('woff2');
    font-weight: 1 1000;
    font-style: normal;
  }

  body {
    font-family : 'Pretendard', sans-serif;
  }
`;

const Div = styled.div`
  display : flex;
  flex-direction : column;
`;

function App() {
  return (
    <Div className="App">
      <GlobalStyle />
      <AppRoutes/>
    </Div>
  );
}

export default App;
