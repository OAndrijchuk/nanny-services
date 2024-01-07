import { SpriteSVG } from '../../../assets/images/SpriteSVG';
import {
  Avatar,
  CommentText,
  CommentTitle,
  ReviewerInfoContainer,
  ReviewerName,
  ReviewerRating,
} from './ReviewsItem.styled';

const ReviewsItem = ({ element }) => {
  const { reviewer, rating, comment } = element;
  return (
    <li>
      <ReviewerInfoContainer>
        <Avatar>{reviewer[0].toUpperCase()}</Avatar>
        <CommentTitle>
          <ReviewerName>{reviewer}</ReviewerName>
          <ReviewerRating>
            <SpriteSVG name="star" />
            {rating}
          </ReviewerRating>
        </CommentTitle>
      </ReviewerInfoContainer>
      <CommentText>{comment}</CommentText>
    </li>
  );
};

export default ReviewsItem;
