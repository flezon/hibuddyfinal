const { Router } = require('express')
const router = Router()

const tablesCtrl = require('../controllers/tables.js')

router.get('/', tablesCtrl.getTables)

router.post('/', tablesCtrl.createTables)

router.post('/:id/orders', tablesCtrl.createNewOrder)
router.get('/:id/orders', tablesCtrl.getNewOrder)
router.put('/:id', tablesCtrl.editTables)

router.delete('/:id', tablesCtrl.deleteTables)

module.exports = router