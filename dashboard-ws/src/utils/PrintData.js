const printThis = (idElement) => {
  const divContents = document.getElementById(idElement).innerHTML;
  let a = window.open("", "", "height=768, width=1368");
  a.document.write("<html>");
  a.document.write("<head>");
  a.document.write(`<script src="https://cdn.tailwindcss.com"></script>`);
  a.document.write("</head>");
  a.document.write("<body>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
};

export default printThis;
