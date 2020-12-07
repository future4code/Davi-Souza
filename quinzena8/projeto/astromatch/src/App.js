import Main from './Components/Main/Main';
import ResetButton from './Components/ResetButton/ResetButton';
import styled from 'styled-components'

const AppContainer = styled.div `
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #282c34;
  height: 100vh;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <Main/>
      <ResetButton/>
    </AppContainer>
  );
}

export default App;
