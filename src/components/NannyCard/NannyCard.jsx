import { useState } from 'react';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import ColorBtn from '../ColorBtn/ColorBtn';
import ReviewsList from '../ReviewsList/ReviewsList';
import {
  FavoriteButton,
  InfoContainer,
  InfoHead,
  ItemContainer,
  NannyName,
  NannyParamsList,
  Photo,
  PhotoContainer,
  Price,
  ReadMoreButton,
} from './NannyCard.styled';

const NannyCard = () => {
  const [isReadMore, setIsReadMore] = useState(true);

  const nanny = {
    name: 'Anna Shevchenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/23.jpg',
    birthday: '1996-04-10T22:25:57.010+00:00',
    experience: '5 years',
    reviews: [
      {
        reviewer: 'Olga K.',
        rating: 5,
        comment:
          'Anna is wonderful! My kids loved her and she was always punctual.',
      },
      {
        reviewer: 'Petr S.',
        rating: 4,
        comment:
          "She's great, but sometimes she had to reschedule on short notice.",
      },
    ],
    education: "Bachelor's in Early Childhood Education, First Aid Certified",
    kids_age: '1 to 6 years old',
    price_per_hour: 15,
    location: 'Kyiv, Ukraine',
    about:
      'I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.',
    characters: ['patient', 'energetic', 'creative', 'punctual'],
    rating: 4.5,
  };
  const date = new Date(nanny.birthday);
  const now = new Date();
  const yearsOld = now.getFullYear() - date.getFullYear();

  const some = nanny.characters
    .map(el => {
      const one = el.split('');
      one.splice(0, 1, one[0].toUpperCase());
      return one.join('');
    })
    .join(', ');

  return (
    <ItemContainer>
      <PhotoContainer>
        <Photo src={nanny.avatar_url} alt={nanny.name} />
      </PhotoContainer>
      <InfoContainer>
        <InfoHead>
          <p>Nanny</p>
          <ul>
            <li>
              <SpriteSVG name="map-pin" />
              <p>{nanny.location}</p>
            </li>
            <li>
              <SpriteSVG name="star" />
              <p>Rating: {nanny.rating}</p>
            </li>
            <li>
              <span>
                Price / 1 hour: <Price>{nanny.price_per_hour}$</Price>
              </span>
            </li>
          </ul>
          <FavoriteButton type="button">
            <SpriteSVG name="heart" />
          </FavoriteButton>
        </InfoHead>
        <NannyName>{nanny.name}</NannyName>
        <NannyParamsList>
          <li>
            Age:&nbsp;
            <span>{yearsOld}</span>
          </li>
          <li>
            Experience:&nbsp;
            <span>{nanny.experience}</span>
          </li>
          <li>
            Kids Age:&nbsp;
            <span>{nanny.kids_age}</span>
          </li>
          <li>
            Characters:&nbsp;
            <span>{some}</span>
          </li>
          <li>
            Education:&nbsp;
            <span>{nanny.education}</span>
          </li>
        </NannyParamsList>
        <p>{nanny.about}</p>
        {isReadMore && (
          <ReadMoreButton
            type="button"
            onClick={() => setIsReadMore(prev => !prev)}
          >
            Read more
          </ReadMoreButton>
        )}
        {!isReadMore && (
          <>
            <ReviewsList reviews={nanny.reviews} />
            <ColorBtn>Make an appointment</ColorBtn>
          </>
        )}
      </InfoContainer>
    </ItemContainer>
  );
};

export default NannyCard;
