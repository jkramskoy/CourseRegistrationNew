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
        [RegularExpression(@"^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$",
            ErrorMessage = "Invalid Email Format")]
        public string EmailAddress { get; set; }
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
            ErrorMessage = "Not a valid phone number")]
        public string PhoneNumber { get; set; }

        // acording to data studenr can take few corses
        public List<CoursesStudents> CoursesList { set; get; }
    }

}
