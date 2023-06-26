import React, { useState } from 'react'
import './EcuManagement.scss'
import DataTable, { TableColumn } from 'react-data-table-component';
import AddEcu from '../../components/AddEcu/AddEcu';
const EcuManagement = () => {
    const [popup, setPopup] = useState(false);
    const [currentRow, setCurrentRow] = useState<DataRow | null>(null);
    
    interface DataRow {
        name: string,
        sw_version: string,
        last_updated: string,
        modified_by: string

    }
    interface linkedEcuDataRow {
        name: string,
        sw_version: string,
        last_updated: string,


    }
    

    const columnLinkedECU: TableColumn<linkedEcuDataRow>[] = [
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
            name: 'Action',
            cell: (row) => (
                <div className='action'><i className="las la-pencil-alt"></i><i className="las la-trash"></i> </div>
            )
        }
    ]


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
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='action'><i className="las la-link"></i><i className="las la-pencil-alt"></i><i className="las la-trash"></i> </div>
            )
        }
    ]
    const ecudata = [
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
        // {
        //     id: 6,
        //     name: 'Battery',
        //     sw_version: 'soft 1',
        //     last_updated: '12/05/2021',
        //     modified_by: 'Ankush'
        // },
        // {
        //     id: 7,
        //     name: 'Battery',
        //     sw_version: 'soft 1',
        //     last_updated: '12/05/2021',
        //     modified_by: 'Ankush'
        // },
        // {
        //     id: 8,
        //     name: 'Battery',
        //     sw_version: 'soft 8',
        //     last_updated: '12/05/2021',
        //     modified_by: 'Ankush'
        // },
        // {
        //     id: 9,
        //     name: 'Battery',
        //     sw_version: 'soft 1',
        //     last_updated: '12/05/2021',
        //     modified_by: 'Ankush'
        // },
        // {
        //     id: 10,
        //     name: 'Battery',
        //     sw_version: 'soft 1',
        //     last_updated: '12/05/2021',
        //     modified_by: 'Ankush'
        // },
        // {
        //     id: 11,
        //     name: 'Battery',
        //     sw_version: 'soft 1',
        //     last_updated: '12/05/2021',
        //     modified_by: 'Ankush'
        // },
        // {
        //     id: 12,
        //     name: 'Battery',
        //     sw_version: 'soft 12',
        //     last_updated: '12/05/2021',
        //     modified_by: 'Ankush'
        // }
    ]
   
    const customStyle={
        rows:{
            style:{
                fontSize:"25px",
                // backgroundColor:"black"
                
            }
        }
    }

    const expand = (row: any) => {
                return (
            <>
            <div className='expanded_row'>
                {/* <div className='link_ecu_head'>
                    <h2>Linked ECU to Battery</h2>
                    <span className='las la-unlink'></span>
                </div> */}
                <div className='expanded_table'>
                <DataTable
                    className='linked_datatable_component'
                    columns={columnLinkedECU}
                    data={ecudata}
                    pointerOnHover
                    highlightOnHover
                    responsive={true}
                    pagination
                    fixedHeader
                   
                    customStyles={customStyle}
                    // selectableRows
                   />
                   </div>
                   </div>
                   </>
        )


    }
    return (
        <div className='ecu_container'>


            <div className='ecu_card'>
                <div className='card_heading heading_color'>
                    <h4>ECU List</h4>
                    <span ><i className="las la-plus" onClick={(e) => { e.preventDefault(); setPopup(true) }}></i></span>
                </div>
                <DataTable
                    className='datatable_component'
                    columns={column}
                    data={ecudata}
                    pointerOnHover
                    highlightOnHover
                    responsive={true}
                    pagination
                    fixedHeader
                    expandableRows
                    expandOnRowClicked
                    expandableRowsComponent={(row) => expand(row)}
                    expandableRowExpanded={(row) => (row === currentRow)}
                   
                    onRowExpandToggled={(bool, row) => setCurrentRow(row)}
                />
            </div>
            {popup ? <AddEcu trigger={popup} setTrigger={setPopup} /> : <></>}
        </div>
    )
}

export default EcuManagement;