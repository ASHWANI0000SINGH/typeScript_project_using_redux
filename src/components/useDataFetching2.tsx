import { useEffect, useState } from "react";
export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const useDataFetching2 = (url: string) => {
  const [data, setData] = useState<CommentType[]>([]);

  useEffect(() => {
    async function getPostsData(url: string): Promise<void> {
      const result = await fetch(url);
      const data = await result.json();
      setData(data);
    }
    getPostsData(url);
  }, [url]);

  return { data };
};

export default useDataFetching2;
