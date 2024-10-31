import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import GaugeComponent from "react-gauge-component";
import "./historychart.css";  // Pastikan untuk mengimpor file CSS Anda di sini

function Gauge() {
    const [pHValue, setPHValue] = useState("");

    useEffect(() => {
        const phref = ref(db, "/Data_MyIpond/Data_RealTime/PH_AIR");
        const unsubscribeph = onValue(phref, (snapshot) => {
            const data = snapshot.val(); 
            setPHValue(data);
        });

        return () => {
            unsubscribeph();
        };
    }, []);

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
                                text: 'pH Sangat Asam'
                            }
                        },
                        {
                            limit: 3,
                            color: '#FF0000',
                            showTick: true,
                            tooltip: {
                                text: 'pH Terlalu Asam'
                            }
                        },
                        {
                            limit: 6,
                            color: '#ffff00',
                            showTick: true,
                            tooltip: {
                                text: 'pH Asam'
                            }
                        },
                        {
                            limit: 8.5, 
                            color: '#5BE12C', 
                            showTick: true,
                            tooltip: {
                                text: 'pH Normal'
                            }
                        },
                        {
                            limit: 11, 
                            color: '#004FA7', 
                            showTick: true,
                            tooltip: {
                                text: 'pH Basa'
                            }
                        },
                        {
                            limit: 14, 
                            color: '#4c00a4', 
                            showTick: true,
                            tooltip: {
                                text: 'pH Terlalu Basa'
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
                        formatTextValue: value => value
                    },
                    tickLabels: {
                        type: 'outer',
                        valueConfig: { 
                            formatTextValue: value => value, 
                            fontSize: 10
                        },
                        ticks: [
                        ]
                    }
                }}
                value={pHValue}
                minValue={0}
                maxValue={14}
            />
        </div>
    );
}

export default Gauge;
