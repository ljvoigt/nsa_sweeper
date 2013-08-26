(function (document) {

  function map(height, width) {
    var tiles = [];
    for (var i = 0; i < width; i++) {
      tiles[i] = [];
      for (var j = 0; j < height; j++) {
        tiles[i][j] = mine(20) ? "x" : "o";
      }
    }
    return tiles;
  }

  function mine(chance) {
    var rand = Math.floor(Math.random() * 100);
    return chance > rand;
  }

  function render(map) {
    var $el = document.createDocumentFragment();
    map.forEach(function (row) {
      var $row = document.createElement("div");
      $row.classList.add("row");
      row.forEach(function (column) {
        var $column = document.createElement("div");
        $column.classList.add("column");
        $column.textContent = column;
        $row.appendChild($column);
      });
      $el.appendChild($row);
    });
    var $body = document.querySelector("body");
    $body.appendChild($el);
  }

  render(map(9, 9));

}(document));
