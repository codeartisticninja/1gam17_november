<?php
  require_once("./setup.php");

  $data = json_decode(file_get_contents('php://input'));

  if (isset($data->aye)) {
    put_aye($_COOKIE["aye_id"], $data->aye);
  }

  $out = Array(
    "success" => true,
    "status" => "ok",
    "ayes" => get_ayes()
  );

  header("Content-Type: application/json");
  echo json_encode($out);
?>