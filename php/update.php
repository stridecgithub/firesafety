<?php
ob_start();
session_start();
define('DB_HOST','localhost');
define('DB_USERNAME','denyodev1');
define('DB_PASSWORD','51RkC3nQgXlwGyZq');
define('DB_NAME','denyodev1');
//ini_set('display_errors', 'On');
$con = mysqli_connect(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME) or die('Unable to Connect...');

extract($_POST);
extract($_GET);
extract($_REQUEST);
extract($_FILES);
ini_set("upload_max_filesize","20M");
$responseid="";
$deviceid=$_REQUEST['deviceid'];
$field=$_REQUEST['field'];
$value=$_REQUEST['value'];
$data = array();      
      // echo "update firesafety_devicetokens set ".$field."='".$value."' where `deviceid`='".$deviceid."'";exit;
    mysqli_query($con, "update firesafety_devicetokens set ".$field."='".$value."' where `deviceid`='".$deviceid."'");
  
    
try {
        $queryStr = "SELECT * FROM `firesafety_devicetokens` WHERE `deviceid`='$deviceid'";
        $stmt    = mysqli_query($con,$queryStr);
        $sno=0;
       
        while($row  =  $stmt->fetch_assoc())
        {
            $sno++;
            $data=$row;
        }
       
        //$totaldata[]=formatSizeUnits($totalsize);
       // echo json_encode($totaldata);
}
catch(PDOException $e){
	echo $e->getMessage();
}
echo json_encode($data);

      
?>
