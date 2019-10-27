import NextApp from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: 'green',
}

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
      <head><link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" /></head>
      
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </>

    )
  }
}