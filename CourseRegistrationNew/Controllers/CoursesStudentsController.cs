using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CourseRegistrationNew.Models;

namespace CourseRegistrationNew.Controllers
{
    public class CoursesStudentsController : Controller
    {
        private readonly DbContextCourse _context;

        public CoursesStudentsController(DbContextCourse context)
        {
            _context = context;
        }
        public IActionResult AddCourse(int studentId, int courseId)
        {

              _context.CoursesStudents
                .Add(new CoursesStudents 
                    { 
                        StudentID = studentId, 
                        CourseID = courseId 
                    });

            _context.SaveChanges();

            return RedirectToAction("Edit", "Students", new { id = studentId } );

        }

        
       
        
    }
}
