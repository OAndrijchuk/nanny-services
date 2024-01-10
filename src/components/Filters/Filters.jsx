import Select from 'react-select';
import {
  FiltersContainer,
  FiltersTitle,
  SelectContainerStyle,
} from './Filters.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterNannies } from '../../redux/Global/globalSlice';

const options = [
  { label: 'A to Z', value: 'A to Z' },
  { label: 'Z to A', value: 'Z to A' },
  { label: 'Less than 10$', value: 'Less than 10$' },
  { label: 'Greater than 10$', value: 'Greater than 10$' },
  { label: 'Popular', value: 'Popular' },
  { label: 'Not popular', value: 'Not popular' },
  { label: 'Show all', value: 'Show all' },
];

const Filters = ({ arr }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    filtered(options[0]);
  }, [options]);

  const filtered = ({ value }) => {
    const a = JSON.parse(JSON.stringify(arr));

    switch (value) {
      case 'A to Z':
        return aSort(a);
      case 'Z to A':
        return zSort(a);
      case 'Less than 10$':
        return less10(a);
      case 'Greater than 10$':
        return greater10(a);
      case 'Popular':
        return popular(a);
      case 'Not popular':
        return notPopular(a);
      default:
        return dispatch(setFilterNannies(arr));
    }
  };

  function aSort(ar) {
    ar.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    dispatch(setFilterNannies(ar));
  }
  function popular(ar) {
    ar.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    dispatch(setFilterNannies(ar));
  }
  function notPopular(ar) {
    ar.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    dispatch(setFilterNannies(ar));
  }
  function zSort(ar) {
    ar.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1));
    dispatch(setFilterNannies(ar));
  }
  function less10(ar) {
    const a = ar.filter(el => el.price_per_hour < 10);
    dispatch(setFilterNannies(a));
  }
  function greater10(ar) {
    const a = ar.filter(el => el.price_per_hour > 10);
    dispatch(setFilterNannies(a));
  }

  return (
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>
      <SelectContainerStyle>
        <Select
          classNamePrefix="select-prefix"
          options={options}
          defaultValue={options[0]}
          onChange={filtered}
        />
      </SelectContainerStyle>
    </FiltersContainer>
  );
};

export default Filters;
