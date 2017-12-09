<?php
  const DATADIR = "../_data/";
  const TILESIZE = 1024;

  if (!is_dir(DATADIR)) {
    mkdir(DATADIR);
    mkdir(DATADIR."tiles/");
    mkdir(DATADIR."peers/");
    mkdir(DATADIR."puddles/");
  }
  /*if(!isset($_COOKIE["aye_id"])) {
    setcookie("aye_id", md5(date("r").rand()));
  }*/

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
        $peer = json_decode(file_get_contents(DATADIR."peers/".$filename), true);
        array_push($out, $peer["id"]);
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
    } else {
      set_puddle(md5(date("r").rand()), Array(
        "pos" => Array(
          "x" => $col*TILESIZE + rand(256,TILESIZE),
          "y" => $row*TILESIZE + rand(256,TILESIZE)
        ),
        "inkColor" => "red",
        "inkLeft" => 8
      ));
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

  function get_puddle($id) {
    if (is_file(DATADIR."puddles/".md5($id).".json")) {
      return json_decode(file_get_contents(DATADIR."puddles/".$id.".json"), true);
    } else {
      return Array(
        "id" => $id
      );
    }
  }
  function get_puddles() {
    $files = scandir(DATADIR."puddles");
    $out = Array();
    foreach ($files as $filename) {
      if (substr($filename,0,1) !== ".") {
        $puddle = json_decode(file_get_contents(DATADIR."puddles/".$filename), true);
        $out[$puddle["id"]] = $puddle;
        if ($puddle["inkLeft"] < 0.1) {
          unlink(DATADIR."puddles/".$filename);
        }
      }
    }
    return $out;
  }
  function set_puddle($id, $obj) {
    $name = "puddles/".md5($id).".json";
    $puddle = get_puddle($id);
    if (isset($obj["pos"])) { $puddle["pos"] = $obj["pos"]; }
    if (isset($obj["inkColor"])) { $puddle["inkColor"] = $obj["inkColor"]; }
    if (isset($obj["inkLeft"])) { $puddle["inkLeft"] = $obj["inkLeft"]; }
    safe_save($name, $puddle);
  }

?>