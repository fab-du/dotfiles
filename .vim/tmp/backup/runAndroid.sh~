#!/bin/sh 

#android update project --target 2 -p . 
android update project --path ./ > /dev/null
ant clean > /dev/null
ant debug > /dev/null
adb installd bin/*.apk
