// 두 수의 합
function solution(num1, num2) {
    var answer = num1 + num2;
    return answer;
}

// 두 수의 차
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}

// 두 수의 곱
function solution(num1, num2) {
    var answer = num1 * num2;
    return answer;
}

// 몫 구하기
function solution(num1, num2) {
    var answer = parseInt(num1 / num2);
    return answer;
}

// 나머지 구하기
function solution(num1, num2) {
    var answer = num1 % num2;
    return answer;
}

// 숫자 비교하기
function solution(num1, num2) {
    var answer = 0;
    if (num1 == num2) {
        answer = 1;
    } else {
        answer = -1;
    }
    return answer;
}

// 배열의 평균값
function solution(numbers) {
    // var answer = 0
    // numbers.map(el=>answer+= el)
    // answer /= numbers.length;
    // answer += 1
    // answer = answer + 1
    var answer = numbers.reduce((sum, res) => sum + res, 0) / numbers.length;
    return answer;
}

// 나이 출력
function solution(age) {
    var answer = 2022 - age + 1;
    return answer;
}

// 짝수의 합
function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            answer += i;
        }
    }
    return answer;
}
