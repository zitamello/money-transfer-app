'use strict';

///Data structure 

const account = {
    owner: 'Clark Kent',
    movements: [200, 450, -400, 3000, -640, -130, 70, 1400],
    source: ['jmz consultoria ltda', 'offlimits rental bailout', 'general services provided', 'PIX Transfer', 'offshore', 'BMX Style', 'CRZ Entries', 'Finno Money'],
    interestRate: 1.2,
    pin: 111111,
};

const account2 = {
    owner: 'Jessica Jones',
    movements: [5000, 300, -140, -790, 3100, -1000, 301, -865],
    source: ['jmz consultoria ltda', 'offlimits rental bailout', 'general services provided', 'PIX Transfer', 'offshore', 'BMX Style', 'CRZ Entries', 'Finno Money'],
    interestRate: 1.5,
    pin: 222222,
};

const account3 = {
    owner: 'Wanda Maximoff',
    movements: [200, 450, 1400, -276, -190, -20, 50, 90, -460],
    source: ['jmz consultoria ltda', 'offlimits rental bailout', 'general services provided', 'PIX Transfer', 'offshore', 'BMX Style', 'CRZ Entries', 'Finno Money'],
    interestRate: 0.7,
    pin: 333333,
};

const account4 = {
    owner: 'Bruce Wayne',
    movements: [430, 1200, 7000, -50, -90, -140, 3200, -500],
    source: ['jmz consultoria ltda', 'offlimits rental bailout', 'general services provided', 'PIX Transfer', 'offshore', 'BMX Style', 'CRZ Entries', 'Finno Money'],
    interestRate: 1,
    pin: 444444,
};

const accounts = [account, account2, account3, account4];

//Elements 

const labelWelcome = document.querySelector('.welcome');
const labelDatd = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumout = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelTypeDeposit = document.querySelector('.span--deposit');
const labelTypeWithdrawal = document.querySelector('.span--withdraw');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const containerSource = document.querySelector('.movements__source');


const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.form__btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements, source){
    containerMovements.innerHTML = '';
    movements.forEach(function(movement, i) {
        const movementType = movement > 0 ? 'deposit' : 'withdrawal';
        const type = movement > 0 ? 'span--deposit' : 'span--withdraw';
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${movementType}</div>
          <div class="movements__source">${account.source[i]}</div>
          <div class="movements__value"> <span class=${type}>${movement}</span></div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

displayMovements(account.movements);

const movements2 = [200, 458, -400, 3000, -650, -130, 70];

const brzToUSD = 5.5;

const conversionUSD = movements2.map(function(mov){
    return mov * brzToUSD;
})

console.log(movements2, conversionUSD);