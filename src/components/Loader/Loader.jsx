import { ThreeDots } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <Overlay>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#F03F3B"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Overlay>,
    modalRoot
  );
};

export default Loader;
