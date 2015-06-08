"use strict"
function Student(firstName, lastName)
{
	this.firstName = firstName
	this.lastName = lastName
	this.courses = []
}


Student.prototype.name = function()
{
	return this.firstName + " " + this.lastName
}

Student.prototype.getCourses = function()
{
	return this.courses 
}

Student.prototype.enroll = function(course)
{	
	if (this.courses.indexOf(course) == -1)
	{
		course.addStudent(this)
		this.courses.push(course)			
	}		
}

Student.prototype.courseLoad = function()
{
	var courseLoad = {}
	this.courses.forEach(function(course){
		var dpt = course.department
		courseLoad[dpt] = courseLoad[dpt] || 0
		courseLoad[dpt] +=course.numberCredits
	})
	return courseLoad
}

function Course(courseName, department, numberCredits)
{
	this.courseName = courseName
	this.department = department
	this.numberCredits = numberCredits
	this.students = []
}

Course.prototype.addStudent = function(student)
{
	this.students.push(student)
}

Course.prototype.getStudents = function()
{
	return this.students
}

Course.prototype.department = function()
{
	return this.department
}


// Course.prototype.conflictsWith = function(course)
// {

// }



var student1 = new Student("Nigel", "Leffler");
var course1 = new Course("101", "CS", 3);
var course2 = new Course("201", "CS", 3);
var course3 = new Course("301", "ENG", 3);
var course4 = new Course("401", "BIO", 3);
console.log(student1.name());
student1.enroll(course1);
student1.enroll(course3);
student1.enroll(course2);
console.log(student1.getCourses());

console.log(student1.courseLoad());
console.log(course1.getStudents())

// var course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
// var course2 = new Course("201", "CS", 3, ["wed"], 1);
// var course3 = new Course("301", "ENG", 3, ["tue"], 1);
// var course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
// console.log(student1.name());
// student1.enroll(course1);
// student1.enroll(course3);
// // student1.enroll(course2);
// console.log(student1.courseLoad());
// console.log('should be true = ' + course1.conflictsWith(course2));
// console.log('should be false = ' + course1.conflictsWith(course3));
// console.log('should be false = ' + course1.conflictsWith(course4)) ;