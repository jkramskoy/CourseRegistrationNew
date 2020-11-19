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
            //StudentId=1&CourseId=3 

            _context.CoursesStudents
                .Add(new CoursesStudents 
                    { 
                        StudentID = studentId, 
                        CourseID = courseId 
                    });

            _context.SaveChanges();

            return RedirectToAction("Edit", "Student", new { id = studentId } );

        }

        // GET: CoursesStudents
        public async Task<IActionResult> Index()
        {
            var dbContextCourse = _context.CoursesStudents.Include(c => c.Course).Include(c => c.Student);
            return View(await dbContextCourse.ToListAsync());
        }

        // GET: CoursesStudents/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coursesStudents = await _context.CoursesStudents
                .Include(c => c.Course)
                .Include(c => c.Student)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (coursesStudents == null)
            {
                return NotFound();
            }

            return View(coursesStudents);
        }

        // GET: CoursesStudents/Create
        public IActionResult Create()
        {
            ViewData["CourseID"] = new SelectList(_context.Courses, "CourseID", "CourseID");
            ViewData["StudentID"] = new SelectList(_context.Students, "StudentID", "FirstName");
            return View();
        }

        // POST: CoursesStudents/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,CourseID,StudentID")] CoursesStudents coursesStudents)
        {
            if (ModelState.IsValid)
            {
                _context.Add(coursesStudents);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CourseID"] = new SelectList(_context.Courses, "CourseID", "CourseID", coursesStudents.CourseID);
            ViewData["StudentID"] = new SelectList(_context.Students, "StudentID", "FirstName", coursesStudents.StudentID);
            return View(coursesStudents);
        }

        // GET: CoursesStudents/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coursesStudents = await _context.CoursesStudents.FindAsync(id);
            if (coursesStudents == null)
            {
                return NotFound();
            }
            ViewData["CourseID"] = new SelectList(_context.Courses, "CourseID", "CourseID", coursesStudents.CourseID);
            ViewData["StudentID"] = new SelectList(_context.Students, "StudentID", "FirstName", coursesStudents.StudentID);
            return View(coursesStudents);
        }

        // POST: CoursesStudents/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,CourseID,StudentID")] CoursesStudents coursesStudents)
        {
            if (id != coursesStudents.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(coursesStudents);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CoursesStudentsExists(coursesStudents.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CourseID"] = new SelectList(_context.Courses, "CourseID", "CourseID", coursesStudents.CourseID);
            ViewData["StudentID"] = new SelectList(_context.Students, "StudentID", "FirstName", coursesStudents.StudentID);
            return View(coursesStudents);
        }

        // GET: CoursesStudents/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coursesStudents = await _context.CoursesStudents
                .Include(c => c.Course)
                .Include(c => c.Student)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (coursesStudents == null)
            {
                return NotFound();
            }

            return View(coursesStudents);
        }

        // POST: CoursesStudents/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var coursesStudents = await _context.CoursesStudents.FindAsync(id);
            _context.CoursesStudents.Remove(coursesStudents);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CoursesStudentsExists(int id)
        {
            return _context.CoursesStudents.Any(e => e.ID == id);
        }
    }
}
