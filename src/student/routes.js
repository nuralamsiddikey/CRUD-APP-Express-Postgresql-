const router = require('express').Router()
const controller = require('./controller')

router.get('/',controller.getStudents)
router.post('/',controller.addStudent)
router.delete('/:id',controller.deleteStudent)
router.put('/:id',controller.updateStudent)
router.get('/:id',controller.getStudentById)

module.exports = router  