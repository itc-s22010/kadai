export default function Home() {
return (
    <div>
    <body>
    <header><h1>Sample Website</h1></header>
      <main><h2>Heading</h2>
       <p>
      Content comes here. Content comes here. Content comes here.
  Content comes here. Content comes here. Content comes here.
      </p>
       
      <h2>Heading 2</h2>
      <p>
        Content comes here. Content comes here. Content comes here.
  Content comes here. Content comes here. Content comes here.
      </p>
      </main>
      <footer>Copyright (c) 2013 xxxxxxxx. All rights reserved.</footer>
      </body>
  <style jsx>
        {`
body {
  margin: 0;
}

header {
  background-color: #C00;
  padding: 10px;
}

header > h1 {
  color: #FFF;
  font-family: serif;
  margin: 0;
}

main {
  border: 1px solid #CCC;
  margin: 0 auto;
  padding: 10px;
  width: 80%;
}

main > h2 {
  border-left: 5px solid #C00;
  font-size: 20px;
  padding-left: 20px;
}

main > p {
  font-size: 14px;
  margin: 10px 25px;
}

footer {
  margin: 10px;
  text-align: center;
}

footer > p {
  color: #600;
  font-size: 12px;
}
        `}
      </style>
    </div>
  );
}
