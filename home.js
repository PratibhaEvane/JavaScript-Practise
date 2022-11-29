// calculate the percentage of five subjects
function percent() {
	let hindi = Number(prompt('hindi marks out of 100'));
	let english = Number(prompt('english marks out of 100'));
	let maths = Number(prompt('maths number out of 100'));
	let science = Number(prompt('Scince number out of 100'));
	let computer = Number(prompt('Computer number out of 100'));
	let percentage = ((hindi + english + maths + science + computer) / 500) * 100;
	// alert(percentage);
	document.getElementById('calculate').innerHTML = percentage + '%';
}
// Swap two numbers
function swap() {
	let num1 = prompt('enter first number');
	let num2 = prompt('enter second number');
	document.getElementById(
		'swap'
	).innerHTML = `value of numbers before swapping : ${num1}, ${num2}`;
	// let numForSwap;
	// numForSwap = num1;
	// num1 = num2;
	// num2 = numForSwap;
	[num1, num2] = [num2, num1];
	document.getElementById(
		'swap'
	).innerHTML = `value of numbers after swapping : ${num1}, ${num2}`;
}

// Find area of :
function areaOfCircle() {
	let r = prompt('enter the radius of circle');
	let area = 3.141 * r * r;
	document.getElementById(
		'findArea'
	).innerHTML = `area of given circle is ${area}`;
}
function areaOfTriangle() {
	let height = prompt('enter the height of triangle');
	let base = prompt('enter the base of triangle');
	let triangle = (1 / 2) * base * height;
	document.getElementById(
		'findArea'
	).innerHTML = `Area of given triangle is : ${triangle}`;
}
// program to print given format using single print function.
function print() {
	let txt1 = 'Code Better';
	let txt2 = '"Code Better"';
	let txt3 = "'Code Better'";
	document.getElementById('printCodeBetter').innerHTML =
		txt1 + '<br>' + txt2 + '<br>' + txt3;
}
// Q.3 Write a program to find out square of given number.
function findSqaureOfNumber() {
	let num = +prompt('Enter any number here');
	document.getElementById('findSqaureOfNumber').innerHTML = num * num;
}
// Q.5 Write a program to find out simple interest (SI).
function simpleInterest() {
	let p = +prompt('enter the Initaial Principle Balance (IPB)');
	let r = +prompt('enter the annual interest rate (AIR)');
	let t = +prompt('enter the time in years');
	let sI = (p * r * t) / 100;
	let totalAmount = p + sI;
	document.getElementById('simpleInterest').innerHTML =
		'Simple Interest is :' +
		sI +
		'Rs' +
		'<br> Total Amount is :' +
		totalAmount +
		'Rs';
}
// calculate sum of given digits number
function sumOfDigit() {
	let digit = parseInt(prompt('enter any digit'));
	let sum = 0;
	while (digit) {
		// sum = sum + (digit % 10)
		sum += digit % 10;
		digit = Math.floor(digit / 10);
	}
	document.getElementById('sumOfDigit').innerHTML = 'The sum is : ' + sum;
}
// Q.6 Write a program to find gross salary
function grossSalary() {
	let bs = +prompt('enter your basic salary "BS"');
	let hRA = +prompt('enter your HRA (House Rent Allowencde)');
	let da = +prompt('enter your DA (Daily Allowence)');
	let pf = +prompt('enter your PF (Provident Fund)');
	let gs = bs + hRA + da - pf;
	document.getElementById('grossSalary').innerHTML =
		'Your Gross Salary is :' + gs + ' Rs';
}
// program accepts three numbers from user and calculate average of given three numbers.
function averageOfNumbers() {
	let num1 = +prompt('enter first number');
	let num2 = +prompt('enter second number');
	let num3 = +prompt('enter third number');
	document.getElementById('averageOfNumbers').innerHTML =
		num1 + num2 + num3 / 3;
}
// program accepts 4 digits no. and display the no. in reverse order.
function reverseOrder() {
	let num = +prompt('enter any digit number');
	let nuM = num;
	let rem;
	let reverse = 0;
	while (num > 0) {
		rem = parseInt(num % 10);
		reverse = reverse * 10 + rem;
		num = parseInt(num / 10);
	}
	document.getElementById('reverseOrder').innerHTML =
		'Given Number :' + nuM + '<br> Reverse Number :' + reverse;
}
// count number of notes (rupees) in given amount
function numberOfNotes() {
	let amount = +prompt('enter any amount in Rs');
	let givenAmount = amount;
	let notes = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];
	let noteCounter = Array(10).fill(0);
	for (let i = 0; i < 10; i++) {
		if (amount >= notes[i]) {
			noteCounter[i] = Math.floor(amount / notes[i]);
			amount = amount % notes[i];
		}
	}

	for (let i = 0; i < 10; i++) {
		if (noteCounter[i] != 0) {
			document.getElementById('numberOfNotes').innerHTML =
				notes[i] + ' : ' + noteCounter[i] + '<br/>';
			console.log(notes[i] + ' = ' + noteCounter[i] + '<br/>');
		}
	}
	document.getElementById('numberOfNotes').innerHTML =
		'Currency Count =' + '<br/>';
	console.log('Gievn amount =' + givenAmount + '<br>');
}
// calculates first number is divisible by second or not.
function numberIsDivisible() {
	let num1 = +prompt('enter first number');
	let num2;
	if (num1 > 0) {
		num2 = +prompt('enter second number');
		if (num2 <= num1) {
			if (num1 % num2 == 0) {
				document.getElementById('numberIsDivisible').innerHTML =
					'Number is Divisible';
			} else {
				document.getElementById('numberIsDivisible').innerHTML =
					'Number is not divisible';
			}
		} else {
			alert('Please enter valid number');
		}
	} else {
		alert('Please Enter valid number');
	}
}
// given number is even or odd
function evenOdd() {
	let num = +prompt('Enter any Number');
	if (num % 2 == 0) {
		document.getElementById('evenOdd').innerHTML = 'Given number is <b> Even';
	} else {
		document.getElementById('evenOdd').innerHTML = 'Given number is <b> ODD';
	}
}
// calculate biggest number out of two numbers.
function biggestNumber() {
	let num1 = +prompt('enter first number');
	let num2 = +prompt('enter second number');
	document.getElementById('biggestNumber').innerHTML = Math.max(num1, num2);
}
// calculate biggest number out of three numbers.
function biggestNumberAmongThree() {
	let num1 = +prompt('enter first number');
	let num2 = +prompt('enter second number');
	let num3 = +prompt('enter third number');
	document.getElementById('biggestNumberAmongThree').innerHTML = Math.max(
		num1,
		num2,
		num3
	);
}
// given number is palindrome number or not.
function palindromeNumber() {
	let userGivenNumber = +prompt('enter any number');
	let givenNumber = userGivenNumber;
	let reverse = 0;
	let lastDigit;
	while (userGivenNumber > 0) {
		lastDigit = userGivenNumber % 10;
		reverse = reverse * 10 + lastDigit;
		userGivenNumber = parseInt(userGivenNumber / 10);
	}
	if (reverse == givenNumber) {
		document.getElementById('palindromeNumber').innerHTML =
			'given number is<b> Palindrom number';
	} else {
		document.getElementById('palindromeNumber').innerHTML =
			'given number is not <b> Palindrom number';
	}
}
//draw triangle shape using combination of loops
function triangleShape() {
	window.open('./triangleShape.html');
}
//given number is Armstrong number or not.
function armstrongNumber() {
	let userInput = prompt('enter any number');
	let givenNumber = userInput;
	let numberOfDigit = userInput.length;
	let reminder;
	let sum = 0;
	while (userInput > 0) {
		reminder = userInput % 10;
		sum += reminder ** numberOfDigit;
		userInput = parseInt(userInput / 10);
	}
	if (sum == givenNumber) {
		document.getElementById('armstrongNumber').innerHTML =
			'given number is<b> Armstrong number';
	} else {
		document.getElementById('armstrongNumber').innerHTML =
			'given number is not <b> Armstrong number';
	}
}
// check biggest & smallest digit of given number.
function biggestDigit() {
	let num = +prompt('enter any number');
	let userInput = num;
	let largestNum = 0;
	let smallest = 9;
	while (num > 0) {
		let rem = num % 10;
		largestNum = Math.max(rem, largestNum);
		smallest = Math.min(rem, smallest);
		num = parseInt(num / 10);
	}
	document.getElementById('biggestDigit').innerHTML =
		'Given Digit :' +
		userInput +
		'<br> Largest Number :' +
		largestNum +
		'<br> Smallest Number :' +
		smallest;
}
//person is eligible for voting or not
function eligibleForVoting() {
	let age = +prompt('enter your age');
	if (age >= 18) {
		document.getElementById('eligibleForVoting').innerHTML =
			'You are eligible for Voting.';
	} else {
		document.getElementById('eligibleForVoting').innerHTML =
			'You are not eligible for voting';
	}
}
//calculate whether it is positive or negative or zero
function checkTheNumber() {
	let number = +prompt('enter any number');
	if (Math.sign(number) == 1) {
		document.getElementById('checkTheNumber').innerHTML =
			'Given number ' + number + ' is <b> Positive.';
	}
	if (Math.sign(number) == -1) {
		document.getElementById('checkTheNumber').innerHTML =
			'Given number ' + number + ' is <b> Negative.';
	}
	if (Math.sign(number) == 0) {
		document.getElementById('checkTheNumber').innerHTML =
			'Given number ' + number + ' is <b> Zero.';
	}
}
//character is in lowercase or uppercase.
function checkCharacter() {
	let character = prompt('enter any string or character');
	if (character.length == 1) {
		if (character.toLowerCase() === character) {
			document.getElementById('checkCharacter').innerHTML =
				character + '   ' + 'is in lowercase';
		}
		if (character.toUpperCase() === character) {
			document.getElementById('checkCharacter').innerHTML =
				character + '  ' + 'is in uppercase';
		}
	} else {
		alert('please enter valid character');
	}
}
//calculate whether year is leap year or not.
function leapYear() {
	let year = prompt('enter any year');
	if (year.length == 4) {
		// year % 4 == 0
		// 	? console.log('this is leap year')
		// 	: console.log('not a leap year');
		if (year % 4 == 0) {
			document.getElementById('leapYear').innerHTML =
				'given year' + '  ' + year + '  ' + 'is <b> Leap year';
		} else {
			document.getElementById('leapYear').innerHTML =
				'given year' + '  ' + year + '  ' + 'is <b> Not Leap year';
		}
	} else {
		alert('please enter valid year');
	}
}
//whether a character isvowel or consonant
function vowelConsonant() {
	let character = prompt('enter any string or character');

	if (character.length == 1) {
		switch (character) {
			case 'a':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'A':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'e':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'E':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'i':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'I':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'o':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'O':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'u':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;
			case 'U':
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is vowel';
				break;

			default:
				document.getElementById('vowelConsonant').innerHTML =
					'Given character ' + '' + character + '' + ' is consonent';
		}
	}
}
//Program to show day of week according to user input
// function showDay(){

