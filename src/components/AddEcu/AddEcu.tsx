import React, { ChangeEvent,MouseEvent, FormEvent, useState } from 'react'
import './AddEcu.scss'
import Ecu from '../../Model/Ecu'
import { useNavigate } from 'react-router-dom'
type prop = {
  trigger: boolean,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
  onEcuAdded: (newEcu: Ecu) => void;
}
interface FormErrors {
  ecuName?: string,
  swVersion?: string,
  hwVersion?: string,
  description?: string
}
const AddEcu = (props: prop) => {
  const [formvalue, setFormvalue] = useState<Ecu>({
    id:'',
    ecuName: '',
    swVersion: '',
    hwVersion: '',
    description: ''
  });
  const [formError, setFormError] = useState<FormErrors>({});
  const navigate =useNavigate();
  const handleValidation = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormvalue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value
    }))

  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formvalue);
    try {
      const response = await fetch('http://localhost:8080/api/v1/ecus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, body: JSON.stringify(formvalue)
      });
      const data = await response.json();
      console.log(data.status);
      if(data.status==="success"){
        console.log("hello")
        props.onEcuAdded(formvalue);
        props.setTrigger(false);
        
       navigate("/ecumanagement");
      }
    } catch (error) {
      console.log(error);
    }


  }
  const dropPopup=(e:MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault(); 
    console.log("drop");
    props.setTrigger(false);
  }
  return (
    <div className='add_ecu_container'>
      <div className='card'>
        <h3>Add New ECU</h3>
        <div className='ecu_form'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>ECU Name </label>
              <input type='text' placeholder='ECU Name' name='ecuName' onChange={handleValidation} required />
            </div>
            <div>
              <label>SW Version</label>
              <input type='text' placeholder='SW Version' name='swVersion' onChange={handleValidation} required />
            </div>
            <div>
              <label>HW Version </label>
              <input type='text' placeholder='HW Version' name='hwVersion' onChange={handleValidation} required />
            </div>
            <div>
              <label id='description'>Description &nbsp; &nbsp;</label>
              <input type='text' placeholder='Description' id='description' name='description' onChange={handleValidation} required />
            </div>
            <div>
              <button type='submit' ><span className='las la-save' ></span>Save</button>
              <button type='button' onClick={dropPopup}><span className='las la-times' ></span>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEcu;