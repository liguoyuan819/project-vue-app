import rockImg from '../../../assets/rock.png';
import scissorsImg from '../../../assets/scissors.png';
import paperImg from '../../../assets/paper.png';

export  enum GAME_TYPE {
    ROCK = 1,
    SCISSORS = 2,
    PAPER = 3
}

export const CHOICES = [
    {
        id:1,
        name:'石头',
        img:rockImg
    },
    {
        id:2,
        name:'剪刀',
        img:scissorsImg
    },
    {
        id:3,
        name:'布',
        img:paperImg
    }
];