<?php
  require_once("./setup.php");
  $out = Array(
    "success" => true,
    "status" => "ok"
  );

  set_puddle($_POST["id"], json_decode($_POST["obj"], true));
  $out["puddle"] = get_puddle($_POST["id"]);

  header("Content-Type: application/json");
  echo json_encode($out);
?>