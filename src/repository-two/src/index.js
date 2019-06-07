console.log("repository-two");

var user = function() {
    this.name = 'jon';
    //An empty user constructor.
};

function handler(userInput) {
    var anyVal = 'anyVal'; // This can be any attribute, and does not need to be user controlled.
    user[anyVal] = user[userInput[0]](userInput[1]);
}
