// const names=['Nikhil','Sajal','Tejaswwini','Saurabh','Vedant','Ayush','mamthan']


function JSXAssignment() {
  const arr = [
    "Nikhil",
    "Sajal",
    "Tejaswwini",
    "Saurabh",
    "Vedant",
    "Ayush",
    "Manthan",
  ];
  return (
    <div>
      <h1>
        {arr.map(
          (val, i) => (`${val}
                            ${i === arr.length - 1 ? "|" : "->"}
                            `)
        )}
      </h1>
    </div>
  );
}
export default JSXAssignment;
