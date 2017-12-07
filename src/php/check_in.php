<?php
  require_once("./setup.php");
  $out = Array(
    "success" => true,
    "status" => "ok",
    "peers" => Array(),
    "state" => new stdClass()
  );

  register_peer($_REQUEST["id"]);
  $out["peers"] = get_peers();

  header("Content-Type: application/json");
  echo json_encode($out);
?>