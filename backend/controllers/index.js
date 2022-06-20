const user = require('./users.js')
const courses = require('./courses.js')


const lecturers = require('./lecturers.js')
const course_plan_references = require('./course_plan_references.js')

const auth = require('./auth.js')
const RPS = require('./RPS')
const mhs = require('./mhs.js')
const dosen = require('./dosen.js')

const controllers = {}

controllers.user = user
controllers.courses = courses


controllers.lecturers = lecturers
controllers.course_plan_references = course_plan_references

controllers.auth = auth
controllers.RPS = RPS
controllers.mhs = mhs
controllers.dosen = dosen

module.exports = controllers