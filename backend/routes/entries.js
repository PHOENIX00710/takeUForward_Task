import express from 'express'
import { addNewEntry, getAllEntriesHelper } from '../controllers/entries.js'

const router=express.Router()

router.get("/getAllEntries",getAllEntriesHelper)
router.post("/makeNewEntry",addNewEntry)

export default router