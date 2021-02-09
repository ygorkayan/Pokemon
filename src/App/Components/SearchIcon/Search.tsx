import React, { useContext } from "react";
import { Container, Input, Icon } from "./Style";
import SearchIcon from "@material-ui/icons/Search";
import { SearchContext } from "../../Context/Search/Search";
import { useHistory } from "react-router-dom";

export default function Search() {
  const { query, setQuery } = useContext(SearchContext);
  const History = useHistory();
  return (
    <Container>
      <Input
        type="text"
        placeholder="Busque seu Pokemon"
        value={query}
        onChange={(e) => {
          History.push("/search");
          setQuery(e.target.value);
        }}
      />
      <Icon>
        <SearchIcon fontSize="large" onClick={() => History.push("/search")} />
      </Icon>
    </Container>
  );
}
