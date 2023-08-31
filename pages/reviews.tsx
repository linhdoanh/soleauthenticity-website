import Pagination from "../components/pagination-preview/Pagination";
import Post from "../components/post/Post";
import Newsletter from "../components/previews-letter/Newsletter";
// import dayjs from "dayjs";
import Footer from "components/footer";
import Layout from "../layouts/Main";
import Reviewcrumb from 'components/reviewcrumb/index';


import { useEffect, useState } from "react";

// sm: md: lg: xl: 2xl:
/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }

*/

interface previewPageProps {
  elements: string;
  date: Date;
  tag: string;
  title: string;
  description: string;
  avatar: string;
  author: string;
  category: "Review";
  productId: number;
}

export default function Previews() {
  const [data, setData] = useState<previewPageProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://soleauthenticity.azurewebsites.net/api/reviews?page=1&pageSize=10"
      );
      const data = await res.json();
      console.log(data.data);
      setData(data.data);
    };
    fetchData();
  }, []);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <Layout>
      <Reviewcrumb />
      <div className="review-page">
        <main style={{marginTop: '50px'}}>
          <p
            style={{
              fontWeight: "bold",
              paddingBottom: "30px",
              fontSize: "40px",
              color: "orange",
              textAlign: 'center'
            }}
          >
            All previews
          </p>

          <section className="products-page">
            <div className="container">
              <section className="products-content">
                <section className="products-list">
                  {data?.map((review) => {
                    {
                      date;
                    }

                    return (
                      <Post
                        key={review.productId}
                        productId={review.productId}
                        tag="REVIEW"
                        elements={review.elements}
                        title={review.title}
                        description={review.description}
                        avatar={review.avatar}
                        authorName={review.author}
                      />
                    );
                  })}
                </section>
              </section>
            </div>
          </section>

          <Pagination />
          <div className="newsletter-review">
            <Newsletter />
          </div>
          <Footer />
        </main>
      </div>
    </Layout>
  );
}
