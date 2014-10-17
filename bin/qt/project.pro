


TEMPLATE = app
TARGET = app 
INCLUDEPATH += .
QT = core gui quick qml 


# Input
HEADERS += header/model.h 
SOURCES += src/main.cpp src/model.cpp 

OTHER_FILES += \ 
            qml/main.qml
