#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"

CHECK_SYMBOL=$($PSQL "SELECT COUNT(*) FROM elements WHERE symbol='$1'")
CHECK_NAME=$($PSQL "SELECT COUNT(*) FROM elements WHERE name='$1'")

DEFINE_AND_PRINT() {
ATOMIC_NUMBER_FORMATTED=$(echo $ATOMIC_NUMBER | sed 's/ //')

NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number=$ATOMIC_NUMBER");
NAME_FORMATTED=$(echo $NAME | sed 's/ //')

SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number=$ATOMIC_NUMBER");
SYMBOL_FORMATTED=$(echo $SYMBOL | sed 's/ //')

TYPE_ID=$($PSQL "SELECT type_id FROM properties WHERE atomic_number=$ATOMIC_NUMBER");
if [[ $TYPE_ID -eq 1 ]]; then
  TYPE="nonmetal"
elif [[ $TYPE_ID -eq 2 ]]; then
  TYPE="metal"
else
  TYPE="metalloid"
fi

MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number=$ATOMIC_NUMBER");
MASS_FORMATTED=$(echo $MASS | sed 's/ //')

MELTING_POINT=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number=$ATOMIC_NUMBER");
MELTING_POINT_FORMATTED=$(echo $MELTING_POINT | sed 's/ //')

BOILING_POINT=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number=$ATOMIC_NUMBER");
BOILING_POINT_FORMATTED=$(echo $BOILING_POINT | sed 's/ //')

echo "The element with atomic number $ATOMIC_NUMBER_FORMATTED is $NAME_FORMATTED ($SYMBOL_FORMATTED). It's a $TYPE, with a mass of $MASS_FORMATTED amu. $NAME_FORMATTED has a melting point of $MELTING_POINT_FORMATTED celsius and a boiling point of $BOILING_POINT_FORMATTED celsius."
}

if [[ -z "$1" ]]; then
  echo -e "Please provide an element as an argument."
elif [[ $1 -ge 1 && $1 -le 10 ]]; then
    ATOMIC_NUMBER=$1
    DEFINE_AND_PRINT
elif [[ $CHECK_SYMBOL -eq 1 ]]; then
    ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE symbol='$1'")
    DEFINE_AND_PRINT
elif [[ $CHECK_NAME -eq 1 ]]; then
    ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE name='$1'")
    DEFINE_AND_PRINT
else
  echo -e "I could not find that element in the database."
fi
