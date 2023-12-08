import { useParams } from "react-router-dom"

const ArticleDetail = () => {
  const id = useParams()
  return <div>id: {id}</div>
}

export default ArticleDetail