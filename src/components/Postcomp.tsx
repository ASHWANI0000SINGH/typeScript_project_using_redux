import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PostcompType<T> {
  postdata?: T[];
}

const Postcomp = <
  T extends { id: number; userId: number; title: string; body: string }
>({
  postdata,
}: PostcompType<T>) => {
  console.log("postdata", postdata);
  const navigate = useNavigate();
  const goToPostDetails = (id: number) => {
    navigate(`/postDetail/${id}`);

    console.log(id);
  };
  return (
    <>
      {postdata?.map((item) => (
        <div key={item.id} className="post">
          <span>{item.userId}</span>
          <div className="title">title: {item.title}</div>
          <div className="body">{item.body.slice(0, 50)}...</div>
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
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() => goToPostDetails(item.id)}
            >
              {" "}
              View More
            </button>
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
      ))}
    </>
  );
};

export default Postcomp;
