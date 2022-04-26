import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  
  const FiltersBlock = ({ getProducts }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const filter = new URLSearchParams(location.search);
  
    const [searchValue, setSearchValue] = useState(filter.get("q") || "");
    const [doughValue, setDoughValue] = useState(filter.get("dough") || "")
    const [sizeValue, setSizeValue] = useState(filter.get("size") || "")
  
    const handleFilters = (key, value) => {
      filter.set(key, value);
      navigate(`${location.pathname}?${filter.toString()}`);
      setSearchValue(filter.get("q") || "");
      setDoughValue(filter.get("dough") || "")
      setSizeValue(filter.get("size") || "")
      getProducts();
    };
  
    const resetFilter  = () => {
      setSearchValue("")
      setDoughValue("")
      setSizeValue("")
      navigate("/")
      getProducts()
    }
  
    return (
      <div className="filters-block">
        <TextField variant="standard"
          value={searchValue}
          onChange={(e) => handleFilters("q", e.target.value)}
          type="search"
          label="Живой поиск..."
        />
        <FormControl variant="standard">
            <InputLabel id="dough-label">Выберите тесто</InputLabel>
            <Select
              value={doughValue}
              onChange={(e) => handleFilters("dough", e.target.value )}
              label="Выберите тесто"
              labelId="dough-label"
            >
              <MenuItem value="traditional">Традиционное</MenuItem>
              <MenuItem value="thick">Тонкое</MenuItem>
              <MenuItem value="fat">Толстое</MenuItem>
            </Select>
          </FormControl>
        <FormControl variant="standard">
          <InputLabel id="size-label">Выберите размер</InputLabel>
          <Select
            value={sizeValue}
            onChange={(e) => handleFilters("size", e.target.value)}
            label="Выберите размер"
            labelId="size-label"
          >
            <MenuItem value="s">SMALL</MenuItem>
            <MenuItem value="m">MIDDLE</MenuItem>
            <MenuItem value="l">LARGE</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" color="error" onClick={resetFilter}>Reset</Button>
      </div>
    );
  };
  
  export default FiltersBlock;
  