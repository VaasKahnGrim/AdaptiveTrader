//alot of commented code below, completely WIP. Will simplify later after it is fully working.

int BotA = 0;	//Replace with Long Bot ID
int BotB = 1;	//Replace with Short Bot ID

int ActiveBot = 0;	//Start with 0 but set it based on which strategy to use

int CheckStatusDelay = 60; //How long we wait before checking the active bot's state and determining what to do about it

function HasPossition(){
	var status = true
	//Return if we have a possition or not

	return status;
}

function GetCurrentPossition(){
	//Return info about current possition
}

function SetBotState(id,state){
	if(id == 0){
		//set all bots to disabled
	}else{
		//Send API Request to turn a specific bot on/off
	}
}

function GetBotState(id){
	//Meant to get if the bot is enabled or disabled(potentially useful for debugging later)
	var state = true; //Change this later

	return state;
}

function DecideStrategy(){
	//This is where you use logic to determine which bot we should be using
	//return a number for which bot to use. Return 0 to disable all bots
}

function ToggleBot(){
	var Strategy = DecideStrategy();
	var Poss = HasPossition();

	if(ActiveBot != Strategy && !Poss){ //No reason to turn a bot on and then off again for no reason, also lets not mess with things if there is an open possition. Just in case. Maybe we will do something with forcing a panic sell
		if(ActiveBot != 0){ //If we have an active bot already lets disable it
			SetBotState(ActiveBot,false);
		}

		ActiveBot = Strategy; //Set ActiveBot tracking var so we know which bot is active without having to always make API calls for this
		SetBotState(ActiveBot,true);
	}
}


//Wait X amount of seconds to check if the bots are online
setInterval(ToggleBot,CheckStatusDelay)


