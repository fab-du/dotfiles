#!/bin/bash
#
#
# 

clear
set -e

deploy_dotfile_script="$PWD""/install/deploy_dotfile.sh"

create_local_profile( installation_option )
{
  touch "$HOME/.local_profile
  echo "EXPORT=$installation_option" >> "$HOME/.local_profile" 
}


if [ "$1" == "min" || "$1" == "minimal" ]; then
	exec "$deploy_dotfile_script"
elif [ "$1" == "full" || "$1" == "full_installation" ]; then
	exec "$deploy_dotfile_script"
else
	echo "chose installation option \n"
	echo "Usage for minimal installation: $0 minimal "
	echo "Usage for extended  installation: $0 full "
	exit -1
fi


# end of script
uptime
