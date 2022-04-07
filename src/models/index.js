const user = require('./users.js')
const courses = require('./courses.js')
const roles = require('./roles.js')
const failed_jobs = require('./failed_jobs.js')
const lecturers = require('./lecturers.js')
const course_plan_references = require('./course_plan_references.js')

const models = {}

models.user = user
models.courses = courses
models.roles = roles
models.failed_jobs = failed_jobs
models.lecturers = lecturers
models.course_plan_references = course_plan_references

module.exports = models