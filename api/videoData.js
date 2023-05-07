// import { clientCredentials } from '../utils/client';

const ytUrl = 'https://youtube-v38.p.rapidapi.com';
const dbUrl = 'https://team-851f6-default-rtdb.firebaseio.com';
const ytKey = '002e453a12msh205b18e5b7d5130p12e7ccjsna82a1fd9b063'; // Michaels



const getAllVideos = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleVideo = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getYTVideos = (query) => new Promise((resolve, reject) => {
  fetch(`${ytUrl}/search/?q=${query}&hl=en&gl=US`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': ytKey,
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleYTVideo = (videoId) => new Promise((resolve, reject) => {
  fetch(`${ytUrl}/video/details/?id=${videoId}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': ytKey,
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getUserVideos = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const uploadNewVideo = (payload) => new Promise((resolve, reject) => {
  fetch('https://team-851f6-default-rtdb.firebaseio.com/videos.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVideo = (payload) => new Promise((resolve, reject) => {
  fetch(`https://team-851f6-default-rtdb.firebaseio.com/videos/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteVideo = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllVideos,
  getSingleVideo,
  getUserVideos,
  uploadNewVideo,
  updateVideo,
  deleteVideo,
  getYTVideos,
  getSingleYTVideo,
};
