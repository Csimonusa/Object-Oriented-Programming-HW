const Employee = require("./Employee")

class Manager extends Employee {
    
    constructor(name, id, email, officeNumber, address) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.address = address
    }
    
    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getAddress() {
        return this.address
    }
}

module.exports = Manager