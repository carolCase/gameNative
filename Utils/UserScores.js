import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import axios from "axios";

const UsersScores = () => {
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState("");
  const [allGameData, setAllGameData] = useState([]);
  const [loading, setLoading] = useState();

  const fetchAllGameData = () => {
    axios
      .get("http://localhost:3001/api/allGameData")
      .then((response) => {
        setAllGameData(response.data.scoreData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAllGameData();
  }, []);

  const handleSaveGameData = () => {
    setLoading(true);
    axios
      .post("http://localhost:3001/api/saveScoreData", {
        playerName,
        score,
      })
      .then((response) => {
        console.log("Game data saved successfully:", response.data);

        fetchAllGameData();
      })
      .catch((error) => {
        console.error("Error saving game data:", error);
        setLoading(false);
      });
  };
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text style={{ fontSize: 18, color: "white" }}>Enter player name</Text>
      <TextInput
        placeholder="Enter player Name"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <Text style={{ fontSize: 18, color: "white" }}>
        Enter Score: Win=1, Loose=2, Tie=0
      </Text>
      <TextInput
        placeholder="enter score"
        value={score}
        onChangeText={setScore}
        keyboardType="numeric"
      />

      <Button title="Save Game Score" onPress={handleSaveGameData} />
      <Text>Scores:</Text>
      {allGameData.map((data, index) => (
        <Text key={index}>{JSON.stringify(data)}</Text>
      ))}
    </View>
  );
};
export default UsersScores;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,

    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  gameDataText: {
    marginBottom: 5,
    fontSize: 14,
  },
});
