import NannyCard from './NannyCard/NannyCard';
import { ColorButton, NannyListStyle } from './NanniesList.styled';
import { useEffect, useState } from 'react';

const NanniesList = ({ nannies = [] }) => {
  const count = 3;
  const totalPages = Math.ceil(nannies.length / count);
  const [page, setPage] = useState(1);
  const [nanniesPagination, setNanniesPagination] = useState([]);

  useEffect(() => {
    setNanniesPagination(nannies.slice(0, count * 1));
    setPage(1);
  }, [nannies]);

  useEffect(() => {
    setNanniesPagination(prev => [
      ...prev,
      ...nannies.slice(prev.length, count * page),
    ]);
  }, [page]);

  return (
    <>
      {
        <>
          <NannyListStyle>
            {nanniesPagination.length ? (
              nanniesPagination.map(item => (
                <NannyCard key={item.name} nanny={item} />
              ))
            ) : (
              <h2>Nothing was found for your request.</h2>
            )}
          </NannyListStyle>

          {page !== totalPages && nannies.length ? (
            <ColorButton
              onClick={() =>
                setPage(prev => (prev === totalPages ? prev : prev + 1))
              }
            >
              Load more
            </ColorButton>
          ) : null}
        </>
      }
    </>
  );
};

export default NanniesList;
