#!/bin/bash 
set -e #enable argument

##What needed 
#Footer
#Header 

#Table of content 

#code snippet with dark background 

# $1 welche modus 
# $2 pdf, slide 
# $3 input name  


latex_engine="xelatex"
data_dir='/home/batlab/Dropbox/pandoc-templates'

case $1 in 
	mode)
	  case $2 in 
		pdf)
			template='default.latex'
			depth=3
			output='output.pdf'
		;;
		slide) 
			template='default.slidy'
			depth=1
			output='output.pdf'
		;;
	  esac
	;;
esac 

pandoc --data-dir="$data_dir" --latex-engine="$latex_engine" --template "$template" --table-of-contents --toc-depth $depth -o $output $3 




