import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/material";
type AboutType = {
  director: string;
  releaseDate: string;
  speciesConnection: object;
  title: string;
  __typename: string;
};

const FILMS_QUERY = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;
const About = () => {
  const { loading, error, data } = useQuery(FILMS_QUERY);
  // const [moviedata, setMovieData] = useState<AboutType[]>([]);
  // useEffect(() => {
  //   setMovieData(data.allFilms.films);
  // }, [data.allFilms.films]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("data", data.allFilms.films);
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        {data.allFilms.films.map((item: AboutType) => {
          return (
            <>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <div>{item.director}</div>
                <div>{item.releaseDate}</div>
                <div>{item.title}</div>
                <div>{item.__typename}</div>
              </div>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default About;
