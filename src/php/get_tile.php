<?php
  require_once("./setup.php");

  $img = get_tile($_GET["col"], $_GET["row"]);
  header("Content-Type: image/png");
  imagepng($img);
?>