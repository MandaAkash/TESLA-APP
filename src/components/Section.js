import Fade from 'react-reveal/Fade'
import React from 'react'
import styled from 'styled-components'

function Section({title,description,backgroundimg, leftbtntxt,Rightbtntxt}) {

  return (
    <Wrap bgImage={backgroundimg}>
      <Fade bottom>
      <ITEMTEXT>
        <h1>{title}</h1>
        <p>{description}</p>
      </ITEMTEXT>
      </Fade>
      <Buttons>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton>
             {leftbtntxt}
          </LeftButton>
          {   Rightbtntxt&&
          <RightButton>
              {Rightbtntxt}
          </RightButton>
          }
        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down.svg"/>
        </Buttons>
    </Wrap>
  )
}
const Wrap=styled.div`
  width:100vw;
  height:100vh;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background-image:${props=>`url("/images/${props.bgImage}")`};
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
const ITEMTEXT=styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
flex-direction:column;
align-items:center;
@media(max-width:768px){
  flex-diection:column;
}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85
text-transform:uppercase;
font-size:12px;
cursor:pointer;
`
const RightButton=styled(LeftButton)`
  background-color:white;
  opacity:0.65;
  color:black;
  margin-top:20px;
`
const DownArrow=styled.img`
height:40px;
margin-bottom:20px;
cursor:pointer;
animation:animateDown infinite 1.5s
`
const Buttons=styled.div``
export default Section
