const findTheOldest = function(people) {

    const currentYear = new Date().getFullYear();
    people.sort((a, b) => {
        return ((a.yearOfDeath || currentYear) - a.yearOfBirth) -
         ((b.yearOfDeath || currentYear) - b.yearOfBirth)
    });

    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
