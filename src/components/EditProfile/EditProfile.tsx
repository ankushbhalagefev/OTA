import React from 'react'
import './EditProfile.scss'
type propsType = {
    trigger: boolean,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}
const EditProfile = (props: propsType) => {

    return (
        <div className='edit_container'>

            <div className='editprofile_container'>

                <h3>Edit Profile</h3>


                <div className='profile'>
                    <span className='las la-user-circle'></span>
                </div>
                <form>
                    <div>
                        <label id='name'>Name</label>
                        <input placeholder='Edit Name' />
                    </div>
                    <div>
                        <label id='email'>Email</label>
                        <input placeholder='Edit Email' />
                    </div>
                    <div>
                        <label id='mobile'>Mobile</label>
                        <input placeholder='Enter Mobile Number' />
                    </div>
                    <div>
                        <label id='address'>Address</label>
                        <input placeholder='Enter Address' />
                    </div>
                    <div>
                        <button><span className='las la-save'></span>Save</button>
                        <button><span className='las la-times' onClick={(e) => { e.preventDefault(); props.setTrigger(false) }}></span>Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default EditProfile;