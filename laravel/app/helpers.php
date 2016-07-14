<?php
function flash($message, $level = 'info') {
    session()->flash('alert', $message);
    session()->flash('alert_level', $level);
}