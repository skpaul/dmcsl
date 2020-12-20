import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ApplicationForm(props){
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div className="applicationForm">
        <h1>Hellow</h1>
            <div className="field">
                <label>Name</label>
                <input type="text" name="name"/>
            </div>
            
            <div className="field">
                <label>Designation</label>
                <input type="text" name="designation"/>
            </div>

            <div className="field">
                <label>Working Place</label>
                <input type="text" name="workingPlace"/>
            </div>

            <div className="field">
                <label>Father/Husband Name</label>
                <input type="text" name="fatherOrHusbandName"/>
            </div>

            <div className="field">
                <label>Mother</label>
                <input type="text" name="motherName"/>
            </div>

            <div className="field">
                <label>Occupation</label>
                <input type="text" name="occupation"/>
            </div>

            <div className="field">
                <label>Occupation</label>
                <input type="text" name="occupation"/>
            </div>

            <div className="field">
                <label>Religion</label>
                <input type="text" name="religion"/>
            </div>

            <div className="field">
                <label>Permanent Address</label>
                <input type="text" name="permanentAddress"/>
            </div>

            <div className="field">
                <label>Religion</label>
                <input type="text" name="religion"/>
            </div>

            <div className="field">
                <label>Division</label>
                <input type="text" name="permanentDivision"/>
            </div>
            <div className="field">
                <label>District</label>
                <input type="text" name="permanentDistrict"/>
            </div>
            <div className="field">
                <label>Thana</label>
                <input type="text" name="permanentThana"/>
            </div>

            <div className="field">
                <label>Present Address</label>
                <input type="text" name="presentAddress"/>
            </div>
            <div className="field">
                <label>Date of Birth</label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy" />
            </div>

            <div className="field">
                <label>Nationality</label>
                <input type="text" name="nationality"/>
            </div>
            <div className="field">
                <label>Name and Relationship of the nominated person</label>
                <input type="text" name="nominatedPersonName"/>
                <input type="text" name="relationship"/>
                <input type="text" name="residentialAddress"/>
            </div>
            <div className="field">
                <label>Mobile Number</label>
                <input type="text" name="mobileNo"/>
            </div>

            <div className="field">
                <label>Email</label>
                <input type="text" name="email"/>
            </div>
        </div>
    );
}