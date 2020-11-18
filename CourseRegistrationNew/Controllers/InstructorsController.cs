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
    public class InstructorsController : Controller
    {
        private readonly DbContextCourse _context;

        public InstructorsController(DbContextCourse context)
        {
            _context = context;
        }

        // GET: Instructors
        public async Task<IActionResult> Index()
        {
            /*List<Instructors> instructors = _context
               .Instructors
               .Include("Courses")
               .ToList();

            return View(instructors);
            */
           
            var listIstructors = await _context.Instructors.Include("Courses").ToListAsync();

            return View(listIstructors);
        }

        // GET: Instructors/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var instructors = await _context.Instructors
                .Include("Courses")
                .FirstOrDefaultAsync(m => m.InstructorId == id);
            if (instructors == null)
            {
                return NotFound();
            }

            return View(instructors);
        }

        // GET: Instructors/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Instructors/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("InstructorId,FirstName,LastName,EmailAddress,Course,CourseID")] Instructors instructors)
        {
            if (ModelState.IsValid)
            {
                _context.Add(instructors);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(instructors);
        }

        // GET: Instructors/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var instructors = await _context.Instructors
                .FindAsync(id);
            if (instructors == null)
            {
                return NotFound();
            }
            ViewData["Courses"] = _context.Courses.ToList();
            return View(instructors);
        }

        // POST: Instructors/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("InstructorId,FirstName,LastName,EmailAddress,CourseName")] Instructors instructors)
        {
            if (id != instructors.InstructorId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(instructors);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!InstructorsExists(instructors.InstructorId))
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
            return View(instructors);
        }

        // GET: Instructors/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var instructors = await _context.Instructors
                .FirstOrDefaultAsync(m => m.InstructorId == id);
            if (instructors == null)
            {
                return NotFound();
            }

            return View(instructors);
        }

        // POST: Instructors/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var instructors = await _context.Instructors.FindAsync(id);
            _context.Instructors.Remove(instructors);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool InstructorsExists(int id)
        {
            return _context.Instructors.Any(e => e.InstructorId == id);
        }
    }
}
