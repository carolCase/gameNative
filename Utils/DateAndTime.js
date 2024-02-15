import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

const DateAndTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(null);

  const fetchCurrentDateTime = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/currentDateTime"
      );
      setCurrentDateTime(response.data.currentDateTime);
    } catch (error) {
      console.error("Error fetching current date and time:", error);
    }
  };

  useEffect(() => {
    fetchCurrentDateTime();
  }, []);

  return (
    <View style={{ backgroundColor: "navy", width: 200, height: 50 }}>
      <Text style={{ fontSize: 18, color: "white" }}>
        {currentDateTime
          ? currentDateTime.toString()
          : "Loading date and time ....."}
      </Text>
    </View>
  );
};

export default DateAndTime;

const styles = StyleSheet.create({});
