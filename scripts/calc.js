Calucator = function () {
    this.value = 0;
}

Calucator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number; 
    } else {
        alert("Error!");
    }
        
    
}