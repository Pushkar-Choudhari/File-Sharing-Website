import axios from 'axios';

const API_URI = 'http://localhost:8800';

export const uploadFile = async (data,userID) => {
    try {
        const response = await axios.post(`${API_URI}/files/create/${userID}`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}

export const getFiles = async (userID) => {
    try {
        const response = await axios.get(`${API_URI}/files/userfiles/${userID}`);
        return response;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}
export const deleteFile = async (userID, fileID) => {
    try {
        const response = await axios.delete(`${API_URI}/files/delete/${userID}/${fileID}`);
        return response;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}