#!/usr/bash/ 

touch config.pro 


echo "TEMPLATE = app                         ">>config.pro
echo "TARGET = app                           ">>config.pro
echo "INCLUDEPATH += .                       ">>config.pro
echo "QT = core gui quick qml                ">>config.pro
echo "                                       ">>config.pro
echo "                                       ">>config.pro
echo "# Input                                ">>config.pro
echo "HEADERS += \                           ">>config.pro
echo "header/qtquick2applicationviewer.h     ">>config.pro
echo ""                                      ">>config.pro
echo "SOURCES +=\                            ">>config.pro
echo "src/main.cpp                           ">>config.pro
echo "                                       ">>config.pro
echo "OTHER_FILES += \                       ">>config.pro
echo "            qml/main.qml               ">>config.pro


mkdir header 
mkdir src 
mkdir qml 

cp ~/tmp/foo1/src/qtquick2applicationviewer.cpp src/ 
cp  ~/tmp/foo1/header/qtquick2applicationviewer.h header/ 

touch src/main.cpp 

echo "#include <QtGui/QGuiApplication" >> src/main.cpp 
echo "#include <QtQuick>" >>                          src/main.cpp 
echo "#include "header/qtquick2applicationviewer.h" >>src/main.cpp   
echo "int main(int argc, int *argv[])" >>             src/main.cpp    
echo "{" >>                                           src/main.cpp     
echo "QGuiApplication app(argc, argv)" >>             src/main.cpp      
echo "app.exec();"       >>                             src/main.cpp
echo "}"                   >>                           src/main.cpp




