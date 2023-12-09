import React, { useState, useEffect } from "react";
import { Searchbar, Card, Title, Paragraph, Button, DataTable } from "react-native-paper";
import { FlatList, Image } from "react-native";
import { usePathname } from "expo-router";
import mockData from "../../mockData.json";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(10);  npm 
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
  
    const filterData = () => {
      const filtered = mockData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    };

    
    filterData();
  }, [searchQuery]);

  on

  return (
    <>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <FlatList
      style={styles.list}
      data={filteredData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.spacing}>{item.title}</Title>
            <Image source={{ uri: item.imgPath }} style={styles.image} />
            <Paragraph style={styles.spacing}>{item.date}</Paragraph>
            <Paragraph style={styles.spacing}>{item.location}</Paragraph>
            <Paragraph style={styles.spacing}>{item.description}</Paragraph>
            <Button
              mode="contained"
              style={{ width: "40%" }}
              onPress={() =>
                console.log("This button should add this to my events")
              }
            >
              join
            </Button>
          </Card.Content>
        </Card>
      )}
    />
    <DataTable>
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(filteredData.length / numberOfItemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${filteredData.length}`}
        showFastPaginationControls
        numberOfItemsPerPageList={[10, 20, 30]} // Example values, update as needed
        numberOfItemsPerPage={numberOfItemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        selectPageDropdownLabel={"Rows per page"}
      />
    </DataTable>
  </>
  );
};

export default Search;
