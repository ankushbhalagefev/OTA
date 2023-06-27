import React, { useEffect, useState, MouseEvent } from 'react'
import './EcuManagement.scss'
import DataTable, { TableColumn } from 'react-data-table-component';
import AddEcu from '../../components/AddEcu/AddEcu';
import Ecu from '../../Model/Ecu'
const EcuManagement = () => {
    const [popup, setPopup] = useState(false);
    const [currentRow, setCurrentRow] = useState<Ecu | null>(null);
    const [ecuData, setEcuData] = useState<Ecu[]>([]);
    const addEcu = (newEcu: Ecu) => {
        console.log('ecu added');
        setEcuData((prevEcuList) => [...prevEcuList, newEcu]);
    };
    interface linkedEcuDataRow {
        ecuName: string,
        swVersion: string,
        hwVersion: string
    }
    const editEcu=async(id:string)=>{
         
    }
    const deleteEcu = async (id:string) => {
       console.log(id);

        try { 
            const response =await fetch(`http://localhost:8080/api/v1/ecus/${id}`,{
                method:'DELETE'
            })
            const data=await response.json();
            console.log(data);
            if(data.status==='success'){
                setEcuData((prevEcuList) => prevEcuList.filter((ecu) => ecu.id !== id));
                console.log(data.message)
            }
        }
        catch (error) {

        }
    }

    const columnLinkedECU: TableColumn<linkedEcuDataRow>[] = [
        {
            name: 'ECU Name',
            selector: row => row.ecuName,
        },
        {
            name: 'SW Version',
            selector: row => row.swVersion,
        },
        {
            name: 'Last Updated',
            selector: row => row.hwVersion,
        },

        {
            name: 'Action',
            cell: (row) => (
                <div className='action'><i className="las la-pencil-alt"></i><i className="las la-trash"></i> </div>
            )
        }
    ]


    const column: TableColumn<Ecu>[] = [
        {
            name: 'ECU Name',
            selector: row => row.ecuName,
        },
        {
            name: 'SW Version',
            selector: row => row.swVersion,
        },
        {
            name: 'SW Version',
            selector: row => row.hwVersion,
        },

        {
            name: 'Modified By',
            selector: row => row.description,
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='action'><i className="las la-link"></i><i className="las la-pencil-alt" onClick={()=>editEcu(row.id)}></i><i className="las la-trash" onClick={()=>deleteEcu(row.id)}></i> </div>
            )
        }
    ]

    const customStyle = {
        rows: {
            style: {
                fontSize: "25px",

            }
        }
    }

    const expand = (row: any) => {
        return (
            <>
                <div className='expanded_row'>
                    <div className='expanded_table'>
                        <DataTable
                            className='linked_datatable_component'
                            columns={columnLinkedECU}
                            data={ecuData}
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
    useEffect(() => {
        fetchEcuData();
    }, []);
    const fetchEcuData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/ecus');
            const data = await response.json();
            setEcuData(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    };
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
                    data={ecuData}
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
            {popup ? <AddEcu trigger={popup} setTrigger={setPopup} onEcuAdded={addEcu} /> : <></>}
        </div>
    )
}

export default EcuManagement;