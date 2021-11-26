import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar/index";
import { charactersSelector, fetchCharacters, statusSelector } from "../features/characterSlice";
import * as Styled from "./style";

export function Home() {
  const data = useAppSelector(charactersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [])

  return (
    <Styled.Container>
      <Styled.Title>Rick and Morty</Styled.Title>
      <Styled.Description>
        Rick and Morty Finder book check here the status of your favorite
        character
      </Styled.Description>
      <SearchBar
        style={{ marginTop: 25 }}
        placeholder="Search here ?"
        onChange={() => null}
      />
      <Styled.List>
        {data.map((character) => (<Card key={character.id} character={character} />))}
      </Styled.List>
    </Styled.Container>
  );
}
