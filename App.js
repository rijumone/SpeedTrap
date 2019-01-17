import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  state = {
    location: null,
    ts: null,
  };
componentDidMount() {
  this.interval = setInterval(() => this.findCoordinates(), 250);
}
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position, null, 2);
        
        const old_lat = this.lat
        this.lat = position.coords.latitude;
        const lat = this.lat
        
        const old_lng = this.lng
        this.lng = position.coords.longitude;
        const lng = this.lng
        
        const old_ts = this.ts
        this.ts = position.timestamp;
        const ts = this.ts

        dist = this.distance(lat, lng, old_lat, old_lng,'K')
        speed = dist / ((250*1000)/(60*60))
        this.setState({ location, lat, lng, ts, old_ts, old_lat, old_lng, dist, speed});
      },
      error => {
        const err = error.message;
        this.setState({ err });
        // Alert.alert(error.message);
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  };
 distance = (lat1, lon1, lat2, lon2, unit) => {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist;
  }
}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text style={styles.smalltext}>Location: {this.state.location}</Text>
          <Text style={styles.text}>Latitude: {JSON.stringify(this.state.lat)}</Text>
          <Text style={styles.text}>Prev. Latitude: {JSON.stringify(this.state.old_lat)}</Text>
          <Text style={styles.text}>Longitude: {JSON.stringify(this.state.lng)}</Text>
          <Text style={styles.text}>Prev. Longitude: {JSON.stringify(this.state.old_lng)}</Text>
          <Text style={styles.text}>Dist convered b/w rdngs: {this.state.dist}</Text>
          <Text style={styles.text}>Current speed: {this.state.speed}</Text>
          <Text style={styles.text}>Timestamp: {JSON.stringify(this.state.ts)}</Text>
          <Text style={styles.text}>Prev. Timestamp: {JSON.stringify(this.state.old_ts)}</Text>
          <Text style={styles.welcome}>Err: {this.state.err}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  },
  smalltext: {
    fontSize: 15,
    color: "white"
  },
  text: {
    fontSize: 35,
    color: "white"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    color: "white"
  }
});