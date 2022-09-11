#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

HANDLE_UPDATING_DATABASE_ENDGAME(){
  if [[ $IS_USER -eq 1 ]]; then
    UPDATE_GAMES_PLAYED=$($PSQL "UPDATE users SET games_played=$((GAMES_PLAYED++)) WHERE username='$USERNAME'")
    if [[ $NUMBER_OF_GUESSES -lt $BEST_GAME ]]
      then
      UPDATE_BEST_GUESS=$($PSQL "UPDATE users SET best_game=$NUMBER_OF_GUESSES WHERE username='$USERNAME'")
    fi
  elif [[ $IS_USER -eq 0 ]]; then
    INSERT_NEW_USER=$($PSQL "INSERT INTO users(username, games_played, best_game) VALUES('$USERNAME', 1, $NUMBER_OF_GUESSES)")
  fi
}

GUESSING_GAME_CONT(){
  if [[ $USER_GUESS -eq $SECRET_NUMBER ]]; then
    echo "You guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
    HANDLE_UPDATING_DATABASE_ENDGAME
  elif [[ $USER_GUESS -lt $SECRET_NUMBER ]]; then
    echo -e "\nIt's higher than that, guess again:"
    ((NUMBER_OF_GUESSES++))
    CHECK_GUESS
  elif [[ $USER_GUESS -gt $SECRET_NUMBER ]]; then
    echo -e "\nIt's lower than that, guess again:"
    ((NUMBER_OF_GUESSES++))
    CHECK_GUESS
  fi
}

CHECK_GUESS(){
  read USER_GUESS
  if ! [[ $USER_GUESS =~ ^[0-9]+$ ]]; then
    echo "That is not an integer, guess again:"
    CHECK_GUESS
  else
    GUESSING_GAME_CONT
  fi
}

GUESSING_GAME(){
  SECRET_NUMBER=$((1 + RANDOM % 1000))
  echo -e "\nGuess the secret number between 1 and 1000:"
  NUMBER_OF_GUESSES=1
  CHECK_GUESS
}

USER_GREETING(){
  if [[ $IS_USER -eq 1 ]]; then
    GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username='$USERNAME'")
    GAMES_PLAYED_FORMATTED=$(echo $GAMES_PLAYED | sed 's/ //')
    BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username='$USERNAME'")
    BEST_GAME_FORMATTED=$(echo $BEST_GAME | sed 's/ //')
    echo "Welcome back, $USERNAME_FORMATTED! You have played $GAMES_PLAYED_FORMATTED games, and your best game took $BEST_GAME_FORMATTED guesses."
    GUESSING_GAME
  elif [[ $IS_USER -eq 0 ]]; then
    echo "Welcome, $USERNAME_FORMATTED! It looks like this is your first time here."
    GUESSING_GAME
  fi
}

ENTER_USERNAME(){
  echo "Enter your username:"
  read USERNAME
  USERNAME_FORMATTED=$(echo $USERNAME | sed 's/ //')
  IS_USER=$($PSQL "SELECT COUNT(*) FROM users WHERE username='$USERNAME'")
  USER_GREETING
}

ENTER_USERNAME

