import fetch from "node-fetch";

const PAT = '6aaf797f4da0494cbc48e131649e5fc8';
const MODEL_ID = 'face-detection';

const handleApiCall = (req, res) => {
    //let IMAGE_URL = req.body.input;

    const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: req.body.raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('Unable to work with API.'))
}

const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0].entries);
    })
    .catch(err => res.status(400).json('unable to get entries'))
}

// module.exports = {
//     handleImage,
//     handleApiCall
// }

export default { handleImage, handleApiCall } ;