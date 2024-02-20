import piano from '@/public/sounds/piano.mp3'; // ID 1 🎹
import drum from '@/public/sounds/drum.mp3'; // ID 2 🥁
import saxophone from '@/public/sounds/saxophone.mp3'; // ID 3 🎷
import guitar from '@/public/sounds/electric-guitar.mp3'; // ID 4 🎸
import violin from '@/public/sounds/violin.mp3'; // ID 5 🎻
import french_horn from '@/public/sounds/french-horn.mp3'; // ID 6 📯
import banjo from '@/public/sounds/guitar.mp3'; // ID 7 🪕
import air_horn from '@/public/sounds/air-horn.mp3'; // ID 8 📢
import bell from '@/public/sounds/bell.mp3'; // ID 9 🔔
import boom from '@/public/sounds/boom.mp3'; // ID 10 💥
import cash from '@/public/sounds/cash.mp3'; // ID 11 💵
import clap from '@/public/sounds/clap.mp3'; // ID 12 👏
import flute from '@/public/sounds/flute.mp3'; // ID 13 🎺
import vocal from '@/public/sounds/flute.mp3'; // ID 14 🎤

let timeouts = [];

const play = (notes, mix) => {
  console.log(mix);
  stop();
  const notesArray = Object.values(notes);
  if (notesArray.length > 0) {
    notesArray.forEach((note) => {
      timeouts.push(
        setTimeout(function () {
          switch (note.y) {
            case 1:
              playSound(guitar, mix[0]);
              break;
            case 2:
              playSound(violin, mix[1]);
              break;
            case 3:
              playSound(drum, mix[2]);
              break;
            case 4:
              playSound(french_horn, mix[3]);
              break;
            case 5:
              playSound(saxophone, mix[4]);
              break;
            default:
              break;
          }
        }, note.x * 500)
      );
    });
  }
};

const playSound = (note, mix) => {
  let player = new Audio(note);
  player.addEventListener('canplay', () => {
    player.playbackRate = (mix[0] / 100) * 2;
    player.volume = ((mix[1] / 100) * 2) / 2;
    player.play();
  });
};

const stop = () => {
  for (let i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }

  timeouts = [];
};

export { play, stop };
