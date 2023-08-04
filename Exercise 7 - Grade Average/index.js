function makeGradesAverage(mathGrade, scienceGrade, geographyGrade) {
    const mathGrade = +prompt('Enter the Math grade')
    const scienceGrade = +prompt('Enter the Science grade')
    const geographyGrade = +prompt('Enter the Geography grade')

    const grades = mathGrade + scienceGrade + geographyGrade;
    const average = grades / 3;
    return average;
}

const result = makeGradesAverage(mathGrade, scienceGrade, geographyGrade);

document.getElementById('label').textContent = 'The average of the grades is: ';
document.getElementById('result').textContent = result.toString();