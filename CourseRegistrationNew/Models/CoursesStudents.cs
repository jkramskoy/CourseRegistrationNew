using System;
using System.ComponentModel.DataAnnotations;

namespace CourseRegistrationNew.Models
{
    public class CoursesStudents
    {
        public CoursesStudents()
        {
        }

        [Key]
        public int ID { get; set; }
        [Required]
        public int CourseID { get; set; }
        [Required]
        public int StudentID { get; set; }
    }
}
