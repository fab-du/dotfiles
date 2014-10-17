#ifndef MODEL_H
#define MODEL_H

#include <QObject>

class Model : public QObject
{
    Q_OBJECT
public:
    explicit Model(QObject *parent = 0);
    Q_PROPERTY( int wattage READ getWattage WRITE setWattage NOTIFY wattageChanged)
    Q_PROPERTY( int voltage READ getVoltage WRITE setVoltage NOTIFY voltageChanged)
    Q_PROPERTY( int power READ getPower WRITE setPower NOTIFY powerChanged)
    Q_PROPERTY( int max_watt READ getMax_watt WRITE setMax_watt NOTIFY maxWattChanged)

public:
    void setVoltage(int volt){

        if( power == 0 ||  volt <= max_watt / power )
        {
            this->voltage = volt;
        }
        else if( volt > max_watt / power )
        {
            this->voltage = max_watt / power; 
        }

        emit voltageChanged( volt );
    }

    void setWattage(int watt){
            //We dont need it
            //but is cute hier ! :-D
             this->wattage = watt;
            emit wattageChanged( watt );
    }

    void setPower( int power ){

        if( voltage == 0 || power <= max_watt / voltage )
        {
            this->power = power;
        }
        else if( power > max_watt / voltage )
        {
            power = max_watt / voltage; 
        }

        emit powerChanged( power );
    }


    int getWattage(){

        if(voltage == 0 || power == 0)
            return 0;

        this->setWattage(voltage*power);
        return voltage*power;
    }

    int getPower()
    {
        return power;
    }

    int getVoltage(){
        return voltage;
    }

    int getMax_watt(){
        return max_watt; 
    }

    void setMax_watt(int maxwatt ) {
        max_watt = maxwatt;     
        emit maxWattChanged( maxwatt ); 
    }

private:
    int wattage=0;
    int max_watt=0; 
    int voltage=0;
    int power  =0;

signals:
          void powerChanged(int);
          void voltageChanged(int);
          void wattageChanged(int);
          void maxWattChanged( int ); 
public slots:

};

#endif // MODEL_H
