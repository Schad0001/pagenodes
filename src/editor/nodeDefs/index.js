const nodeDefs = [
  require('./analysis/sentiment'),
  //require('./core/catch'),
  //require('./core/status'),
  require('./core/debug'),
  //require('./core/exec'),
  require('./core/delay'),
  //require('./core/trigger'),
  //require('./core/unknown'),
  require('./core/template'),
  require('./core/function'),
  require('./core/espeak'),
  require('./core/notify'),
  require('./core/inject'),
  require('./core/remote'),
  require('./core/comment'),
  require('./io/httpin'),
  require('./io/eventsource'),
  //require('./io/websocket'),
  //require('./io/watch'),
  //require('./io/tcpin'),
  //require('./io/udp'),
  require('./io/camera'),
  require('./io/rbe'),
  require('./io/meshblu'),
  require('./io/math'),
  require('./io/split'),
  require('./io/join'),
  require('./io/vibrate'),
  require('./io/mqtt'),
  require('./io/gamepad'),
  require('./io/gpio'),
  require('./io/socketio'),
  require('./io/geolocate'),
  require('./logic/switch'),
  require('./logic/range'),
  require('./logic/change'),
  //require('./parsers/html'),
  //require('./parsers/csv'),
  require('./io/buffer'),
  require('./parsers/json'),
  require('./parsers/xml'),
  //require('./storage/file'),
  //require('./storage/tail'),
  require('./storage/localdb'),
  require('./core/voicerec'),
  require('./io/accelerometer'),
  require('./storage/file'),
  require('./io/serial')
];

module.exports = function(RED){
  nodeDefs.forEach(function(n){
    n(RED);
  });
}
