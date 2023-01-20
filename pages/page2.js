export default function Home() {
  return (
    <div>
          <box>

          <box-head>
      <h1>Cafe Prep</h1>
          </box-head>
          <box-body>
          <h2>Drink</h2>
          <li>Coffee</li>
          <li>Latte</li>
          <li>Espressp</li>

         </box-body>
          </box>
      <style jsx>
   {`
        body {
  background-color: #EDC;
}

.box {
  background-color: #FFF;
  border: 1px solid #CCC;
  box-shadow: 0 0 10px #CCC inset;
  font-family: serif;
  text-align: center;
  width: 400px;
}

.box > .box-head {
  background: #753;
  box-shadow: 0 0 10px #333 inset;
  padding: 10px;
}
.box > .box-head > h1 {
  color: #FFF;
  margin: 0;
  text-shadow: 0 -2px 0 #333;
}

.box > .box-body {
  padding: 10px;
}

.box > .box-body > h2 {
  font-size: 18px;
}

.box > .box-body > ul {
  list-style-type: none;
  padding: 0;
}
     `}
      </style>
    </div>
  );
}
