import React from 'react'
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout'


const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
    <Button variant="contained" color="primary">
      Hello World
    </Button>
      <h1>Hello Next.js 👋</h1>
    </Layout>
  )
}
export default Index