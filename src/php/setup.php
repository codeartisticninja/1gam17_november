<?php
  const DATADIR = "../_data/";
  const TILESIZE = 1024;

  if (!is_dir(DATADIR)) {
    mkdir(DATADIR);
    mkdir(DATADIR."tiles/");
    mkdir(DATADIR."ayes/");
    mkdir(DATADIR."puddles/");
  }
  if(!isset($_COOKIE["aye_id"])) {
    setcookie("aye_id", md5(date("r").rand()));
  }
  
  function get_tile($col, $row) {
    $name = "tiles/".intval($col)."_".intval($row).".png";
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
    $name = "tiles/".intval($col)."_".intval($row).".png";
    rename(DATADIR.$tmp, DATADIR.$name);
  }

  function get_ayes() {
    $files = scandir(DATADIR."ayes");
    $out = Array();
    foreach ($files as $filename) {
      if (substr($filename,0,1) !== ".") {
        $aye = json_decode(file_get_contents(DATADIR."ayes/".$filename));
        if ($aye->name === $_COOKIE["aye_id"]) {
          $aye->name = "Aye";
        }
        array_push($out, $aye);
      }
    }
    return $out;
  }

  function put_aye($name, $obj) {
    $obj->name = basename($name);
    $filename = "ayes/".$obj->name.".json";
    file_put_contents(DATADIR.$filename, json_encode($obj));
  }
?>