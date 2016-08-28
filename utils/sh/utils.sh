#!/bin/bash

set -e

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`


function display_usage {
   echo "Usage:   $0 [options] [args]"
}

# Display usage information if no parameters were provided
if [ $# -eq 0 ]; then
   display_usage
   exit 1
fi


test_command () {
    which $1 &> /dev/null && exit $?
}

# $1 : path
# $2 : link
download () {
    [[ `test_command "curl"` ]] && curl -fLo  "$1" --create-dirs $link &> /dev/null && exit 0
    [[ `test_command "wget"` ]] && curl -fLo  "$1" --create-dirs $link &> /dev/null && exit 0
    #
    echo "please install wget or curl to use this script" && exit 1
}

# $1 : message
echoerr (){
echo "${red} ERROR: "
echomesg $1
}

# $1 : message
echowarn (){
echo "${red} WARNING: "
echomesg $1
}

# $1 : message
echomesg (){
	echo "${reset} ${1}"
}


case "$1" in
	--help ) display_usage; exit 1; shift ;;
	--test-command ) test_command "$2" ;;
	--download ) download "$2" "$3" ;;
	--echomesg ) echomesg "$2" ;;
	--echoerr ) echoerr "$2" ;;
	--echowarn ) echowarn "$2" ;;
	--usage ) display_usage; exit 1; shift ;;
	-* ) echo "Unrecognized option $1"
	   echo
	   exit 1;;
	* ) display_usage; break ;;
esac
