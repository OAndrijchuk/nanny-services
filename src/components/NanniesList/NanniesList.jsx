import NannyCard from './NannyCard/NannyCard';
import { NannyListStyle } from './NanniesList.styled';

const NanniesList = ({ nannies }) => {
  return (
    <NannyListStyle>
      {nannies.map(item => (
        <NannyCard key={item.name} nanny={item} />
      ))}
    </NannyListStyle>
  );
};

export default NanniesList;
