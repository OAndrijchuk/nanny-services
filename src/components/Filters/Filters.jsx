import Select from 'react-select';
import {
  FiltersContainer,
  FiltersTitle,
  SelectContainerStyle,
} from './Filters.styled';

const Filters = () => {
  const options = [
    { label: 'A to Z', value: 'A to Z' },
    { label: 'Z to A', value: 'Z to A' },
    { label: 'Less than 10$', value: 'Less than 10$' },
    { label: 'Greater than 10$', value: 'Greater than 10$' },
    { label: 'Popular', value: 'Popular' },
    { label: 'Not popular', value: 'Not popular' },
    { label: 'Show all', value: 'Show all' },
  ];

  return (
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>
      <SelectContainerStyle>
        <Select
          classNamePrefix="select-prefix"
          options={options}
          defaultValue={options[0]}
        />
      </SelectContainerStyle>
    </FiltersContainer>
  );
};

export default Filters;
