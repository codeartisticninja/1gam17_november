<?php
  require_once("./setup.php");

  $data = json_decode(file_get_contents('php://input'));

  $imgdata = $data->img;
  $imgdata = substr($imgdata, strpos($imgdata, "base64,")+7);
  $img = imagecreatefromstring(base64_decode($imgdata));
  
  for ($top = floor($data->top/TILESIZE)*TILESIZE; $top < ($data->top+imagesy($img)); $top += TILESIZE) {
    for ($left = floor($data->left/TILESIZE)*TILESIZE; $left < ($data->left+imagesx($img)); $left += TILESIZE) {
      $col = floor($left/TILESIZE);
      $row = floor($top/TILESIZE);
      
      $tile = get_tile($col, $row);
      imagecopy($tile, $img,
        ($data->left - $left), ($data->top - $top),
        0, 0,
        imagesx($img), imagesy($img)
      );
      put_tile($col, $row, $tile);
    }
  }
?>