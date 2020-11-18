using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CourseRegistrationProgram.Models
{
    public class Instructors
    {
        public Instructors()
        {
        }

        [Key]
        public int InstructorId { get; set; }
        [Required]
        [Display(Name = "First Name")]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Required]
        [Display(Name = "Last Name")]
        [StringLength(50)]
        public string LastName { get; set; }
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }
        public string Course { get; set; }

        [ForeignKey("CourseId")]
        //public virtual int CourseID { set; get; }
        public Courses Courses { set; get; }


    }
}