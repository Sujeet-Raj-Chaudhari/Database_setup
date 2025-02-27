const express = require("express")
const router = express.Router()
const courseTemplateCopy = require("../models/coursetemplate")

router.post("/course", (request, response) => {
  const courses = new courseTemplateCopy({
    title: request.body.title,
    description: request.body.description,
    hours: request.body.hours,
    minute: request.body.minute,
    startDate: request.body.startDate,
  })

  courses.save()
  console.log(request.body)
  response.json(request.body)
})

router.get("/signin")
module.exports = router
