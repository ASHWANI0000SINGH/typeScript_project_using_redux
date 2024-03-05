import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

// type NationalNewstype = {
//   description: string;
//   siteUrl: string;
//   title: { __typename: string; english: string; native: string };
//   __typename: string;
// };

type ROCKETType = {
  launch_date_local: string;
  launch_site: string;
  links: { __typename: string; article_link: string; video_link: string };
  mission_name: string;
  rocket: { __typename: string; rocket_name: string };
  __typename: string;
};

// const NATIONAL_NEWS_QUERY = gql`
//   {
//     Page {
//       media {
//         siteUrl
//         title {
//           english
//           native
//         }
//         description
//       }
//     }
//   }
// `;

const ROCET_QUERY = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;
const NationalNews = () => {
  const { data, loading, error } = useQuery(ROCET_QUERY);

  if (loading) {
    return <p> Loading...</p>;
  }
  if (error) {
    return <p> Error...</p>;
  }

  console.log(data);
  return (
    <>
      <h1 style={{ fontSize: "32px" }}> The Daily News</h1>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data?.launchesPast.map((item: ROCKETType) => {
          return (
            <>
              <Container
                sx={{
                  width: "250px",
                  height: "250px",
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                  position: "relative",
                }}
              >
                <div>{item.mission_name}</div>
                <div>{item.rocket.rocket_name}</div>
                <div
                  style={{
                    position: "absolute",
                    top: "170px",
                    // border: "1px solid black",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", padding: "10px" }}
                    to={item.links.article_link}
                  >
                    {" "}
                    Article Link
                  </Link>
                </div>
              </Container>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default NationalNews;
