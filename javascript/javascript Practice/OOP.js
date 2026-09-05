// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData()
//     {
//         console.log(name,email);
//     }
// } 
//  let Info = new User("John Doe", "john.doe@example.com");
//  Info.viewData();

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    editdata(newName, newEmail) {
        this.name = newName;
        this.email = newEmail;
    }
}
class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }
}
let student = new User("John Doe", "john.doe@example.com");
let admin = new Admin("Jane Smith", "jane.smith@example.com", "Super Admin");