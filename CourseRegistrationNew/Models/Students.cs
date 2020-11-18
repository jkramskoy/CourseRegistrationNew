using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CourseRegistrationNew.Models;

namespace CourseRegistrationNew.Models
{
    public class Students
    {
        public Students()
        {

        }

        [Key]
        public int StudentID { get; set; }
        [Required]
        [Display(Name = "First Name")]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Required]
        [Display(Name = "Last Name")]
        [StringLength(50)]
        public string LastName { get; set; }
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string EmailAddress { get; set; }
        [Phone(ErrorMessage = "Invalid Telephone number")]
        public string PhoneNumber { get; set; }

        // acording to data studenr can take few corses
        public List<CoursesStudents> CoursesList { set; get; }
    }
}
