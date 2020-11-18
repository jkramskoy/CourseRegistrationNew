﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CourseRegistrationNew.Models;

namespace CourseRegistrationNew.Models
{
    public class Courses
    {
        public Courses()
        {
        }

        [Key]
        public int CourseID { get; set; }
        public string CourseNumber { get; set; }

        [StringLength(50, MinimumLength = 3)]
        public string CourseName { get; set; }

        [StringLength(50, MinimumLength = 3)]
        public string CourseDescription { get; set; }

        public List<CoursesStudents> StudentsList { get; set; }
        public List<Instructors> Instructors { get; set; }
    }
}