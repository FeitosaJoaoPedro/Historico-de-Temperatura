"use client";
import { useState, useEffect } from "react";
import getCountryAndState from "@/services/getCountryAndState";
import getCity from "@/services/getCity";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./styles.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import getCoordinates from "@/services/getCoordinates";

export default function CountryAndCitySelect({
  countryLabel,
  stateLabel,
  cityLabel,
}) {
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const normalizeStateName = (str) =>
    str
      .replace(/ State$| Province$| Region$/i, "")
      .trim()
      .toLowerCase();

  async function fetchCountriesAndStates() {
    const api1Data = await getCountryAndState();
    setCountries(api1Data);
  }

  function handleCountryChange(event) {
    const value = event.target.value;
    setSelectedCountry(value);
    setSelectedState("");
    setCities([]);
    const selected = countries.find(({ name }) => name === value);
    const stateNames = selected?.states?.map((s) => s.name) || [];
    setState(stateNames);
  }

  async function handleStateChange(e) {
    const selected = e.target.value;
    setSelectedState(selected);

    const normalized = normalizeStateName(selected);

    const countryObject = countries.find((c) => c.name === selectedCountry);
    if (!countryObject) return;

    const stateObject = countryObject.states.find(
      (s) => normalizeStateName(s.name) === normalized
    );

    const matchedStateName = stateObject?.name || selected;

    const citiesList = await getCity(
      countryObject.originalName.trim(),
      matchedStateName.trim()
    );
    setCities(citiesList);
  }

  async function handleCityChange(e) {
    const cityName = e.target.value;
    setSelectedCity(cityName);

    try {
      const data = await getCoordinates(
        selectedCity,
        selectedState,
        selectedCountry
      );
      localStorage.setItem("lat", data.lat);
      localStorage.setItem("lon", data.lon);
    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error);
    }
  }

  useEffect(() => {
    fetchCountriesAndStates();
  }, []);

  return (
    <div className={styles.selectFields}>
      <FormControl sx={{ width: 470 }}>
        <InputLabel>{countryLabel}</InputLabel>
        <Select
          value={selectedCountry}
          label={countryLabel}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <MenuItem key={crypto.randomUUID()} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ width: 470 }}>
        <InputLabel>{stateLabel}</InputLabel>
        <Select
          value={selectedState}
          label={stateLabel}
          disabled={!selectedCountry}
          onChange={handleStateChange}
        >
          {state.map((s) => (
            <MenuItem key={crypto.randomUUID()} value={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: 470 }}>
        <InputLabel>{cityLabel}</InputLabel>
        <Select
          value={selectedCity}
          label={cityLabel}
          disabled={!selectedState}
          onChange={handleCityChange}
        >
          {cities.map((s) => (
            <MenuItem key={crypto.randomUUID()} value={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
