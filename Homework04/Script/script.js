
// There is a JSON file with students. Make a call to the file and get the following data from it:

// For every student log the following sentence: "FULL_NAME is comming from CITY, he is AGE years old and he is FAILING/PASSING the class" (FILING if his average greade is 1, PASSING if it's 2 or more).
// All male students that are not from Skopje
// All female students that are not under 18 years old.
// The average age of the students.
// All female students with a last name ending with A.


fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json')
    .then(res => res.json())
    .then(students => {
        // console.log(studentsLogIn(students));
        //  console.table(allMaleStudents(students));
        //  console.table(allStudents18(students));
        // console.log(averageAgeStudents(students));
         console.log(femStudentsLastNameA(students));
    })
    .catch(err => console.error(err))

    let studentsLogIn = students => students.filter(student => student.averageGrade).map(student => `${student.firstName} ${student.lastName} is comming from ${student.city}, he is ${student.age} years old and he is ${student.averageGrade === 1 ? 'FAILD' : 'PASSED'} the class`);

    let allMaleStudents = students => students.filter(student => student.gender === 'Male' && student.city !== 'Skopje');

    let allStudents18 = students => students.filter(student => student.gender === 'Female' && student.age >= 18 );

    let averageAgeStudents = students => students.map(student => student.age).reduce((sum, avAge) => sum + avAge / students.length,0);

    let femStudentsLastNameA = students => students.filter(student => student.gender === 'Female' && student.lastName.endsWith('a'));