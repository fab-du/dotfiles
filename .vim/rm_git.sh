#!/bin/bash 



#d for directories 

find . -type d | grep -i "\.git" | xargs rm -rf 
