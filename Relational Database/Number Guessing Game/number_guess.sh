#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=<database_name> -t --no-align -c"

######
#gotta make the database users, with columns: username VARCHAR(23), games_played INT, best_game INT
#gotta handle where input is anything but an integer
#gotta properly generate the random number
#gotta figure out why it's not prompting the username
#indent

######
#should games played be updated once begin the game, or once end the game?
#should user creation be handled at start of game or end of game?

HANDLE_UPDATING_DATABASE_ENDGAME(){
if [[ $IS_USER -eq 1 ]]; then
  UPDATE_GAMES_PLAYED=$($PSQL "UPDATE users SET games_played=$((GAMES_PLAYED++)) WHERE username='$USERNAME'")
  if [[ $NUMBER_OF_GUESSES -lt $BEST_GAME ]]
  then
  UPDATE_BEST_GUESS=$($PSQL "UPDATE users SET best_game=$NUMBER_OF_GUESSES WHERE username='$USERNAME'")
  fi
elif [[ $IS_USER -eq 0 ]]; then
  INSERT_NEW_USER=$($PSQL "INSERT INTO users(username, games_played, best_game) VALUES($USERNAME, 1, $NUMBER_OF_GUESSES)")
fi
}

GUESSING_GAME_CONT(){
if [[ $USER_GUESS -eq $SECRET_NUMBER ]]; then
  echo -e "\nYou guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
  HANDLE_UPDATING_DATABASE_ENDGAME
elif [[ $USER_GUESS -lt $SECRET_NUMBER ]]; then
  echo -e "\nIt's higher than that, guess again:"
  ((NUMBER_OF_GUESSES++))
  read USER_GUESS
  GUESSING_GAME_CONT
elif [[ $USER_GUESS -gt $SECRET_NUMBER ]]; then
  echo -e "\nIt's lower than that, guess again:"
  ((NUMBER_OF_GUESSES++))
  read USER_GUESS
  GUESSING_GAME_CONT
fi
}

GUESSING_GAME_INIT() {
SECRET_NUMBER=((1 + $RANDOM % 1000))
echo -e "\nGuess the secret number between 1 and 1000:"
read USER_GUESS
NUMBER_OF_GUESSES=1
GUESSING_GAME_CONT
fi
}

USER_GREETING() {
if [[ $IS_USER -eq 1 ]]; then
GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username='$USERNAME'")
GAMES_PLAYED_FORMATTED=$(echo $GAMES_PLAYED | sed 's/ //')
BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username='$USERNAME'")
BEST_GAME_FORMATTED=$(echo $BEST_GAME | sed 's/ //')
echo -e "\nWelcome back, $USERNAME_FORMATTED! You have played $GAMES_PLAYED_FORMATTED games, and your best game took $BEST_GAME_FORMATTED guesses."
GUESSING_GAME_INIT
elif [[ $IS_USER -eq 0 ]]; then
echo -e "\nWelcome, $USERNAME_FORMATTED! It looks like this is your first time here."
GUESSING_GAME_INIT
fi
}

ENTER_USERNAME() {
echo -e "\nEnter your username:"
read USERNAME
USERNAME_FORMATTED=$(echo $USERNAME | sed 's/ //')
IS_USER=$($PSQL "SELECT COUNT(*) FROM users WHERE username='$USERNAME'")
USER_GREETING
}

ENTER_USERNAME
