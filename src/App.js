import React from "react";
import styled from "styled-components";
import rawData from "./rawData.json";
import "./App.css";
import simple from "./assets/simple.jpg";

const Wrapper = styled.div`
  margin-top: 100px;
`;

const CardWrapper = styled.div``;

const Card = styled.div`
  margin: 10px;
  width: 30%;
  height: 300px;
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1080px) {
    width: 45%;
  }
`;

const Label = styled.label`
  font-weight: bolder;
`;

const Text = styled.div``;

const ImgWrapper = styled.div`
  height: 150px;
  border: 1px solid grey;
`;

const Image = styled.img`
  width: 60%;
`;

const GridWrapper = styled.div`
  gap: 10px 10px;
`;

const Box = styled.div`
  width: 30%;
  height: 30px;
  overflow: hidden;
  border: 1px solid grey;
`;

function App() {
  return (
    <Wrapper className="App dFA jcC fdC">
      <CardWrapper className="dFA jcC fwW">
        {rawData.map((data) => {
          return (
            <Card className="oS">
              <ImgWrapper>{/* <Image src={simple} /> */}</ImgWrapper>
              <div>
                <Label>Title: </Label>
                <Text>{data.name}</Text>
              </div>
              <div>
                <Label>Description: </Label>
                <Text>{data.description}</Text>
              </div>
            </Card>
          );
        })}
      </CardWrapper>
      ;<Label for="cars">Feed</Label>
      <GridWrapper className="dG">
        {rawData.map((data) => {
          return (
            <div>
              <Box>{data.name}</Box>
              <Box>{data.description}</Box>
            </div>
          );
        })}
      </GridWrapper>
    </Wrapper>
  );
}

export default App;
