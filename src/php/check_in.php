<?php
  require_once("./setup.php");
  $out = Array(
    "success" => true,
    "status" => "ok",
    "peers" => Array(),
    "state" => Array()
  );

  register_peer($_POST["id"]);
  $out["peers"] = get_peers();
  $out["state"]["puddles"] = get_puddles();

  header("Content-Type: application/json");
  echo json_encode($out);
?>