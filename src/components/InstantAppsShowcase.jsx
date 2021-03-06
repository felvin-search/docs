import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;
`;

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  justify-content: space-around;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Screenshot = styled.img`
  object-fit: contain;
  margin: 1rem;
`;

function Card({ app }) {
  const handleOnClick = () => {
    // get a url of felvin.com from example queries
    if (app?.exampleSearchQueries.length > 0) {
      const query = app.exampleSearchQueries[0];
      const appUrl = `https://felvin.com/search?q=${query}`;
      window.location = appUrl;
    } else {
      return;
    }
  };

  return (
    <CardStyled onClick={handleOnClick}>
      <h2>{app.name}</h2>
      <p>
        <strong>{app.description}</strong>
      </p>
      <div>
        Example Queries
        <ul>
          {app.exampleSearchQueries && app.exampleSearchQueries.map((query) => (
            <li key={query}>{query}</li>
          ))}
        </ul>
      </div>
      {app.screenshotPath && 
      <Screenshot
        alt={`Screenshot of the instant app ${app.name}`}
        src={app.screenshotPath}
      />}
    </CardStyled>
  );
}

export default function () {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const appDetails = require("@felvin-search/apps").appDetails;
        return (
        <CardsContainer>
          {appDetails.map((app) => {
            return <Card key={app.id} app={app} />;
          })}
        </CardsContainer>
        )
      }}
    </BrowserOnly>
  );
}
