// Base class: User
class User {
  static userCount = 0; // Static property to track the number of users

  constructor(userid, password, logindetails) {
    this.userid = userid;
    this.password = password;
    this.logindetails = logindetails;
    User.userCount++; // Increment user count whenever a new user is created
  }

  verifyLogin() {
    // Verify if the login credentials are valid
    return this.userid && this.password;
  }

  static getUserCount() {
    // Static method to get the total number of users
    return User.userCount;
  }
}

// Derived class: Customer
class Customer extends User {
  static customerCount = 0; // Static property to track the number of customers

  constructor(userid, password, logindetails, customername, email, phonenumber) {
    super(userid, password, logindetails);
    this.customername = customername;
    this.email = email;
    this.phonenumber = phonenumber;
    Customer.customerCount++; // Increment customer count whenever a new customer is created
  }

  register() {
    // Register the customer (e.g., save to database)
    if (this.customername && this.email && this.phonenumber) {
      return `Customer ${this.customername} registered successfully.`;
    } else {
      return "Registration failed: Missing customer details.";
    }
  }

  login() {
    // Login logic
    return this.verifyLogin() ? `Customer ${this.customername} logged in successfully.` : "Login failed: Invalid credentials.";
  }

  updateProfile(newName, newEmail, newPhone) {
    this.customername = newName;
    this.email = newEmail;
    this.phonenumber = newPhone;
    return `Customer profile updated: ${this.customername}, ${this.email}, ${this.phonenumber}`;
  }

  static getCustomerCount() {
    // Static method to get the total number of customers
    return Customer.customerCount;
  }
}

// Derived class: Administrator
class Administrator extends User {
  static adminCount = 0; // Static property to track the number of administrators

  constructor(userid, password, logindetails, adminname, email) {
    super(userid, password, logindetails);
    this.adminname = adminname;
    this.email = email;
    Administrator.adminCount++; // Increment admin count whenever a new administrator is created
  }

  resetUserPassword(user) {
    // Method to reset a user's password
    const newPassword = Math.random().toString(36).slice(-8); // Generate a random password
    user.password = newPassword;
    return `Password for user ${user.userid} has been reset to ${newPassword}.`;
  }

  approveLoan(request) {
    // Approve the loan request
    request.status = "Approved";
    return `Loan request '${request.requestDetails}' has been approved for $${request.loanAmount}.`;
  }

  static getAdminCount() {
    // Static method to get the total number of administrators
    return Administrator.adminCount;
  }
}

// Class: View
class View {
  static viewCount = 0; // Static property to track the number of views created

  constructor() {
    View.viewCount++; // Increment view count whenever a new view is created
  }

  displayCustomerInfo(customer) {
    return `Customer: ${customer.customername}, Email: ${customer.email}, Phone: ${customer.phonenumber}`;
  }

  displayLoanInfo(loanRepaid, loanRemaining) {
    return `Loan Repaid: $${loanRepaid}, Loan Remaining: $${loanRemaining}`;
  }

  static getViewCount() {
    // Static method to get the total number of views created
    return View.viewCount;
  }
}

// Class: LoanRequest
class LoanRequest {
  static requestCount = 0; // Static property to track the number of loan requests processed

  constructor(requestDetails, loanAmount) {
    this.requestDetails = requestDetails;
    this.loanAmount = loanAmount;
    this.status = "Pending"; // Default status for loan requests
    LoanRequest.requestCount++; // Increment request count whenever a new loan request is created
  }

  processRequest() {
    if (this.loanAmount > 0) {
      this.status = "Processed";
      return `Loan request '${this.requestDetails}' for $${this.loanAmount} has been processed.`;
    } else {
      return "Loan request processing failed: Invalid loan amount.";
    }
  }

  static getRequestCount() {
    // Static method to get the total number of loan requests
    return LoanRequest.requestCount;
  }
}

// Example Usage
const customer = new Customer("user123", "pass123", "2025-01-19", "John Doe", "john@example.com", 1234567890);
const admin = new Administrator("admin123", "adminpass", "2025-01-19", "Admin Name", "admin@example.com");
const view = new View();
const loanRequest = new LoanRequest("Personal Loan", 5000);

console.log(customer.register());
console.log(customer.login());
console.log(view.displayCustomerInfo(customer));
console.log(view.displayLoanInfo(2000, 3000));
console.log(loanRequest.processRequest());
console.log(admin.approveLoan(loanRequest));
console.log(admin.resetUserPassword(customer));

/* console.log(User.getUserCount());
console.log(Customer.getCustomerCount());
console.log(Administrator.getAdminCount());
console.log(View.getViewCount());
console.log(LoanRequest.getRequestCount()); */

