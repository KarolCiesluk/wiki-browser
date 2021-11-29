import { useParams } from "react-router-dom";

const Article = () => {
  const { articleID } = useParams();

  return (
    <div>
      {`Article no. ${articleID}`}
    </div>
  );
};

export default Article;