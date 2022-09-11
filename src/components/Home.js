import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section
      title="Model-S"
      description="Order online for touchless delivery"
      backgroundimg="model-s.jpg"
      leftbtntxt="Custom Order"
      Rightbtntxt="Existing Order"/>
       <Section
       title="Model-3"
       description="Order online for touchless delivery"
       backgroundimg="model-3.jpg"
       leftbtntxt="Custom Order"
       Rightbtntxt="Existing Order"/>
      <Section
      title="Model-y"
      description="Order online for touchless delivery"
      backgroundimg="model-y.jpg"
      leftbtntxt="Custom Order"
      Rightbtntxt="Existing Order"/>
      <Section
      title="Model-x"
      description="Order online for touchless delivery"
      backgroundimg="model-x.jpg"
      leftbtntxt="Custom Order"
      Rightbtntxt="Existing Order"/>
      <Section
      title="MSolar Panels"
      description="Solar Panels in America"
      backgroundimg="solar-panel.jpg"
      leftbtntxt="Custom Order"
      Rightbtntxt="Existing Order"/>
      <Section
      title="Solar for New Roofs"
      description="Use New Roof Plus Solar Panels"
      backgroundimg="solar-roof.jpg"
      leftbtntxt="Custom Order"
      Rightbtntxt="Existing Order"/>
      <Section
      title="Accesories"
      backgroundimg="accessories.jpg"
      leftbtntxt="Custom Order"
      />
      
    </Container>
  )
}
const Container=styled.div`
  height:100vh
`
export default Home
