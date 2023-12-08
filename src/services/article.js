import axios from './api'

const ArticleServie = {
    async getArticle() {
        const {data} = await axios.get('/articles')
        return data
    }
}

export default ArticleServie