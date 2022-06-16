const { Router } = require('express')
const router = Router()

const tablesCtrl = require('../controllers/tables.js')

router.get('/', tablesCtrl.getTables)

router.post('/', tablesCtrl.createTables)

router.get('/:id', tablesCtrl.getTable)

router.put('/:id', tablesCtrl.editTables)

router.delete('/:id', tablesCtrl.deleteTables)

module.exports = router