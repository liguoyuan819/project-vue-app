<template>
    <div class="rock-paper">
        <h2>石头剪刀布</h2>
        <div class="game-container">
            <div id="points">
                <label for="playerPoints">玩家分数：</label>
                <span class="playerPoints">{{playCore.playerScore}}</span>
                <label for="computerPoints">电脑分数：</label>
                <span class="computerPoints">{{playCore.computerScore}}</span>
            </div>
            <div id="choice">
                <div id="playerChoice">
                <img :src="playCore.playerImgSrc" alt="" id="playerChoiceImg"/>
                <h3 id="playerChoiceTxt">{{playCore.rockText}}</h3>
                </div>
                <div id="computerChoice">
                <img :src="playCore.computerImgSrc" alt="" id="computerChoiceImg"/>
                <h3 id="computerChoiceTxt">{{playCore.computerText}}</h3>
                </div>
            </div>
            <div id="buttons">
                <button className="btn" @click="chooseGameType(playCore.gameType.ROCK)">石头</button>
                <button className="btn" @click="chooseGameType(playCore.gameType.PAPER)">布</button>
                <button className="btn" @click="chooseGameType(playCore.gameType.SCISSORS)">剪刀</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { reactive } from "@vue/reactivity"
import { GAME_TYPE, CHOICES } from './games_rock';
import gifImg from '../../../assets/gif.gif';

export default ({
    name:'RockPaper',
    setup(){
        const playCore = reactive({
            playerScore:0,
            computerScore:0,
            rockText:'石头',
            computerText:'石头',
            gameType:GAME_TYPE,
            playerImgSrc:CHOICES[0].img,
            computerImgSrc:CHOICES[0].img,
            randomNumber:0
        });
        const chooseGameType = (gameType:number) => {
            playCore.rockText = CHOICES.filter(item => item.id === gameType)[0].name;
            playCore.playerImgSrc = CHOICES.filter(item => item.id === gameType)[0].img;
            getComputerChoice();
        }
        const getComputerChoice = () => {
            playCore.computerImgSrc = gifImg;
            setTimeout(() => {
                playCore.randomNumber = Math.floor(Math.random()*3);
                playCore.computerImgSrc = CHOICES[playCore.randomNumber].img;
                playCore.computerText = CHOICES[playCore.randomNumber].name;
                getRules();
            },2000);
        };
        const getRules = () => {
            if(playCore.rockText === CHOICES[0].name && playCore.computerText === CHOICES[1].name){
                playCore.playerScore += 1;
            } else if(playCore.rockText === CHOICES[1].name && playCore.computerText === CHOICES[2].name){
                playCore.playerScore += 1;
            } else if(playCore.rockText === CHOICES[2].name && playCore.computerText === CHOICES[0].name){
                playCore.playerScore += 1;
            } else if(playCore.rockText === playCore.computerText){
                
            } else {
                playCore.computerScore += 1;
            }
        };
        return {
            playCore,
            chooseGameType
        }
    }
})
</script>
<style>
.rock-paper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#points {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  
#points label {
    border-bottom: solid 2px #404040;
    padding-bottom: 2px;
}
.btn {
    border: none;
    background: #404040;
    color: #ffffff !important;
    font-weight: 100;
    padding: 15px;
    text-transform: uppercase;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    margin: 0rem .3rem;
}
  
.btn:hover {
    color: #404040 !important;
    font-weight: 700 !important;
    background: white;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.3s ease 0s;
}
#choice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 0rem;
}
  
#choice img {
    width: 50%;
}
  
#computerChoice, #playerChoice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 130px;
    max-height: 130px;
}
  
#computerChoiceTxt, #playerChoiceTxt {
    margin-top: 1rem;
}
</style>