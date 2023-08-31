import React from "react";
import { ReviewTypeList } from "types";

type ReviewDetailCrumbType = {
  review: ReviewTypeList;
};


const ReviewDetailcrumb = ({ review }: ReviewDetailCrumbType) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <a href="/">
              <i className="icon-home"></i>
            </a>
          </li>
          <li>
            <a href="/reviews">All Reviews</a>
          </li>
          <li>
            <a>{review.title}</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ReviewDetailcrumb;