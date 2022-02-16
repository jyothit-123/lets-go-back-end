# lets-go-back-end

<!-- installed packages -->
npm install
npm i express
npm i body-parser
npm i mongoose
npm i cors

<!-- command to start server -->
node app 

<!-- API deatils of the application -->
POST -	http://localhost:4000/signup
{
        "firstName":"bbb",
        "lastName":"bbb",
        "dateOfBirth":"11-02-2022",
        "gender":"bbb",
        "contactNumber":1234567,
        "emaiId":"bbb@gmail.com",
        "password":"bbb",
        "confirmPassword":"bbb"
 }

POST -	 http://localhost:4000/login
{
        "emaiId":"bbbbb@gmail.com",
        "password":"bbbbb"
}

GET -	http://localhost:4000/findAllUsers
