import React, { useState, useEffect } from "react";
import DateAndTime from "../Utils/DateAndTime";
import UsersScores from "../Utils/UserScores";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const options = [
  { id: 0, name: "rock", emoji: "🪨", beats: [2] },
  { id: 1, name: "paper", emoji: " 🧻", beats: [0] },
  { id: 2, name: "scissors", emoji: "✂️", beats: [1] },
];

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [result, setResult] = useState(null);
  const randomChoice = () => {
    return Math.floor(Math.random() * options.length);
  };
  const getResult = () => {
    if (userChoice === computerChoice) {
      return "It's a Tie";
    }
    if (options[userChoice].beats.includes(computerChoice)) {
      return "You win!";
    }
    return "Scotland wins!";
  };

  useEffect(() => {
    if (userChoice !== null && computerChoice !== null) {
      setUserMessage(
        <Text style={styles.displayText}>
          Your choice {options[userChoice]?.emoji} wallace choice
          {options[computerChoice]?.emoji} ......
          {getResult()}
        </Text>
      );
    }
  }, [userChoice, computerChoice]);

  const handlePlay = (userChoice) => {
    setUserChoice(userChoice);
    const computerChoice = randomChoice();

    setTimeout(() => {
      setComputerChoice(computerChoice);
      setResult(getResult());
    }, 1000);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <DateAndTime />
        <Image
          source={require("./../assets/Images/wallace.png")}
          style={{ height: 300, width: 300 }}
        />
        <View />

        <Text style={styles.title}>Choose your weapon!</Text>
        <View style={styles.row}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.buttonStyle}
              onPress={() => handlePlay(option.id)}
            >
              <Text style={styles.buttonText}>
                {option.emoji.charAt(0).toUpperCase() + option.emoji.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.results}>{userMessage}</Text>

        <View>
          <UsersScores />
        </View>
      </View>
    </ScrollView>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "navy",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    marginBottom: 20,
    fontFamily: "sans-serif",
    color: "white",
  },
  buttonStyle: {
    backgroundColor: "black",
    padding: 40,
    margin: 10,
    borderRadius: 25,
    width: 100,
    height: 50,
  },
  buttonText: {
    fontSize: 15,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  displayText: {
    fontSize: 25,
    color: "white",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  results: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },
});
