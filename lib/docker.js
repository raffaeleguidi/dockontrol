var Docker = require('dockerode');
var DockerEvents = require('docker-events');

var docker = new Docker(); //defaults to above if env

/*
docker.listContainers(function (err, containers) {
    containers.forEach(function (containerInfo) {
        console.log(containerInfo);
    });
});

docker.listImages(function (err, images) {
    images.forEach(function (imageInfo) {
        console.log(imageInfo);
    });
});
*/

module.exports = {
    images: (cb) => {
        docker.listImages(function (err, images) {
            cb(err, images);
        })
    },
    containers: (cb) => {
        docker.listContainers({ all: true }, function (err, containers) {
            cb(err, containers);
        })
    }
}

/*
var emitter = new DockerEvents({
  docker: docker,
});

// connect
emitter.on("connect", function() {
  console.log("connected to docker api");
});
// disconnect
emitter.on("disconnect", function() {
  console.log("disconnected to docker api; reconnecting");
});
// _message
emitter.on("_message", function(message) {
  console.log("got a message from docker: %j", message);
});
// create
emitter.on("create", function(message) {
  console.log("container created: %j", message);
});
// start
emitter.on("start", function(message) {
  console.log("container started: %j", message);
});
// stop
emitter.on("stop", function(message) {
  console.log("container stopped: %j", message);
});
// die
emitter.on("die", function(message) {
  console.log("container died: %j", message);
});
// destroy
emitter.on("destroy", function(message) {
  console.log("container destroyed: %j", message);
});


emitter.start();
*/
