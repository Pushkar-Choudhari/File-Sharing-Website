import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { uploadFile, getFiles } from '../services/api';
import { useParams } from "react-router-dom"
import File from "../components/File"

export default function Files() {
    const [file, setFile] = useState('');
    const [files, setFiles] = useState([]);
    let params = useParams()

    const getFileData = async () => {
        //get all the file data of the current user
        const response = await getFiles(params.id)
        setFiles(response.data)
    }

    const fileInputRef = useRef();
    useEffect(() => {

        const getImage = async () => {
            //upload File to the database
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                const response = await uploadFile(data, params.id);
                getFileData()
            }
        }

        getImage();

    }, [file])


    useEffect(() => {
        getFileData()
    }, [])


    const getUserFiles = () => {
        //displays all the files on the page
        return (files.map((f) => <File fileName={f.fileName} fileId={f._id} userID={f.userID} path={f.path} setFiles={setFiles}></File>))
    }


    const onUploadClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div className='wrapper'>
            <h1>Your Files</h1>
            <div>
                {getUserFiles()}
            </div>
            <h1>Upload New File</h1>
            <p>Upload and share the download link.</p>

            <button onClick={() => onUploadClick()}>Upload</button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
            />

        </div>

    )
}
