import { useEffect, useState } from "react";
export type PostType = {
  userId: number;
  id: number;
  name: string;
  title: string;
  body: string;
};

const useDataFetching = (url: string) => {
  const [data, setData] = useState<PostType[]>([]);

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

export default useDataFetching;
