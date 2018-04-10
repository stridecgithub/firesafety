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
$data = array();
        $sql = "SELECT * FROM `firesafety_devicetokens` WHERE `deviceid`='$deviceid'";
        //echo "1";
        $result =mysqli_query($con,$sql);
        //echo "2";
        $number_of_rows=$result->fetch_assoc();
        //echo "3".count($number_of_rows);
       // echo $number_of_rows = $result->fetchColumn(); 
        if(count($number_of_rows)==0){
    mysqli_query($con, "insert into firesafety_devicetokens(`deviceid`, `onoffsettings`) values ('".$deviceid."',  '1')");
  
         }
          // $responseid = mysqli_insert_id($con);
    
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
