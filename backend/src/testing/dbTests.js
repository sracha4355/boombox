import {Album} from "../models/album.js"
import {Review} from "../models/review.js"
import {Track} from  '../models/track.js'
import mongoose from 'mongoose'
import { MongoMemoryServer } from "mongodb-memory-server"
import {envConfig} from '../utility/envpath.js'


const testCreateReview = () => {
    const review = new Review({
        user: "Tester",
        text: "Test Review",
        likes: 0,
        rating: 4.5
    });
    review.save((err) => {
        if(err){
            console.log(`ERROR: ${err}`);
        } else{
            console.log('review saved successfully')
            closeConnection();
        }
    });
}
const testCreateAlbum = async () => {
    try {
      // create a new track document
      const track1 = new Track({
        single: true,
        name: "Butterfly effect"
      });
      
      // save the track to the database
      await track1.save();
  
      // create a new album document with a reference to the track
      const album = new Album({
        artist: "Tester Scott",
        name: "Tesido",
        rating: 0,
        releaseDate: new Date('2000-12-12'),
        tracklist: [track1._id]
      });
  
      // save the album to the database
      await album.save();
  
      console.log('Album and track saved successfully');
    } catch (err) {
      console.error(`ERROR: ${err}`);
    } finally {
      closeConnection();
    }
  };
  
const testCreateTrack = () => {
    
    const track1 = new Track({
        single: true,
        name: "test track1"
    });
    track1.save((err) =>  {
        if(err){
            console.log(`ERROR ${err}`)
        } else{
            console.log('track saved succesfully')
        }
    })
};

const dbConnect = async () => {
    envConfig();
  
    const conn_str = `mongodb+srv://srach:${process.env.DB_PASS}@boombox.bdolfkx.mongodb.net/?retryWrites=true&w=majority`;
  
    return new Promise((resolve, reject) => {
      mongoose.connect(conn_str, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Connection successful');
          resolve();
        }
      });
    });
  }
  

const closeConnection = async () => {mongoose.connection.close()};

(async () => {
    await dbConnect();
    console.log('Sending test album to database');
    await testCreateAlbum();
})();
  
