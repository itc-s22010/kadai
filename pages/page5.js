export default function Home() {
  return (
<div class="box">
    <h1>Prep Times</h1>
    <h2>Headline</h2>
    <h3>Article 1</h3>
    <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>
    <h3>Article 2</h3>
    <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>

      <style jsx>
        {`
  .box {
  background-color: #F6F6F6;
  border: 1px solid #CCC;
  padding: 25px 15px;
  position: relative;
  width: 298px;
}
.box:before {
  border: 20px solid #CCC;
  border-bottom-color: #FFF;
  border-right-color: #FFF;
  bottom: -1px;
  content: "";
  position: absolute;
  right: -1px;
}
.box > h1,
.box > h2,
.box > h3,
.box > p {
  color: #333;
  font-family: serif;
  margin: 0;
  padding: 0;
}
.box > h1 {
  border-bottom: 1px solid #999;
  padding-bottom: 5px;
  text-align: center;
}
.box > h2 {
  margin: 10px 0;
}
.box > h3 {
  margin: 5px 0;
}
.box > p {
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 20px;
}
        `}
      </style>
    </div>
  );
}
