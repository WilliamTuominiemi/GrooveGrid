import drum from '@/public/sounds/drum.mp3';
import french_horn from '@/public/sounds/french-horn.mp3';
import guitar from '@/public/sounds/guitar.mp3';
import saxophone from '@/public/sounds/saxophone.mp3';
import violin from '@/public/sounds/violin.mp3';

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
