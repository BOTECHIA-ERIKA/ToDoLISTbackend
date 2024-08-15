export const SlashTemplate :string = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SERVER-SIDE API</title>
    
    <style>
    
    *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}


:root{
    font-size: 16px;

    --color-extremes: #212121;
    --color-dark: #424242;
    --color-light: #ffffff;
}


body{
    display: grid;
    min-height: 100vh;
    max-width: 1fr;
    grid-template-rows: 110px auto 80px;
}


header{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px ;
    padding-right: 30px;
    background-color: var(--color-extremes);
}


.logo{
    width: 40px;
    height: 40px;
}

a{
color: var(--color-light);
text-decoration: none;
cursor: pointer;
}

a:hover{
    font-weight: bold;
    text-decoration: underline;

}

header a {
    margin-right: 30px;
}

.main{
width: 100%;
display: flex;
flex-flow: row wrap;

}


.main aside{
width: 200px;
height: 100%;
background-color: hotpink;
}
footer{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding-left: 30px ;
    padding-right: 30px;
    background-color: var(--color-extremes);
    text-align: center;
    color: var(--color-light);
}
    </style>

    </head>
<body>
    <header class="header">
        <div class="header-a">
            <h1 id="title">
                <img class="logo" src="https://i.postimg.cc/WbqzYQSV/logo.png" alt="logo da api"/>
            </h1>
        </div>
        <div class="header-b">
            <nav class="menu">
                <a href="/docs">DOCS</a>
                <a href="/api">API</a>
            </nav>
        </div>
    </header>
    <main class="main">
        <section>
        
        </section>
        <aside>
        </aside>
        </main>
    <footer class="footer">
       <p> &copy; 2024  Made with ❤️ by <a href="https://github.com/botechia-erika">@Botechia-Erika</a>.</p> 
       <p>All rights reserved.</p>
    </footer>
</body>
</html>


`