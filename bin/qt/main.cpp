#include <QtGui/QGuiApplication>
#include <QtQuick>
#include "header/qtquick2applicationviewer.h"
#include "header/model.h"

int main(int argc, char *argv[])
{
   QGuiApplication app(argc, argv);
   Modell model;

    QtQuick2ApplicationViewer viewer;
    viewer.rootContext()->setContextProperty("modell", &modell);
    viewer.setMainQmlFile(QStringLiteral("qml/main.qml"));
    viewer.showExpanded();

    return app.exec();

    //return app.exec();
}
