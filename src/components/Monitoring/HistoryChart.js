import React, { useState, useEffect } from "react";
import "./historychart.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import moment from "moment";

function HistoryChart() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const dataref = ref(db, "/Data_Alat2/Data_Historical"); // Update path sesuai dengan Firebase
    const unsubscribedata = onValue(dataref, (snapshot) => {
      const fetchdata = snapshot.val();
      
      const chartdata = Object.keys(fetchdata)
        .map((dateKey) => {
          // Iterasi setiap waktu dalam path tanggal
          return Object.keys(fetchdata[dateKey]).map((timeKey) => ({
            date: moment(dateKey + " " + timeKey, "MM-DD-YYYY HH:mm:ss").toDate(), // Kombinasikan tanggal dan waktu
            pH: parseFloat(fetchdata[dateKey][timeKey].pH),
          }));
        })
        .flat(); // Flatten array untuk menggabungkan data

      // Filter berdasarkan tanggal
      const filteredData = chartdata.filter((item) => {
        if (startDate && endDate) {
          return (
            item.date >= startDate.startOf("day").toDate() &&
            item.date <= endDate.endOf("day").toDate()
          );
        }
        return true;
      });

      setData(filteredData);
    });
    return () => {
      unsubscribedata();
    };
}, [startDate, endDate]);

  const handleDateFilter = (start, end) => {
    setStartDate(start ? moment(start).startOf('day') : null);
    setEndDate(end ? moment(end).endOf('day') : null);
  };

  return (
    <>
      <div className="date-filter">
        <label>Tanggal Mulai:</label>
        <input
          type="date"
          onChange={(e) =>
            handleDateFilter(new Date(e.target.value), endDate?.toDate())
          }
        />
      </div>
      <div className="date-filter">
        <label>Tanggal Berakhir:</label>
        <input
          type="date"
          onChange={(e) =>
            handleDateFilter(startDate?.toDate(), new Date(e.target.value))
          }
        />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          width={500}
          height={300}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 1" />
          <XAxis dataKey="date" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line type="monotone" dataKey="pH" strokeWidth={1} stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default HistoryChart;