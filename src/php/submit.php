<?php
  require_once("./setup.php");

  $left = intval($_POST["left"]);
  $top = intval($_POST["top"]);
  $imgdata = $_POST["img"];
  $imgdata = substr($imgdata, strpos($imgdata, "base64,")+7);
  $img = imagecreatefromstring(base64_decode($imgdata));
  
  for ($t = floor($top/TILESIZE)*TILESIZE; $t < ($top+imagesy($img)); $t += TILESIZE) {
    for ($l = floor($left/TILESIZE)*TILESIZE; $l < ($left+imagesx($img)); $l += TILESIZE) {
      $col = floor($l/TILESIZE);
      $row = floor($t/TILESIZE);
      
      $tile = get_tile($col, $row);
      imagecopy($tile, $img,
        ($left - $l), ($top - $t),
        0, 0,
        imagesx($img), imagesy($img)
      );
      put_tile($col, $row, $tile);
    }
  }
?>