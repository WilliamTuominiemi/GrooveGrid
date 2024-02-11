import drum from '@/public/sounds/drum.mp3';
import french_horn from '@/public/sounds/french-horn.mp3';
import guitar from '@/public/sounds/guitar.mp3';
import saxophone from '@/public/sounds/saxophone.mp3';
import violin from '@/public/sounds/violin.mp3';

let timeouts = [];

const play = (notes) => {
  stop();
  const notesArray = Object.values(notes);
  if (notesArray.length > 0) {
    notesArray.forEach((note) => {
      timeouts.push(
        setTimeout(function () {
          switch (note.y) {
            case 1:
              playSound(guitar);
              break;
            case 2:
              playSound(violin);
              break;
            case 3:
              playSound(drum);
              break;
            case 4:
              playSound(french_horn);
              break;
            case 5:
              playSound(saxophone);
              break;
            default:
              break;
          }
        }, note.x * 1000)
      );
    });
  }
};

const playSound = (note) => {
  let player = new Audio(note);
  player.addEventListener('canplay', () => {
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
