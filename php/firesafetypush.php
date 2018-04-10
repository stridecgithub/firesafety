<?php
header('Access-Control-Allow-Origin: *');
define( 'API_ACCESS_KEY', 'AAAAGyhm7iY:APA91bGDb-iJvZDnsCtnGlsVdKOH8VFS7VqLU76MbLDLn9T8RaBFTXdEGHq5IuK_uucbUEH6DGyCO0xl5kZ_3mOy21ZRilWsWXL5eBVeJ1CYPJa4Iv35Pw5eVdtey77eY_YLWcu4n85u' );
// Define database connection parameters
$hn      = 'localhost';
$un      = 'denyodev1';
$pwd     = '51RkC3nQgXlwGyZq';
$db      = 'denyodev1';
$cs      = 'utf8';
$deviceid=$_REQUEST['deviceid'];
$title=$_REQUEST['title'];
$message=$_REQUEST['message'];
// Set up the PDO parameters
$dsn  = "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
$opt  = array(
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_EMULATE_PREPARES   => false,
       );
// Create a PDO instance (connect to the database)
$pdo  = new PDO($dsn, $un, $pwd, $opt);
$data = array();
extract($_GET);
try {
     
		// Assign each row of data to associative array
		// $data[] = $row;	
		$registrationIds = '';
		$tokens = $pdo->query("SELECT * FROM `firesafety_devicetokens` WHERE deviceid = '".$deviceid."' && 	onoffsettings = '1' && 	walkthrough = '0'");
		$tokendata = $tokens->fetch(PDO::FETCH_OBJ);
		if($tokendata->deviceid != "null")
		{

			$registrationIds = array($tokendata->deviceid);

			// prep the bundle
			$msg = array
			(
			    'message'   => $message,
			    'title'     => $title,			    
			    'tickerText'=> strip_tags(nl2br($message)),
			    'vibrate'   => 1,
			    'sound'     => 'default',
		            'vibrate'   => 1,
    			    'sound'     => 1,
			    'arrayval'  =>  array('id' => $tokendata->deviceid, 'msg' => strip_tags(nl2br($message)), 'sub' => $title, 'type' => 'Normal'),
			    'largeIcon' => 'large_icon',
			    'smallIcon' => 'small_icon'
			    			    
			);
			$fields = array
			(
			    'registration_ids'  => $registrationIds,
			    'data'          => $msg
			);

			$headers = array
			(
			    'Authorization: key=' . API_ACCESS_KEY,
			    'Content-Type: application/json'
			);

			$ch = curl_init();
			curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
			curl_setopt( $ch,CURLOPT_POST, true );
			curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
			curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
			curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
			curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
			$result = curl_exec($ch );
			curl_close( $ch );
			echo $result;

			//$pdo->query("UPDATE `pushnotifications` SET appstatus = 1 WHERE pushnotification_id  = '".$row->pushnotification_id."'");
		}
    

      // Return data as JSON
      //echo json_encode($data);
}
catch(PDOException $e)
{
	echo $e->getMessage();
}
// API access key from Google API's Console
exit;



?>
