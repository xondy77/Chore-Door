let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');


let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";



let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

let randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random()* numClosedDoors);
    if(choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if(choreDoor === 1) {
        openDoor2 = beachDoorPath;
        openDoor1 = botDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if(choreDoor === 2) {
        openDoor3 = spaceDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = botDoorPath;
    }
}


doorImage1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
        if(currentlyPlaying && !isClicked(doorImage2)) {
            doorImage2.src = openDoor2;
            playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
        if(currentlyPlaying && !isClicked(doorImage3)) {
            doorImage3.src = openDoor3;
            playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if(!currentlyPlaying) {
        startRound();
    }
}
    
function startRound() {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
}
    

function isBot() {
    if(door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

function isClicked(door) {
    if(door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

function playdoor() {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver('win');
    } 
    else if(isBot(door)) {
        gameOver('lose');
    }
}

function gameOver(status) {
    if(status === 'win') {
        startButton.innerHTML = "Win! Play again?";
    }
    else {
        startButton.innerHTML = "Game over! Play again?"
    }
        currentlyPlaying = false;
}



randomChoreDoorGenerator();


