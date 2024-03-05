import { gql, useLazyQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { useState } from "react";
const COUNTRY_QUERY = gql`
  query CountryQuery($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const CountryDetails = () => {
  const [countrycode, setCountryCode] = useState<string>("");

  const [getCountryDetails, { loading, error, data }] =
    useLazyQuery(COUNTRY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const callApollofn = () => {
    console.log("country code", countrycode);

    if (countrycode) {
      console.log("country code", countrycode);
      getCountryDetails({ variables: { code: countrycode.toUpperCase() } });
    }
  };
  return (
    <>
      <h1> Country</h1>
      <Typography sx={{ textAlign: "center" }}>Country Details</Typography>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="country code"
          onChange={(e) => setCountryCode(e.target.value)}
        />
        <button> Get Country Detail</button>
        <button onClick={callApollofn}> Get Country Using GraphQl</button>
      </div>
      <div>
        <h1> COuntry Detail </h1>
        <span>country name:{data?.country.name}</span> <br />
        <span>country phone: {data?.country.phone}</span> <br />
        <span>country native: {data?.country.native}</span> <br />
        <span>country capital:{data?.country.capital}</span> <br />
        <span>country currency:{data?.country.currency}</span>
        <br />
      </div>
    </>
  );
};

export default CountryDetails;
