TEMPLATE = app
CONFIG += console
CONFIG -= app_bundle
CONFIG -= qt

SOURCES += \
    IntSLList.cpp \
    IntSLLNode.cpp

include(deployment.pri)
qtcAddDeployment()

HEADERS += \
    IntSLList.h \
    IntSLLNode.h

