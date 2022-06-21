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
const course_plan_lecturers = require('./course_plan_lecturers.js')
const course_los = require('./course_los.js')
const curriculum_los = require('./curriculum_los.js')
const curricula = require('./curricula.js')
const curriculum_profiles = require('./curriculum_profiles.js')
const course_requirements = require('./course_requirements.js')
const course_plan_detail_outcomes = require('./course_plan_detail_outcomes.js')
const course_plan_detail_refs = require('./course_plan_detail_refs.js')
const course_plan_details = require('./course_plan_details.js')
const course_plan_assessments = require('./course_plan_assessments.js')
const course_plans = require('./course_plans.js')
const course_lo_details = require('./course_lo_details.js')

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
models.course_plan_lecturers = course_plan_lecturers
models.course_los = course_los
models.curriculum_los = curriculum_los
models.curricula = curricula
models.curriculum_profiles = curriculum_profiles
models.course_requirements = course_requirements
models.course_plan_detail_outcomes = course_plan_detail_outcomes
models.course_plan_detail_refs = course_plan_detail_refs
models.course_plan_details = course_plan_details
models.course_plan_assessments = course_plan_assessments
models.course_plans = course_plans
models.course_lo_details = course_lo_details

course_plans.hasMany(course_plan_lecturers, {
    foreignKey : 'course_plan_id', 
    // onDelete : 'CASCADE',
    // onUpdate : 'CASCADE'
    })
course_plan_lecturers.belongsTo(course_plans, {foreignKey : 'course_plan_id'})


module.exports = models