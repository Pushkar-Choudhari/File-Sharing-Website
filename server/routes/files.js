import  express  from "express";
import { upload } from "../utils/upload.js"
import { createFile, deleteFile, getUserFiles , downloadFile} from "../controllers/file.js";
const router = express.Router()



router.post('/create/:userID', upload.single('file'), createFile)

router.delete('/delete/:userID/:id', deleteFile)

router.get("/userfiles/:userID", getUserFiles)

router.get('/download/:fileId', downloadFile);


export default router;