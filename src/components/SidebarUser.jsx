import { useState } from "react";
import { StyledSidebarUser, DataInput } from "../styles/styledElement";
import { Errormsg } from "../styles/styledRegister";
import { Button } from "../styles/styledLogin";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import * as dataApi from "../apis/user-api";
import validateData from "../validators/validate-data";
// import { useNavigate } from "react-router-dom";

export default function SidebarUser({ isOpen, setIsOpen, myData, setMyData }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const initialInput = {
    weight: "",
    height: "",
    date: format(selectedDate, "yyyy-MM-dd"),
  };
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  // const navigate = useNavigate();

  const handleDateChange = (datePicker) => {
    setSelectedDate(datePicker); // ถ้าไม่ set state อันนี้ค่าในกล่อง input ที่หน้า ui จะไม่เปลี่ยน
    const formattedDate = format(datePicker, "yyyy-MM-dd");
    setInput({ ...input, date: formattedDate });
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateData(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await dataApi.createData(input);
        // alert("Data was sent!");
        setIsOpen(false);
        myData.WeightHeights.push(input);
        setMyData(myData);
      }
    } catch (err) {
      alert(err.response?.data.message);
    }
  };

  return (
    <StyledSidebarUser>
      <div onClick={() => setIsOpen(!isOpen)} className="close">
        <svg
          viewBox="0 0 24 24"
          width="20px"
          height="20px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Close_LG">
              <path
                id="Vector"
                d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                stroke="#a7a7a7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <form onSubmit={handleSubmitForm}>
        <label>
          Weight:{" "}
          <DataInput
            name="weight"
            value={input.weight}
            onChange={handleChangeInput}
          />
        </label>
        {/* <Errormsg>ere</Errormsg> */}

        <label>
          Height:{" "}
          <DataInput
            name="height"
            value={input.height}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          Date:
          <div>
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </label>
        <Button $primary>Submit</Button>
      </form>
    </StyledSidebarUser>
  );
}
