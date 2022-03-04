import React, { useState, useEffect } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { apiWrapper, queryString } from "./helpers/apiWrapper";
import "./App.css";

const Wrapper = styled.div`
  margin: 10px auto;
  max-width: 1240px;
`;

const Grid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(14%, 1fr));
`;

const CharacterDiv = styled.div`
  height: 300px;
  width: 170px;
  margin: 10px 0px;
  background: black;
  &:hover {
    background: red;
  }
`;

const ImgDiv = styled.div`
  height: 210px;
  border-bottom: 4px solid red;
`;

const Img = styled.img`
  object-fit: cover;
  height: 100%;
`;

const BodyDiv = styled.div`
  margin: 15px;
`;

function App() {
  const [characters, setCharacters] = useState();
  const [search, setSearch] = useState("");
  const basicPayload = {
    limit: 30,
    ts: "hjdasdjsdh",
    apikey: "809a01f4b3790788b5174ca177ca898c",
    hash: "750091f8d7e43ea051c0dc6c33edd2fc",
  };

  const apiCall = (query) => {
    apiWrapper({
      url: `https://gateway.marvel.com/v1/public/characters${queryString(
        query
      )}`,
      method: "get",
    }).then((response) => {
      setCharacters(response.data.results);
    });
  };

  const debouncedApiCall = debounce((query) => {
    apiCall(query);
  }, 2000);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const query = { ...basicPayload };
    if (event.target.value !== "") {
      query.nameStartsWith = event.target.value;
    }
    debouncedApiCall(query);
  };

  useEffect(() => {
    if (!characters) {
      apiCall({ ...basicPayload });
    }
  }, [characters]);

  return (
    <Wrapper>
      <input
        value={search}
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      <Grid className="dG oH fS">
        {characters &&
          characters.map((character, index) => {
            return (
              <CharacterDiv key={index} className="oH cP">
                <a
                  className="cW tdN"
                  href={character.urls[0].url}
                  target="__blank"
                >
                  <ImgDiv>
                    <Img
                      className="oH oP"
                      src={
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      }
                    />
                  </ImgDiv>
                  <BodyDiv className="fwB">{character.name}</BodyDiv>
                </a>
              </CharacterDiv>
            );
          })}
      </Grid>
    </Wrapper>
  );
}

export default App;
