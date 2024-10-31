import React, { useState, useEffect } from "react";
import GaugeComponent from "react-gauge-component";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

function GaugeB() {
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        // Mendengarkan perubahan pada path suhu di Firebase
        const suhuref = ref(db, "/Data_MyIpond/Data_RealTime/SUHU_AIR")
        const unsubscribesuhu = onValue(suhuref, (snapshot) => {
            const data = snapshot.val(); 
            setTemperature(data);
        });

    return () => {
        unsubscribesuhu();
    }
    }, []);

    // Konfigurasi GaugeChart untuk menampilkan suhu
    return (
        <div style={{ width: "100%" }} className="gauge-component-class">
            <GaugeComponent
                type="semicircle"
                arc={{
                    width: 0.2,
                    padding: 0.005,
                    cornerRadius: 1,
                    subArcs: [
                        {
                            limit: 0,
                            color: '#FF0000',
                            showTick: true,
                            tooltip: {
                                text: 'Suhu Air Sangat Dingin'
                            }
                        },
                        {
                            limit: 12,
                            color: '#94f7ff',
                            showTick: true,
                            tooltip: {
                                text: 'Suhu Air Sangat Dingin'
                            }
                        },
                        {
                            limit: 22,
                            color: '#3fd0d4',
                            showTick: true,
                            tooltip: {
                                text: 'Suhu Air Dingin'
                            }
                        },
                        {
                            limit: 30, 
                            color: '#5BE12C', 
                            showTick: true,
                            tooltip: {
                                text: 'Suhu Air Normal'
                            }
                        },
                        {
                            limit: 40, 
                            color: '#FF0000', 
                            showTick: true,
                            tooltip: {
                                text: 'Suhu Air Sangat Panas'
                            }
                        }
                    ]
                }}
                pointer={{
                    color: '#CCF2B9',
                    length: 0.80,
                    width: 14,
                }}
                labels={{
                    valueLabel: { 
                        formatTextValue: value => value + 'ºC'
                    },
                    tickLabels: {
                        type: 'outer',
                        valueConfig: { 
                            formatTextValue: value => value + 'ºC', 
                            fontSize: 10
                        },
                        ticks: [
                        ]
                    }
                }}
                value={temperature}
                minValue={0}
                maxValue={40}
            />
        </div>
    );
}

export default GaugeB;
