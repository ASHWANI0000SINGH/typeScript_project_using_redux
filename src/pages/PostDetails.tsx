import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType } from "../components/useDataFetching";
import { Container } from "@mui/material";

const PostDetails = () => {
  const params = useParams();
  //   const url = `https://jsonplaceholder.typicode.com/posts/${params}`;

  const [item, setItem] = useState<PostType>();

  useEffect(() => {
    async function getPostsData(): Promise<void> {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const data = await result.json();
      console.log("data", data);
      setItem(data);
    }
    getPostsData();
  }, [params]);

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <div key={item?.id} className="post">
          <span> ID {item?.id} </span>
          <div className="title">title: {item?.title}</div>
          <div className="body">{item?.body}</div>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                margin: "10px",
                backgroundColor: "orange",
                color: "white",
              }}
            >
              Add To Cart
            </button>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default PostDetails;
