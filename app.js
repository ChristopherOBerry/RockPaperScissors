

    
function play (entry)
{
    let result;
    let cpuResult;

    switch (entry){
        case 'rock':
            result = 'rock';
            break;
        case 'paper':
            result = 'paper';
            break;
        case 'scissors':
            result = 'scissors';
            break;        
    }
    // our choice
    console.log(result)
    
    let number = Math.floor((Math.random() * 3))
    

    switch (number) {
        case 0:
            cpuResult = 'rock';
            break;
        case 1:
            cpuResult = 'paper';
            break;
        case 2:
            cpuResult = 'scissors';
            break;
    }
    //cpu random choice
    console.log(cpuResult)
    
    let yourChoice = document.querySelector("#userChoice")
    let cpuChoice = document.querySelector("#cpuChoice")
    let gameResult = document.querySelector("#result")

    
    
    if (result == 'rock' && cpuResult == 'rock')
    {
        console.log("You Tied!")
        finalResult = "You Tied!"
    }
    if(result == 'rock' && cpuResult == 'paper')
    {
        console.log("You Lose!")
        finalResult = "You Lose!"
    }
    if(result == 'rock' && cpuResult == 'scissors')
    {
        console.log("You Win!")
        finalResult = "You Win!"
    }
    if (result == 'paper' && cpuResult == 'rock')
    {
        console.log("You Win!")
        finalResult = "You Win!"
    }
    if (result == 'paper' && cpuResult == 'paper')
    {
        console.log("You Tied!")
        finalResult = "You Tied!"
    }
    if (result == 'paper' && cpuResult == 'scissors')
    {
        console.log("You Lose!")
        finalResult = "You Lose!"
    }
    if (result == 'scissors' && cpuResult == 'rock')
    {
        console.log("You Lose!")
        finalResult = "You Lose!"
    }
    if (result == 'scissors' && cpuResult == 'paper')
    {
        console.log("You Win!")
        finalResult = "You Win!"
    }
    if (result == 'scissors' && cpuResult == 'scissors')
    {
        console.log("You Tied!")
        finalResult = "You Tied!"
    }
    
    yourChoice.innerHTML = result.toString()
    cpuChoice.innerHTML = cpuResult.toString()
    gameResult.innerHTML = finalResult;
    
    


    
}




