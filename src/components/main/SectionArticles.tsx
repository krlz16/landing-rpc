import articles from '../../config/articles.json';

function SectionArticles({ section }: { section: 'section1' | 'section2'}) {
  let articlesFiltered:any = [];
  if (section === 'section1') articlesFiltered = articles.slice(0, 3);
  if (section === 'section2') articlesFiltered = articles.slice(3, 6);
  return (
    <section className={`content-article ${section}`}>
      {
        articlesFiltered.map((article:any, index:number) => (
          <article className="article-item" key={index}>
            <div className="item-head">
              <h3 className={`title text-black ${article.bg_color}`}>{ article.title }</h3>
              <span className={`badge text-black ${article.bg_color}`}>{ index + 1 }.</span>
            </div>
            <p className="info">{ article.description }</p>
          </article>
        ))
      }
    </section>
  )
}

export default SectionArticles
