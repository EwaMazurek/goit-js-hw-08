import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    window.localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const timeStamp = window.localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeStamp).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      console.log(
        'the time was less than 0 or greater than the videos duration'
      );
      break;

    case 'ERR_BLOCKED_BY_CLIENT':
      console.log('99 little bugs in the code');
      break; //ad block ?

    default:
      console.log('some other error occurred');
      break;
  }
});
