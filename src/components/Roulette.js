import React, { Component } from 'react';
import firebase from 'firebase';
import SongList from './SongList.js';
import Spinner from './Spinner.js';
import fetch from 'isomorphic-fetch';

/**
 * Main Container Component
 */
class Roulette extends Component {
   constructor (props) {
      super(props);
      this.state = {
         songs: []
      };
   }
   componentDidMount() {
      // Initialize Firebase
      var config = {
         apiKey: "AIzaSyAj9MioQvUE4x-VTVgtyz3LNhdOm_8oGf8",
         authDomain: "roulette-demo.firebaseapp.com",
         databaseURL: "https://roulette-demo.firebaseio.com",
         storageBucket: "roulette-demo.appspot.com",
         messagingSenderId: "422838685533"
      };
      firebase.initializeApp(config);

      // Get the songs
      firebase.database().ref('songs').on('value', (snapshot) => {
         this.setState({ songs: snapshot.val() || [] });
      });

      // Make a more traditional API request
      fetch("http://sample-env-1.m4x8k3smkn.us-west-2.elasticbeanstalk.com/songs").then(response => {
         return response.json();
      }).then(songs => {
         console.log(songs);
      });
   }
   handleAdd(song) {
      var songs = this.state.songs;
      // Make sure we don't already have it
      if(song && songs.indexOf(song) === -1) {
         songs.push(song);
         firebase.database().ref('songs').set(songs);
      }
   }
   handleRemove(song) {
      if(song) {
         var songs = this.state.songs;
         songs.splice(songs.indexOf(song), 1);
         firebase.database().ref('songs').set(songs);
      }
   }
   handleSpin() {
      // Get a random song
      var index = Math.floor(Math.random() * this.state.songs.length);
      this.setState({
         spinnerMessage: this.state.songs[index],
         urgency: 'success'
      });
   }
   render() {
      return (
         <div>
            <Spinner
               onSpin={() => this.handleSpin()}
               message={this.state.spinnerMessage}
               urgency={this.state.urgency}
            />

            <SongList
               songs={this.state.songs}
               onAdd={(song) => this.handleAdd(song)}
               onRemove={(song) => this.handleRemove(song)}
            />
         </div>
      );
   }
}

export default Roulette;
