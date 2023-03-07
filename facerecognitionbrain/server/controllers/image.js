
const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key 57acb7b0b1254329841d4acb48fd2846");

const handleApiCall = (req, res) => {
    console.log(req.body.input,'input')
    stub.PostModelOutputs(
        {
            model_id: 'face-detection', 
        inputs: [{data: {image: { url: req.body.input}}}]
    },
    metadata,
    (err, response) => {
        if (err) {
            console.log("Error: " + err);
            return;
        }

        if (response.status.code !== 10000) {
            console.log(response)
            console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
            return;
        }

        console.log("Predicted concepts, with confidence values:")
        for (const c of response.outputs[0].data.concepts) {
            console.log(c.name + ": " + c.value);
        }
        res.json(response)
    }
);
}


const handleImage = (db) => (req, res) => {
const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0].entries)
        })
    .catch(err => res.status(400).json('unable to get entries', err))
}
    
module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}