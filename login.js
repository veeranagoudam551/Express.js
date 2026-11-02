export  default function login(){
    return `
    <form method="POST" action="/submit">
    <h1>Login Page</h1>
    <input type="text" name="username" placeholder="Username"/>
    <br>
    <input type="password" name="password" placeholder="Password"/>
    <br>
    <button type="submit">Login</button></form>
    <br>
    <a href="/home">Go to Home</a> `
}
    