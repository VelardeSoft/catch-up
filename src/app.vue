<script>
import {NewsApiService} from "./news/services/news-api.service.js";

export default {
  name: 'App',
  data(){
    return {
      sidebarVisible: false,
      articles: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created(){
    //TODO: Fetch news articles for default source
  },
  methods: {
    // Build article list from response data
    buildArticleListFromResponseData(articles){
      return articles.map(article =>
          new Article(article.title,
              article.description,
              article.url,
              article.urlToImage,
              article.source));
    },
    // Fetch articles for selected source
    getArticlesForSource(sourceId){
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            let articles = response.data.articles;
            // 1:24:07
          })
    }
  }
}
</script>