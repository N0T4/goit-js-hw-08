
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const playerTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(playerTime);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}