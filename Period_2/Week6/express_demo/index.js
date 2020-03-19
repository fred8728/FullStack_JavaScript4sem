const express = require("express");
const app = express();
const Joi = require("joi"); //returns a class
app.use(express.json());

//nodemon fil --> stop process ctrl c n
const courses = [
  { id: 1, name: "Datamatiker" },
  { id: 2, name: "Økonom" },
  { id: 3, name: "Finansøkonom" },
  { id: 4, name: "Webudvikler" },
  { id: 5, name: "SoftwareUdvikler" }
];

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/api/courses", (request, response) => {
  response.send(courses);
});

app.post("/api/courses", (request, response) => {
  const { error } = validateCourse(request.body); //result.error object destructuring
  if (error) return response.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: request.body.name
  };
  courses.push(course);
  response.send(course);
});

app.put("/api/courses/:id", (request, response) => {
  //Look up the course
  // if not existing, return 404
  const course = courses.find(c => c.id === parseInt(request.params.id));
  if (!course)
    return response
      .status(404)
      .send("The course with the given ID was not found");

  //Validate
  //if invalid, return 404 - bad request
  const { error } = validateCourse(request.body); //result.error object destructuring
  if (error) return response.status(400).send(error.details[0].message);

  // update course
  course.name = request.body.name;
  //return the updated course
  response.send(course);
});

app.delete("/api/courses/:id", (request, response) => {
  // Look up the course
  //Not existing, return 404
  const course = courses.find(c => c.id === parseInt(request.params.id));
  if (!course)
    return response
      .status(404)
      .send("The course with the given ID was not found");

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // return the same course
  response.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

app.get("/api/courses/:id", (request, response) => {
  const course = courses.find(c => c.id === parseInt(request.params.id));
  if (!course)
    return response
      .status(404)
      .send("The course with the given ID was not found");
  response.send(course);
});

app.get("/api/posts/:year/:month", (request, response) => {
  response.send(request.params);
});

//PORT --> set evn PORT by typing ' set PORT = number ' in terminal
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
