import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ApplicationForm(props){
    
    const [name, setName] = useState("");
    const nameChanged = e =>{
        e.preventDefault();
        setName(e.target.value);
    }
    const [designation, setDesignation] = useState("");
    const designationChanged = e =>{
        e.preventDefault();
        setDesignation(e.target.value);
    }

    const [workingPlace, setWorkingPlace] = useState("");
    const workingPlaceChanged = e =>{
        e.preventDefault();
        setWorkingPlace(e.target.value);
    }

    const [fatherOrHusbandName, setFatherOrHusbandName] = useState("");
    const fatherOrHusbandNameChanged = e =>{
        e.preventDefault();
        setFatherOrHusbandName(e.target.value);
    }

    
    const [motherName, setMotherName] = useState("");
    const motherNameChanged = e =>{
        e.preventDefault();
        setMotherName(e.target.value);
    }

    const [occupation, setOccupation] = useState("");
    const occupationChanged = e =>{
        e.preventDefault();
        setOccupation(e.target.value);
    }

    const [religion, setReligion] = useState("");
    const religionChanged = e =>{
        e.preventDefault();
        setReligion(e.target.value);
    }

    const [permanentAddress, setPermanentAddress] = useState("");
    const permanentAddressChanged = e =>{
        e.preventDefault();
        setPermanentAddress(e.target.value);
    }
    
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div className="applicationForm">
        <h1>Hellow</h1>
            <div className="field">
                <label>Name</label>
                <input onChange={nameChanged} value={name} type="text" name="name"/>
            </div>
            
            <div className="field">
                <label>Designation</label>
                <input onChange={designationChanged} value={designation} type="text"/>
            </div>

            <div className="field">
                <label>Working Place</label>
                <input onChange={workingPlaceChanged} value={workingPlace} type="text"/>
            </div>

            <div className="field">
                <label>Father/Husband Name</label>
                <input onChange={fatherOrHusbandNameChanged} value={fatherOrHusbandName} type="text"/>
            </div>

            <div className="field">
                <label>Mother</label>
                <input onChange={motherNameChanged} value={motherName} type="text"/>
            </div>

            <div className="field">
                <label>Occupation</label>
                <input onChange={occupationChanged} value={occupation} type="text"/>
            </div>

            <div className="field">
                <label>Religion</label>
                <input onChange={religionChanged} value={religion} type="text"/>
            </div>

            <div className="field">
                <label>Permanent Address</label>
                <input onChange={permanentAddressChanged} value={permanentAddress} type="text"/>
            </div>

          
            <div className="field">
                <label>Division</label>
                <input onChange={permanentAddressChanged} value={permanentAddress} type="text"/>

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