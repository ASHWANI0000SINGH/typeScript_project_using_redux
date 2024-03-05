import {
  Button,
  Card,
  CardActions,
  CardContent,
  // CardMedia,
  Typography,
} from "@mui/material";
interface commentInterface<T> {
  commentData?: T[];
}

const Comment = <T extends { name: string; email: string; body: string }>({
  commentData,
}: commentInterface<T>) => {
  console.log("comments data", commentData);
  return (
    <>
      {commentData?.map((item) => {
        return (
          <>
            <Card
              sx={{
                width: 245,
                height: 300,
                margin: "20px",
                backgroundColor: "rgba(10,100,150,0.8)",
                backdropFilter: "saturate(180%) blur(10px)",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="body2">
                  {item.email}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {item.body.slice(0, 100)}.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="success">
                  {" "}
                  View More{" "}
                </Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Comment;
