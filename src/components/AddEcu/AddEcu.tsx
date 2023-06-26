import React from 'react'
import './AddEcu.scss'
type prop={
    trigger:boolean,
    setTrigger:React.Dispatch<React.SetStateAction<boolean>>
}
const AddEcu = (props:prop) => {
 
  return (
    <div className='add_ecu_container'>
          <div className='card'>
              <h3>Add New ECU</h3>
              <div className='ecu_form'>
                 <form>
                  <div>
                    <label>ECU Name </label>
                    <input type='text' placeholder='ECU Name'/>
                  </div>
                  <div>
                    <label>SW Version</label>
                    <input type='text' placeholder='SW Version'/>
                  </div>
                  <div>
                    <label>HW Version </label>
                    <input type='text' placeholder='HW Version'/>
                  </div>
                  <div>
                    <label id='description'>Description &nbsp; &nbsp;</label>
                    <input type='text' placeholder='Description' id='description'/>
                  </div>
                  <div>
                  <button><span className='las la-save'></span>Save</button>
                        <button><span className='las la-times' onClick={(e) => { e.preventDefault(); props.setTrigger(false) }}></span>Cancel</button>
                  </div>
                 </form>
              </div>
          </div>
    </div>
  )
}

export default AddEcu;