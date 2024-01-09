import { useState } from 'react';
import { SpriteSVG } from '../../../assets/images/SpriteSVG';
import ColorBtn from '../../ColorBtn/ColorBtn';
import ReviewsList from '../../ReviewsList/ReviewsList';
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
import Modal from '../../Modal/Modal';
import ContactForm from '../../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIsContactModalOpen } from '../../../redux/Global/selectors';
import { openContactModal } from '../../../redux/Global/globalSlice';

const NannyCard = ({ nanny }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const isModalOpen = useSelector(getIsContactModalOpen);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openContactModal());
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
            <ColorBtn onClick={openModal}>Make an appointment</ColorBtn>
            {isModalOpen && (
              <Modal>
                <ContactForm nanny={nanny} />
              </Modal>
            )}
          </>
        )}
      </InfoContainer>
    </ItemContainer>
  );
};

export default NannyCard;