// }
//Show the grade accoding to percentage of 5 marks
function showGrade() {
	let hindi = +prompt('enter Hindi Marks out of 100');
	if (hindi <= 100 && hindi.length != 0) {
		let english = +prompt('enter english marks out of 100');
		if (english <= 100 && english.length != 0) {
			let maths = +prompt('enter maths marks out of 100');
			if (maths <= 100 && maths.length != 0) {
				let scince = +prompt('enter scince marks  out 0f 100');
				if (scince <= 100 && scince.length != 0) {
					let computer = +prompt('enter computer marks out of 100');
					if (computer <= 100 && computer.length != 0) {
						let totalMarks = hindi + english + maths + scince + computer;
						let percentage = (totalMarks / 500) * 100;
						// document.getElementById('showGrade').innerHTML =
						// 	'Percentage :  ' + '<b>' + percentage + '%';
						switch (true) {
							case percentage >= 90 && percentage < 100:
								document.getElementById('showGrade').innerHTML =
									'Percentage :  ' +
									'<b>' +
									percentage +
									'%' +
									'</b><br> Grade :' +
									'<b> A+';
								break;
							case percentage >= 80 && percentage < 89:
								document.getElementById('showGrade').innerHTML =
									'Percentage :  ' +
									'<b>' +
									percentage +
									'%' +
									'</b><br> Grade :' +
									'<b> A';
								break;
							case percentage >= 70 && percentage < 79:
								document.getElementById('showGrade').innerHTML =
									'Percentage :  ' +
									'<b>' +
									percentage +
									'%' +
									'</b><br> Grade :' +
									'<b> B';
								break;
							case percentage >= 60 && percentage < 69:
								document.getElementById('showGrade').innerHTML =
									'Percentage :  ' +
									'<b>' +
									percentage +
									'%' +
									'</b><br> Grade :' +
									'<b> c';
								break;
							case percentage >= 60 && percentage < 69:
								document.getElementById('showGrade').innerHTML =
									'Percentage :  ' +
									'<b>' +
									percentage +
									'%' +
									'</b><br> Grade :' +
									'<b> D';
								break;
							default:
								document.getElementById('showGrade').innerHTML = 'You are Fail';
						}
					}
				} else {
					alert('please enter correct marks');
				}
			} else {
				alert('please enter correct marks');
			}
		} else {
			alert('please enter correct marks');
		}
	} else {
		alert('please enter correct marks');
	}
}
// program for generating electricity Bill
function generateElectricityBill() {
	let currentMonthUnit = +prompt(
		'enter last four digit of current month reading'
	);
	let lastMonthUnit = +prompt('Enter last four digit of last month reading');
	if (currentMonthUnit.length == 4 && lastMonthUnit.length == 4) {
		let unit = currentMonthUnit - lastMonthUnit;
		let electricityBill;
		if (unit > 0 && unit < 150) {
			electricityBill = unit * 4;
			document.getElementById('generateElectricityBill').innerHTML =
				'Total Electricity bill :' + '' + electricityBill + 'Rs. Only';
		}
		if (unit > 150 && unit <= 300) {
			electricityBill = unit * 6;
			document.getElementById('generateElectricityBill').innerHTML =
				'Total Electricity bill :' + '' + electricityBill + 'Rs. Only';
		}
		if (unit > 300 && unit <= 500) {
			electricityBill = unit * 8;
			document.getElementById('generateElectricityBill').innerHTML =
				'Total Electricity bill :' + '' + electricityBill + 'Rs. Only';
		}
		if (unit > 500) {
			electricityBill = unit * 10;
			document.getElementById('generateElectricityBill').innerHTML =
				'Total Electricity bill :' + '' + electricityBill + 'Rs. Only';
		}
	} else {
		alert('please enter valid reading');
	}
}
// Calculate gross salary as gs=basic salary+TA+DA?
function calculateGrossSalary() {
	let salary = +prompt('enter your monthly salary');
	let tA;
	let dA;
	let grossSalary;
	if (salary.length != 0) {
		if (salary > 0 && salary < 15000) {
			tA = (salary * 8) / 100;
			dA = (salary * 4) / 100;
			grossSalary = salary + tA + dA;
			document.getElementById('calculateGrossSalary').innerHTML =
				'Your Gross Salary is :' + grossSalary;
		}
		if (salary > 15000) {
			tA = (salary * 10) / 100;
			dA = (salary * 5) / 100;
			grossSalary = salary + tA + dA;
			document.getElementById('calculateGrossSalary').innerHTML =
				'Your Gross Salary is :' + grossSalary;
		}
	}
}
//  program to print “Code Better” five times by using for loop.
function printCodeBetter() {
	let txt = 'Code Better';
	for (let i = 0; i < 5; i++) {
		console.log(txt);
		document.write(txt + '<br>');
	}
	// document.getElementById('printCodeBetter').innerHTML = txt;
}
//program to print n natural number.
function printNaturalNumber() {
	let nNumber = +prompt('enter any number here');
	for (let i = 1; i <= nNumber; i++) {
		document.write(i + '<br>');
	}
}
// program to calculate factorial of a given number
function factorialNumber() {
	let givenNum = +prompt('enter any number here');
	let factorialNum = 1;
	for (let i = 1; i <= givenNum; i++) {
		factorialNum = i * factorialNum;
	}
	document.getElementById('factorialNumber').innerHTML = factorialNum;
}
//Q.38 Write a program to calculate square from 1-10 numbers.
function calculateSquare() {
	let square;
	for (let i = 1; i <= 10; i++) {
		square = i * i;
		document.write(
			'square of' +
				'       ' +
				i +
				'       ' +
				'is' +
				'        ' +
				square +
				'<br>'
		);
	}
}
// program to print table of any given numbers.
function printTable() {
	let givenNum = +prompt('enter any number here');
	let table;
	for (let i = 1; i <= 10; i++) {
		table = givenNum * i;
		document.write(table + '<br>');
	}
}
// program that accepts a number from user calculate factor of a given number.
function factorOfNumber() {
	let numberIs = +prompt('enter any number here');
	for (let i = 1; i <= numberIs; i++) {
		if (numberIs % i == 0) {
			document.write(i);
		}
	}
}
//accepts a number from user check given number is perfect number or not.
function perfectNumber() {
	let perfectNumber = +prompt('enter any number here');
	let factor = 0;
	if (perfectNumber.length != 0) {
		for (let i = 0; i < perfectNumber; i++) {
			if (perfectNumber % i == 0) {
				factor += i; //factor = factor + i;
			}
		}
	}
	if (perfectNumber === factor) {
		document.getElementById('perfectNumber').innerHTML =
			'The given number ' + perfectNumber + ' is <b> Perfect Number';
	} else {
		document.getElementById('perfectNumber').innerHTML =
			'The given number ' + perfectNumber + ' is <b>Not a Perfect Number';
	}
}
//  programto print Fibonacci Series.
function fibonacciSeries() {
	let fNumber = +prompt('enter any number here');
	let n1 = 0;
	let n2 = 1;
	let nextTerm;
	for (let i = 0; i <= fNumber; i++) {
		document.write(n1 + '<br>');
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
	}
}
// program to calculate sum of squares of n naturalnumber.
function squareOfNaturalNumbers() {
	let naturalNumber = +prompt('enter any positive number here');
	let squareOfNaturalNum;
	if (Math.sign(naturalNumber) != -1 && Math.sign(naturalNumber) != 0) {
		for (let i = 1; i <= naturalNumber; i++) {
			squareOfNaturalNum = i * i;
			document.write(squareOfNaturalNum + '<br>');
		}
	} else {
		alert('please enter positive and non-zero number');
	}
}
// program to accept n number from user and showhow many number are even or odd.
function evenOddNumbers() {
	window.open('./evenOddNumbersFromGivenNum.html');
}
//  program to find LCM of two numbers.
function lCM() {
	let num1 = +prompt('enter first number here');
	let num2 = +prompt('enter second number here');
	let largeNum = Math.max(num1, num2);
	let smallNum = Math.min(num1, num2);
	let i = largeNum;
	while (i % smallNum !== 0) {
		i += largeNum; // i=i+largeNum
	}
	document.getElementById('lCM').innerHTML = 'LSM is :' + i;
}
// program to find HCF of two numbers
function hCF() {
	let num1 = +prompt('enter first num here');
	let num2 = +prompt('enter second num here');
	let hcf;
	let lCM;
	for (let i = 1; i <= num1 && i <= num2; i++) {
		if (num1 % i == 0 && num2 % i == 0) {
			hcf = i;
		}
	}
	document.getElementById('hCF').innerHTML =
		'The HCF of given numbers ' + num1 + ' and ' + num2 + ' is ' + hcf;
	// lCM = (num1 * num2) / hcf;
	// console.log(lCM)
}
//  program that accepts a number from user and check given number is prime number or not.
function primeNumber() {
	let primeNumber = +prompt('enter any number here');
	if (primeNumber === 1) {
		document.getElementById('primeNumber').innerHTML =
			primeNumber + ' is <b> neither a prime nor a composite number';
	} else if (primeNumber === 2) {
		document.getElementById('primeNumber').innerHTML =
			primeNumber + ' is a <b> Prime Number';
	} else if (Math.sign(primeNumber) == -1 || Math.sign(primeNumber) == 0) {
		alert('please enter non-zero and positive number only');
	} else {
		for (let i = 2; i < primeNumber; i++) {
			if (primeNumber % i == 0) {
				document.getElementById('primeNumber').innerHTML =
					primeNumber + ' is not a <b> Prime Number';
				break;
			} else {
				document.getElementById('primeNumber').innerHTML =
					primeNumber + ' is <b> Prime Number';
			}
		}
	}
}
//  program to calculate sum of below series: 1-2+3-4+5-6+7-8......n. | sum of below series: 1!+2!+3!+4!+5!+......n
function calculateSumofSeries() {
	let nNumber = +prompt('enter any number here');
	if (nNumber % 2 == 0) {
		document.getElementById('calculateSumofSeries').innerHTML = -nNumber / 2;
	} else {
		document.getElementById('calculateSumofSeries').innerHTML =
			(nNumber + 1) / 2;
	}
}
//  program to print prime numbers from 1-100.
let primeNum = true;
function primeNumberSeries() {
	// for (let i = 2; i <= 100; i++) {
	// 	for (let j = 2; j < i; j++) {
	// 		if (i % j == 0) {
	// 			primeNum = false;
	// 			break;
	// 		}
	// 	}
	// 	if (primeNum) {
	// 		document.write(i + '<br>');
	// 	}
	// 	primeNum = true;
	// }
	//using while loop
	let i = 2;
	while (i <= 100) {
		let j = 2;
		while (j < i) {
			if (i % j == 0) {
				primeNum = false;
				break;
			}
			j++;
		}
		if (primeNum) {
			document.write(i + '<br>');
		}
		primeNum = true;
		i++;
	}
}
//  program to print Armstrong numbers from101-1000
function printArmstrongNumbers() {
	// let armstrongNumber = false;
	// let reminder;
	// let sum = 0;
	// for (let i = 101; i <= 1000; i++) {
	// 	let i = j;
	// 	let length = i.length;
	// 	reminder = parseInt(i % 10);
	// 	sum += reminder ** length;
	// 	i = parseInt(i / 10);
	// 	if (sum == j) {
	// 		armstrongNumber = true;
	// 	}
	// 	if (armstrongNumber) {
	// 		document.write(i + '<br>');
	// 	}
	// }
}
// program to print “Code Better” five times without loop & here im using function and recursion method
function printTextWithoutLoop(x) {
	console.warn(x, ' Code Better');
	if (x <= 5) {
		printTextWithoutLoop(x + 1);
	}
}
let x = 1;
// printTextWithoutLoop(x);
