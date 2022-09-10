#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=<database_name> -t --no-align -c"

#gotta update the database where necessary
#gotta handle where input is anything but an integer

GUESSING_GAME_CONT(){
if [[ $USER_GUESS -eq $SECRET_NUMBER ]]; then
  echo -e "\nYou guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
elif [[ $USER_GUESS -lt $SECRET_NUMBER ]]; then
  echo -e "\nIt's higher than that, guess again:"
  NUMBER_OF_GUESSES++
  read USER_GUESS
  GUESSING_GAME_CONT
elif [[ $USER_GUESS -gt $SECRET_NUMBER ]]; then
  echo -e "\nIt's lower than that, guess again:"
  NUMBER_OF_GUESSES++
  read USER_GUESS
  GUESSING_GAME_CONT
fi
}

GUESSING_GAME_INIT() {
SECRET_NUMBER=
echo -e "\nGuess the secret number between 1 and 1000:"
read USER_GUESS
NUMBER_OF_GUESSES=1
GUESSING_GAME_CONT
fi
}

INIT() {
echo -e "\nEnter your username:"
read USERNAME
USERNAME_FORMATTED=
IS_USER=$($PSQL "")
if [[ $IS_USER -eq 1 ]]; then
GAMES_PLAYED=$($PSQL "")
GAMES_PLAYED_FORMATTED=
BEST_GAME=$($PSQL "")
BEST_GAME_FORMATTED=
echo -e "\nWelcome back, $USERNAME_FORMATTED! You have played $GAMES_PLAYED_FORMATTED games, and your best game took $BEST_GAME_FORMATTED guesses."
GUESSING_GAME
elif [[ $IS_USER -eq 0 ]]; then
echo -e "\nWelcome, $USERNAME_FORMATTED! It looks like this is your first time here."
GUESSING_GAME
fi
}

INIT
