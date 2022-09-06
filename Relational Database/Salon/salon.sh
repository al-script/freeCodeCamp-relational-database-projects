#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\nWelcome to My Salon, how can I help you?"

SERVICE_MENU() {
 if [[ $1 ]]
  then
    echo -e "\n$1"
  fi

# print available services
echo -e "\nHere are our available services:"
AVAILABLE_SERVICES=$($PSQL "SELECT service_id, name FROM services ORDER BY service_id")
echo "$AVAILABLE_SERVICES" | while read SERVICE_ID BAR NAME
  do
    echo "$SERVICE_ID) $NAME"
  done

read SERVICE_ID_SELECTED

case $SERVICE_ID_SELECTED in
1) BOOKING ;;
2) BOOKING ;;
3) BOOKING ;;
*) SERVICE_MENU "Please enter a valid service." ;;
esac
}

BOOKING() {
# ask for phone number
echo -e "\nWhat's your phone number?"
read CUSTOMER_PHONE

# check for phone number
CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone='$CUSTOMER_PHONE'")

# if no record, ask for name
if [[ -z $CUSTOMER_NAME ]]
  then
  echo -e "\nWhat's your name?"
  read CUSTOMER_NAME
  
  INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME','$CUSTOMER_PHONE')")
fi

# get customer_id
CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$CUSTOMER_PHONE'")

# ask for appointment time
echo -e "\nWhat time would you like for your appointment?"
read SERVICE_TIME

# insert appointment time
INSERT_APPOINTMENT=$($PSQL "INSERT INTO appointments(service_id,time,customer_id) VALUES($SERVICE_ID_SELECTED,'$SERVICE_TIME',$CUSTOMER_ID)")

# print confirmation of appointment
SERVICE_NAME=$($PSQL "SELECT name FROM services WHERE service_id=$SERVICE_ID_SELECTED")
SERVICE_NAME_FORMATTED=$(echo $SERVICE_NAME | sed 's/ //')
echo -e "\nI have put you down for a $SERVICE_NAME_FORMATTED at $SERVICE_TIME, $CUSTOMER_NAME."
}

SERVICE_MENU
