/* First Objective to program the posts module
 * where the app can create review posts pertaining to albums/songs
 * For this we need album/song info
 * This module needs to provide methods to fetch needed info */

import axios from 'axios';
import {envConfig} from '../utility/envpath.js'

envConfig()

const api_key = process.env.API_KEY
const api_url = 'http://ws.audioscrobbler.com/2.0/?'
const headers = { 'user-agent': process.env.USER_AGENT };


// retrieves info about an album based on name and artist
const getAlbumInfo = async (artist, album) => {
	return new Promise( (resolve, reject) => {
		const url = api_url+ `method=album.getinfo&api_key=${api_key}&artist=${artist}&album=${album}&format=json`
		axios.get(url, headers)
		.then( res => {
			let data = res.data
			delete data.album.wiki
			resolve(data)

		}).catch( res => {
			reject(res)
		});		
	});
}

let data;
await getAlbumInfo("Drake", "views")
	.then(
		res => {
			console.log(res)
		}
	).catch(
		res => {
			console.log(res)
		}
	);


