import { useState, useEffect } from "react";
import * as adminApi from "../apis/admin-api";
import { WHtable } from "../styles/styledElement";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function AdminDate() {
  const [allData, setAllData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await adminApi.getAllData();
      setAllData(res.data);
    };
    fetchData();
  }, []);

  const handleDateChange = (datePicker) => {
    setSelectedDate(datePicker); // ถ้าไม่ set state อันนี้ค่าในกล่อง input ที่หน้า ui จะไม่เปลี่ยน
    setFormattedDate(format(datePicker, "yyyy-MM-dd"));
  };

  return (
    <>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={selectedDate}
        onChange={handleDateChange}
      />
      <button
        onClick={() =>
          setFilteredData(
            allData.filter((obj) => obj.date === `${formattedDate}`)
          )
        }
      >
        Submit
      </button>
      <WHtable>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Date</th>
          </tr>
          {filteredData?.map((obj) => (
            <tr key={obj.User.id}>
              <td>{obj.User.userName}</td>
              <td>
                {obj.User.firstName} {obj.User.lastName}
              </td>
              <td>{obj.weight}</td>
              <td>{obj.height}</td>
              <td>{obj.date}</td>
            </tr>
          ))}
        </tbody>
      </WHtable>
    </>
  );
}
