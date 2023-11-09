import Footer from '../components/Footer.js';
import Nav from '../components/Nav.js';
import Header from '../components/Header.js';

function Article() {
    
    const articles = [
        {
          title: "Article 1",
          price: 10,
          isPublished: true,
        },
    
        {
          title: "Article 2",
          price: 20,
          isPublished: false,
        },
    
        {
          title: "Article 3",
          price: 30,
          isPublished: true,
        },
    
        {
          title: "Article 4",
          price: 40,
          isPublished: false,
        },
    
        {
          title: "Article 5",
          price: 50,
          isPublished: true,
        },
    
        {
          title: "Article 6",
          price: 60,
          isPublished: false,
        },
    
        {
          title: "Article 7",
          price: 70,
          isPublished: true,
        },
    
        {
          title: "Article 8",
          price: 80,
          isPublished: false,
        },
    
        {
          title: "Article 9",
          price: 90,
          isPublished: true,
        },
    
        {
          title: "Article 10",
          price: 100,
          isPublished: false,
        },
      ];



    return (
      <>
        <Header />
        <Nav />
          <main>
            {articles.map((product) => {
              return (
                <article>
                  <h2>{product.title}</h2>
                  <p>{product.price} e</p>
                </article>
              );
            })}
          </main>
        <Footer />
      </>
    )
  }

  export default Article;