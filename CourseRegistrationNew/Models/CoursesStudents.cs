using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

//bridge table
namespace CourseRegistrationNew.Models
{
    [Table("CoursesStudents")]
    public class CoursesStudents
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public int CourseID { get; set; }
        [Required]
        public int StudentID { get; set; }

        public Students Student { set; get; }
        public Courses Course { set; get; }


    }
}
