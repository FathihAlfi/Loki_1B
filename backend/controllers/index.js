const user = require('./users.js')
const courses = require('./courses.js')
const lecturers = require('./lecturers.js')
const course_los = require('./course_los.js')
const course_plan_references = require('./course_plan_references.js')
const course_plan_assessments = require('./course_plan_assessments.js')
const course_plan_details = require('./course_plan_details.js')
const auth = require('./auth.js')
const RPS = require('./RPS')
const mhs = require('./mhs.js')
const dosen = require('./dosen.js')
const admin = require('./admin.js')

const controllers = {}

controllers.user = user
controllers.courses = courses
controllers.lecturers = lecturers
controllers.course_los = course_los
controllers.course_plan_references = course_plan_references
controllers.course_plan_assessments = course_plan_assessments
controllers.course_plan_details = course_plan_details
controllers.auth = auth
controllers.RPS = RPS
controllers.mhs = mhs
controllers.dosen = dosen
controllers.admin = admin

module.exports = controllers