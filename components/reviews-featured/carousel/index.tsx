import ReviewItem from 'components/review-item/index'
import { ReviewTypeList } from 'types';

import { Swiper, SwiperSlide } from 'swiper/react';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type ReviewCarouselType = {
    reviewcas: ReviewTypeList[]
}

const ReviewCarousel = ({ reviewcas }: ReviewCarouselType) => {

  if (!reviewcas) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper 
      spaceBetween={spaceBetween} 
      loop={true} 
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-wrapper">
        {reviewcas.map(item => (
          <SwiperSlide key={item.productId}>
            <ReviewItem
              productId={item.productId} 
              avatar={item.avatar}
              title={item.title}
              types="Review"
              description={item.description} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewCarousel