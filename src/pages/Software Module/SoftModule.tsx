import React, { useState } from 'react'
import './SoftModule.scss'
import DataTable, { TableColumn } from 'react-data-table-component';
import AddSoft from '../../components/Add Software Module/AddSoft';
const SoftModule = () => {
    const[popup,setPopup]=useState(false);

    interface DataRow {
        name: string,
        sw_version: string,
        last_updated: string,
        modified_by: string

    }
    const column: TableColumn<DataRow>[] = [
        {
            name: 'ECU Name',
            selector: row => row.name,
        },
        {
            name: 'SW Version',
            selector: row => row.sw_version,
        },
        {
            name: 'Last Updated',
            selector: row => row.last_updated,
        },
        {
            name: 'Modified By',
            selector: row => row.modified_by,
        }
    ]
    const data = [
        {
            id: 1,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 2,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 3,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 4,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 5,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 6,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 7,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 8,
            name: 'Battery',
            sw_version: 'soft 8',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 9,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 10,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 11,
            name: 'Battery',
            sw_version: 'soft 1',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        },
        {
            id: 12,
            name: 'Battery',
            sw_version: 'soft 12',
            last_updated: '12/05/2021',
            modified_by: 'Ankush'
        }
    ]

    return (
        <div className='soft_container'>
            {/* <div className=' heading_font heading_color heading'>
                <h3>Software Module</h3>
                <div className='search_bar'>
                    <i className="las la-search"></i><input placeholder='Search Module' type='search' />
                </div>
            </div> */}
            <div className='card '>
                <div className='card_heading heading_color'>
                    <h4>Software Module List</h4>
                    <span ><i className="las la-plus" onClick={(e)=>setPopup(true)}></i></span>
                </div>
                <DataTable
                    className='datatable_component'
                    columns={column}
                    data={data}
                    pointerOnHover
                    highlightOnHover
                    responsive={true}
                    pagination
                    fixedHeader
                    // fixedHeaderScrollHeight='40vh'
                    // selectableRows
                />
            </div>
{popup ? <AddSoft trigger={popup} setTrigger={setPopup}/> :<></>}
        </div>
    )
}

export default SoftModule;