import React, { useState, useEffect } from "react";
import { Searchbar, Card, Title, Paragraph, Button, DataTable } from "react-native-paper";
import { FlatList, Image } from "react-native";
import mockData from "../../mockData.json";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(10); // Corrected the function name
  const [filteredData, setFilteredData] = useState([]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const filterData = () => {
      const filtered = mockData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    };

    filterData();
  }, [searchQuery]);

  const from = page * numberOfItemsPerPage + 1;
  const to = (page + 1) * numberOfItemsPerPage;
  const displayedItems = filteredData.slice(from - 1, to);

  return (
    <>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <FlatList
      style={styles.list}
      data={displayedItems}
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
        label={`${from}-${to} of ${filteredData.length}`}
        showFastPaginationControls
        numberOfItemsPerPageList={[10, 20, 30]}
        numberOfItemsPerPage={numberOfItemsPerPage}
        onItemsPerPageChange={(itemsPerPage) => setNumberOfItemsPerPage(itemsPerPage)}
        selectPageDropdownLabel={"Rows per page"}
      />
    </DataTable>
  </>
  );
};

const styles = {
  container: {
    marginVertical: "5%", 
    alignItems: "center",
  },
  list: Platform.OS === "ios" ?
  {
    height: '80%',
    width: "80%",
    borderRadius: 20,
  } : {
    height: '80%',
    width: "80%",
  } ,

  card: {
    backgroundColor: "#add8e6",
    marginVertical: 5,
  },
  title: {
    color: "#663399",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Arial-BoldMT" : "Roboto",
    textDecorationLine: "underline",
    textDecorationColor: "#663399",
    textDecorationStyle: "double",
    marginBottom: '3%',
    textAlign: "center",
  },
  spacing: {
    marginBottom: '3%',
  },
  image: {
    width: '60%',
    height: 60,
    resizeMode: "cover",
    marginBottom: '3%',
  },
  button:  Platform.OS === "ios" ? {
    backgroundColor: "#663399",
    borderRadius: '30%',
    padding: 10,
    marginTop: '4%',
  } : {
    backgroundColor: "#663399",
    padding: 10,
    marginTop: '4%',
  } ,
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
};

export default Search;
