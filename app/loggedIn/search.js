import React, { useState, useEffect } from "react";
import { db } from "../../config";
import { debounce } from "lodash";
import { FlatList, Image, View } from "react-native";
import { query, collection, where, limit, getDocs } from "firebase/firestore";
import {
  Searchbar,
  Card,
  Title,
  Paragraph,
  Button,
  DataTable,
  ActivityIndicator,
} from "react-native-paper";
import { Event, User } from "../store/fireStoreClassModel";
import { getAuth } from "firebase/auth";


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const filterData = async () => {
    try {
      setLoading(true);

      const events = [];
      console.log("this is in the search useEffect:", searchQuery);

      const queryRef = query(
        collection(db, "events"),
        where("title", ">=", searchQuery),
        limit(20)
      );

      const querySnapshot = await getDocs(queryRef);

      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        events.push(eventData);
      });

      setFilteredData(events);
    } catch (error) {
      console.error("Error searching events:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFilterData = debounce(filterData, 300);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const auth = getAuth();
        console.log(auth.currentUser.uid)
        const q = query(collection(db, "users"), where("userid", "==", auth.currentUser.uid))
        console.log('q', q)
        const snapshot = await getDocs(q)
        snapshot.forEach(value => {
          console.log('value inside search', value.id)
          const newUser = {
            id: value.id,
            events: value.data().events,
            userId: value.data().userid
          }
          console.log('newUser', newUser)
          setUser(newUser)
        })
      } catch(error){
        console.log(error)
      }
    }
    fetchUser();
  }, [])

  useEffect(() => {

    debouncedFilterData();
  }, [searchQuery]);
  const from = page * numberOfItemsPerPage + 1;
  const to = (page + 1) * numberOfItemsPerPage;
  const displayedItems = filteredData.slice(from - 1, to);

  return (
    <>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: "10%" }}
          animating={true}
          color="#000"
        />
      ) : (
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={displayedItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.spacing}>{item.title}</Title>
                  <Image source={{ uri: item.imgPath }} style={styles.image} />
                  <Paragraph style={styles.spacing}>
                    {item.happening_at}
                  </Paragraph>
                  <Paragraph style={styles.spacing}>{item.location}</Paragraph>
                  <Paragraph style={styles.spacing}>
                    {item.description}
                  </Paragraph>
                  <Button
                    mode="contained"
                    style={{ width: "40%" }}
                    onPress={() =>
                      User.addEventToUser(user.id, item)
                    }
                  >
                    join
                  </Button>
                </Card.Content>
              </Card>
            )}
          />
          {/* <DataTable style={{marginRight: '10%'}}>
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(
                filteredData.length / numberOfItemsPerPage
              )}
              onPageChange={(page) => setPage(page)}
              label={`${from}-${to} of ${filteredData.length}`}
              showFastPaginationControls
              numberOfItemsPerPageList={[10, 20, 30]}
              numberOfItemsPerPage={numberOfItemsPerPage}
              onItemsPerPageChange={(itemsPerPage) =>
                setNumberOfItemsPerPage(itemsPerPage)
              }
              selectPageDropdownLabel={"Rows per page"}
            />
          </DataTable> */}
        </View>
      )}
    </>
  );
};

const styles = {
  search: {
    width: "80%",
    marginTop: "5%",
    marginLeft: "10%",
  },
  container: {
    marginVertical: "5%",
    alignItems: "center",
  },
  list:
    Platform.OS === "ios"
      ? {
        height: "80%",
        width: "80%",
        borderRadius: 20,
      }
      : {
        height: "80%",
        width: "80%",
      },

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
    marginBottom: "3%",
    textAlign: "center",
  },
  spacing: {
    marginBottom: "3%",
  },
  image: {
    width: "60%",
    height: 60,
    resizeMode: "cover",
    marginBottom: "3%",
  },
  button:
    Platform.OS === "ios"
      ? {
        backgroundColor: "#663399",
        borderRadius: "30%",
        padding: 10,
        marginTop: "4%",
      }
      : {
        backgroundColor: "#663399",
        padding: 10,
        marginTop: "4%",
      },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
};

export default Search;
