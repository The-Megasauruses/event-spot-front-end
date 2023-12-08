import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { usePathname } from 'expo-router'; 
import mockData from '../../mockData.json';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const path = usePathname()  

  return (
    <Searchbar
    placeholder="Search"
    onChangeText={onChangeSearch}
    value={searchQuery}
  />
  )
}

export default Search