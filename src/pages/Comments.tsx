import { Container, Typography } from "@mui/material";
import Comment from "../components/CommentComp";
import useDataFetching2 from "../components/useDataFetching2";

const Comments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const { data } = useDataFetching2(url);
  console.log("comment data", data);

  return (
    <>
      <h1> Comments</h1>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {" "}
        Comments
      </Typography>
      <Container
        sx={{
          display: "flex",
          m: "1",
          p: "1",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Comment commentData={data} />
      </Container>
    </>
  );
};

export default Comments;
