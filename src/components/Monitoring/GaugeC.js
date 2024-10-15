import React, { useState, useEffect } from "react";
import GaugeComponent from "react-gauge-component";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

function GaugeC() {
    const [turbidity, setTurbidity] = useState(0);

    useEffect(() => {
        // Mendengarkan perubahan pada path suhu di Firebase
        const turbidityref = ref(db, "/Data_Alat2/Data_RealTime/KEKERUHAN_AIR")
        const unsubscribetur = onValue(turbidityref, (snapshot) => {
            const data = snapshot.val(); 
            setTurbidity(data);
        });

    return () => {
        unsubscribetur();
    }
    }, []);

    // Konfigurasi GaugeChart untuk menampilkan kekeruhan
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
                                text: 'Air Sangat Jernih'
                            }
                        },
                        {
                            limit: 100,
                            color: '#5BE12C',
                            showTick: true,
                            tooltip: {
                                text: 'Air Jernih'
                            }
                        },
                        {
                            limit: 500, 
                            color: '#ffff00', 
                            showTick: true,
                            tooltip: {
                                text: 'Air Keruh'
                            }
                        },
                        {
                            limit: 1000, 
                            color: '#FF0000', 
                            showTick: true,
                            tooltip: {
                                text: 'Air Sangat Keruh'
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
                        formatTextValue: value => value + ' NTU'
                    },
                    tickLabels: {
                        type: 'outer',
                        valueConfig: { 
                            formatTextValue: value => value + ' NTU', 
                            fontSize: 10
                        },
                        ticks: [
                        ]
                    }
                }}
                value={turbidity}
                minValue={0}
                maxValue={1000}
            />
        </div>
    );
}

export default GaugeC;

