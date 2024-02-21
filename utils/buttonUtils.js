import piano from '@/public/sounds/piano.mp3'; // ID 0 🎹
import drum from '@/public/sounds/drum.mp3'; // ID 1 🥁
import saxophone from '@/public/sounds/saxophone.mp3'; // ID 2 🎷
import guitar from '@/public/sounds/electric-guitar.mp3'; // ID 3 🎸
import violin from '@/public/sounds/violin.mp3'; // ID 4 🎻
import french_horn from '@/public/sounds/french-horn.mp3'; // ID 5 📯
import banjo from '@/public/sounds/guitar.mp3'; // ID 6 🪕
import air_horn from '@/public/sounds/air-horn.mp3'; // ID 7 📢
import bell from '@/public/sounds/bell.mp3'; // ID 8 🔔
import boom from '@/public/sounds/boom.mp3'; // ID 9 💥
import cash from '@/public/sounds/cash.mp3'; // ID 10 💵
import clap from '@/public/sounds/clap.mp3'; // ID 11 👏
import flute from '@/public/sounds/flute.mp3'; // ID 12 🎺
import vocal from '@/public/sounds/vocal.mp3'; // ID 13 🎤

let timeouts = [];

const play = (notes, mix, instrumentBoard) => {
  stop();
  const notesArray = Object.values(notes);
  if (notesArray.length > 0) {
    notesArray.forEach((note) => {
      timeouts.push(
        setTimeout(function () {
          switch (instrumentBoard[note.y - 1]) {
            case 0:
              playSound(piano, mix[note.y - 1]);
              break;
            case 1:
              playSound(drum, mix[note.y - 1]);
              break;
            case 2:
              playSound(saxophone, mix[note.y - 1]);
              break;
            case 3:
              playSound(guitar, mix[note.y - 1]);
              break;
            case 4:
              playSound(violin, mix[note.y - 1]);
              break;
            case 5:
              playSound(french_horn, mix[note.y - 1]);
              break;
            case 6:
              playSound(banjo, mix[note.y - 1]);
              break;
            case 7:
              playSound(air_horn, mix[note.y - 1]);
              break;
            case 8:
              playSound(bell, mix[note.y - 1]);
              break;
            case 9:
              playSound(boom, mix[note.y - 1]);
              break;
            case 10:
              playSound(cash, mix[note.y - 1]);
              break;
            case 11:
              playSound(clap, mix[note.y - 1]);
              break;
            case 12:
              playSound(flute, mix[note.y - 1]);
              break;
            case 13:
              playSound(vocal, mix[note.y - 1]);
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
