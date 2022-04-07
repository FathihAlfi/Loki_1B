const user = require('./users.js')
const courses = require('./courses.js')
const roles = require('./roles.js')
const failed_jobs = require('./failed_jobs.js')
const lecturers = require('./lecturers.js')
const course_plan_references = require('./course_plan_references.js')

const controllers = {}
controllers.user = user
controllers.courses = courses
controllers.roles = roles
controllers.failed_jobs = failed_jobs
controllers.lecturers = lecturers
controllers.course_plan_references = course_plan_references

module.exports = controllers