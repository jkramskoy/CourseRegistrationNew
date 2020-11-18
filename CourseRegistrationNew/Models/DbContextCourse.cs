using System;
using CourseRegistrationProgram.Models;
using Microsoft.EntityFrameworkCore;

namespace CourseRegistrationNew.Models
{
    public class DbContextCourse: DbContext
    {
        public DbContextCourse(DbContextOptions<DbContextCourse> options)
            : base(options)
        {
        }

        public DbSet<Students> Students { get; set; }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<Instructors> Instructors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(@"server=localhost;user=root;password=amy251202;database=CourseRegistration");
        }


    }
}
