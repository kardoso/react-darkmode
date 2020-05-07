import React, { useState, useEffect, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import GlobalTheme from './global'
import styled from 'styled-components'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
        <Container>
          <Title>
            Aplicação com tema {theme === 'light' ? 'claro' : 'escuro'}!
          </Title>
          <ButtonChange onClick={toggleTheme}>Mudar tema</ButtonChange>
        </Container>
      </Fragment>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 30px;
`

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  outline: none;
`

export default App
