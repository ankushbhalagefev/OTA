import React, { useState, ChangeEvent } from 'react'
import './AddSoft.scss'
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
type prop = {
  trigger: boolean,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}
const AddSoft = (props: prop) => {
  const [image, setImage] = useState<any | null>();
  const [fileName, setFileName] = useState("No Selected File")


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const handleDelete = () => {
    setFileName('No selected File');
    setImage(null);
  };

  const handleClick = () => {
    const inputField = document.querySelector('.input-field') as HTMLInputElement;
    if (inputField) {
      inputField.click();
    }
  };


  return (
    <div className='add_soft_container'>
      <div className='card'>
        <h3>Add Software Module</h3>
        <div className='soft_form'>
          <form>
            <div>
              <label>Select ECU </label>
              <input type='select' placeholder='Select ECU' />
            </div>
            <div>
              <label>Software</label>
              <input type='text' placeholder='Software Version' />
            </div>

            <div className='file_input'>
              <form onClick={handleClick}>
                <input
                  type='file'
                  accept='image/*'
                  name=''
                  className='input-field'
                  hidden
                  onChange={handleFileChange}
                />
                {image ? (
                  <img src={image} width={250} height={50} alt={fileName} />
                ) : (
                  <>
                    <MdCloudUpload color='#1475cf' size={60} />
                    <p>Browse Files to Upload</p>
                  </>
                )}
              </form>
              <section>
                <AiFillFileImage color='#1475cf' />
                <span>
                  {fileName}
                  <MdDelete onClick={handleDelete} />
                </span>
              </section>
            </div>



            <div>
              <label id='description'>Description &nbsp; &nbsp;</label>
              <input type='text' placeholder='Description' id='description' />
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

export default AddSoft;