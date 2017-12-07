<?php
  const DATADIR = "../_data/";
  const TILESIZE = 1024;

  if (!is_dir(DATADIR)) {
    mkdir(DATADIR);
    mkdir(DATADIR."tiles/");
    mkdir(DATADIR."peers/");
    mkdir(DATADIR."puddles/");
  }
  if(!isset($_COOKIE["aye_id"])) {
    setcookie("aye_id", md5(date("r").rand()));
  }

  function safe_save($name, $data) {
    $files = scandir(DATADIR);
    foreach ($files as $filename) {
      if (strlen($filename) > 30) {
        if (filemtime(DATADIR.$filename) < time() - 60) {
          unlink(DATADIR.$filename);
        }
      }
    }
    $tmp = md5(date("r").rand()).".tmp";
    if (!is_string($data)) {
      $data = json_encode($data);
    }
    file_put_contents(DATADIR.$tmp, $data);
    rename(DATADIR.$tmp, DATADIR.$name);
  }

  function register_peer($id) {
    $name = "peers/".md5($id).".json";
    $peer = Array(
      "id" => $id
    );
    safe_save($name, $peer);
  }

  function get_peers() {
    $files = scandir(DATADIR."peers");
    $out = Array();
    foreach ($files as $filename) {
      if (substr($filename,0,1) !== ".") {
        $peer = json_decode(file_get_contents(DATADIR."peers/".$filename));
        array_push($out, $peer->id);
        if (filemtime(DATADIR."peers/".$filename) < time() - 60*60*8) {
          unlink(DATADIR."peers/".$filename);
        }
      }
    }
    return $out;
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
    $tmp = md5(date("r").rand()).".tmp";
    imagepng($img, DATADIR.$tmp);
    $name = "tiles/".intval($col)."_".intval($row).".png";
    rename(DATADIR.$tmp, DATADIR.$name);
  }


  function put_aye($name, $obj) {
    $obj->name = basename($name);
    $filename = "ayes/".$obj->name.".json";
    file_put_contents(DATADIR.$filename, json_encode($obj));
  }
?>