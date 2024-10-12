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
    const dataref = ref(db, "/Data_MyIpond/Data_Json");
    const unsubscribedata = onValue(dataref, (snapshot) => {
      const fetchdata = snapshot.val();
      const chartdata = Object.keys(fetchdata)
      .map((key) => ({
        date: moment(fetchdata[key].Tanggal).toDate(), // Use moment to parse the date
        Suhu: parseFloat(fetchdata[key].Temperature),
      }))
      .filter((item) => {
        if (startDate && endDate) {
          return (
            item.date >= startDate.startOf("day").toDate() &&
            item.date <= endDate.endOf("day").toDate()
          );
        }
        return true;
      });
      setData(chartdata);
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
      <ResponsiveContainer height={350}>
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
          <Line type="monotone" dataKey="Suhu" strokeWidth={1} stroke="blue" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default HistoryChart;