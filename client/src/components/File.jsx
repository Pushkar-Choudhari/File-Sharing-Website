import React from 'react'
import { deleteFile, getFiles } from '../services/api'
const API_URI = 'http://localhost:8800';

export default function File({ fileName, fileId, userID, path, setFiles }) {
    console.log(fileId)

    const copyLink = () => {
        //copy link on button press
        navigator.clipboard.writeText(`${API_URI}/files/download/${fileId}`)
    }


    const deleteFileButton = async () => {
        //delete file on button press
        const response = await deleteFile(userID, fileId)
        const getFileData = async () => {
            const response = await getFiles(userID)
            setFiles(response.data)
        }
        getFileData()
        //to reload the Files page with updated files
    }


    return (
        <div className='file'>
            <div className='fileName'>{fileName}</div>
            <div>
                <button onClick={copyLink} className='bu'>Link</button>
                <button onClick={deleteFileButton}>Delete</button>
            </div>
        </div>
    )
}
