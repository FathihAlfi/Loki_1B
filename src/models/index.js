const user = require('./users.js')
const courses = require('./courses.js')
const roles = require('./roles.js')
const failed_jobs = require('./failed_jobs.js')
const lecturers = require('./lecturers.js')
const course_plan_references = require('./course_plan_references.js')
const role_has_permissions = require('./role_has_permissions.js')
const permissions = require('./permissions.js')
const password_resets = require('./password_resets.js')
const model_has_permissions = require('./model_hal_permissions.js')
const migrations = require('./migrations.js')

const models = {}

models.user = user
models.courses = courses
models.roles = roles
models.failed_jobs = failed_jobs
models.lecturers = lecturers
models.course_plan_references = course_plan_references
models.role_has_permissions = role_has_permissions
models.permissions = permissions
models.password_resets = password_resets
models.model_has_permissions = model_has_permissions
models.migrations = migrations

module.exports = models