<?php
  const DATADIR = "../_data/";
  const TILESIZE = 1024;

  if (!is_dir(DATADIR)) {
    mkdir(DATADIR);
  }
  
  function get_tile($col, $row) {
    $name = "tile_".intval($col)."_".intval($row).".png";
    if (is_file(DATADIR.$name)) {
      $img = imagecreatefrompng(DATADIR.$name);
    }
    if (!$img) {
      $img = imagecreatetruecolor(TILESIZE, TILESIZE);
      $c = imagecolorallocatealpha($img, 255,255,255, 127);
      imagefill($img, 0,0, $c);
    }
    imagealphablending($img, true);
    imagesavealpha($img, true);

    return $img;
  }
  
  function put_tile($col, $row, $img) {
    $tmp = md5(date("r").rand());
    imagepng($img, DATADIR.$tmp);
    $name = "tile_".intval($col)."_".intval($row).".png";
    rename(DATADIR.$tmp, DATADIR.$name);
  }
?>