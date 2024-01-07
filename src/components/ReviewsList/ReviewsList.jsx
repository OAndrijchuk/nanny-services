import ReviewsItem from './ReviewsItem/ReviewsItem';
import { ReviewsListStyle } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ReviewsListStyle>
        {reviews.map(el => (
          <ReviewsItem key={el.reviewer} element={el} />
        ))}
      </ReviewsListStyle>
    </>
  );
};

export default ReviewsList;
