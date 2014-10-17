
#!/bin/sh 

read project_name 

mkdir $project_name 

cd $project_name 
mkdir header 
mkdir src 
mkdir qml 
mkdir img 
mkdir js 
cp $HOME/bin/qt/project.pro . 
cd src 
cp $HOME/bin/qt/main.cpp .  
cp $HOME/bin/qt/model.cpp .   
cd ../header 
cp $HOME/bin/qt/model.h .    
cd ../qml 
cp $HOME/bin/qt/main.qml . 
cd .. 
vim 




