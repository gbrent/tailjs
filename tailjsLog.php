<?php
$filename = __DIR__.'/tailjs.log'; // Location of your log file
$output = shell_exec('exec tail -n25 ' . $filename);  // only print last 25 lines
echo str_replace(PHP_EOL, '<br />', $output); // replace EOL with html breaks
?>
