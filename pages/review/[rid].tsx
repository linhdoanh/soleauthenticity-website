import { useState, useEffect } from "react";
import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import Description from "../../components/review-single/description";
import Element from "../../components/review-single/element";
// import BLOCKQUOTE from "../components/block-quotes/Blockquote";
import PostHeader from "../../components/post-header/PostHeader";
import Image from "next/image";
// import { posts as data } from "../utils/data/post";
// import dayjs from "dayjs";
import { useRouter } from "next/router";
// types
import { ReviewTypeList } from "types";
import ReviewDetailcrumb from 'components/reviewdetailcrumb/index';
import ReviewsFeatured from "components/reviews-featured";
// import { GetServerSideProps } from "next";

export default function ReadingPage() {
  const [showBlock, setShowBlock] = useState("description");

  const [data, setData] = useState<ReviewTypeList>();
  const [datas, setDatas] = useState<ReviewTypeList[]>();
  console.log(datas);

  const [isRender, setIsRender] = useState<boolean>(false);
  const router = useRouter();
  const { rid } = router.query;

  useEffect(() => {
    if (router.asPath !== router.route) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://soleauthenticity.azurewebsites.net/api/reviews/review/${rid}`
          );
          const data = await res.json();
          console.log(data.data);
  
          setData(data.data);
  
          const resFull = await fetch(
            "https://soleauthenticity.azurewebsites.net/api/reviews?page=1&pageSize=10"
          );
          const dataFull = await resFull.json();
  
          setDatas(dataFull.data);
          setIsRender(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
    

  }, [router.asPath, router.route]);
  console.log(datas);
  
  console.log(isRender);
  
  return (
    <Layout>
      
      {data ? (
        <>
          <ReviewDetailcrumb review={data} />

          <section className="product-single" style={{
            marginBottom: "50px"
          }}>
            <div className="container">
              <PostHeader
                title={data?.title}
                tag="REVIEW"
                authorName={data?.authorName}
              />

              {data ? (
                <div className="my-10 mx-auto" 
                     style={{ 
                      textAlign: "center", 
                      marginBottom: "100px" 
                    }}>
                  <Image
                    height="350"
                    width="700"
                    src={`${data?.avatar}`}
                    alt={data?.title}
                    className="mx-auto h-[72%] w-[1424px]"
                  />
                </div>
              ) : (
                <></>
              )}

              {/* <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                  {data?.elements}
                </p>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {data?.description.substring(0, 150)}
                </p>

                <div className="py-3.5 text-left font-normal rounded-bl-[10px] rounded-br-[10px] bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]">
                  <img
                    height="324px"
                    width="1424px"
                    className="cover"
                    alt="Alt for images"
                    src="https://source.unsplash.com/random/100x100"
                  />
                  <p className="text-xs leading-normal text-center uppercase">
                    Image caption or credit
                  </p>
                </div>

                <p className="font-light text-gray-500 dark:text-gray-400">
                  {data?.description.substring(151)}
                </p>
              </div> */}

              <div className="product-single__info">
                <div className="product-single__info-btns">
                  <button
                    type="button"
                    onClick={() => setShowBlock("description")}
                    className={`btn btn--rounded ${
                      showBlock === "description" ? "btn--active" : ""
                    }`}
                  >
                    Description
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBlock("element")}
                    className={`btn btn--rounded ${
                      showBlock === "element" ? "btn--active" : ""
                    }`}
                  >
                    Element
                  </button>
                </div>
                
                <Description review={data} show={showBlock === "description"} />
                <Element review={data} show={showBlock === "element"} />
              </div>
            </div>
          </section>

          <div className="product-single-page">
            <ReviewsFeatured />
          </div>
        </>
      ) : null}
      <Footer />
    </Layout>
  );
};

ReadingPage.defaultProps = {};

// interface ReadingPageProps {
//   elements: string;
//   tag: string;
//   title: string;
//   description: string;
//   avatar: string;
//   authorName: string;
//   category: "Review";
//   productId: number;
// }
