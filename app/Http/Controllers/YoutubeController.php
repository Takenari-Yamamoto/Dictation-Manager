<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Google_Client;
use Google_Service_YouTube;
use App\Dictation;

class YoutubeController extends Controller
{
    public function searchVideo() {

        // require_once (dirname(__FILE__) . '/vendor/autoload.php');
        
        define("API_KEY",env('GOOGLE_API_KEY1'));
        $client = new Google_Client();
        $client->setApplicationName("Dictation Manager");
        $client->setDeveloperKey(env('GOOGLE_API_KEY1'));
        
        $youtube = new Google_Service_YouTube($client);
        
        $params ['q'] = $_GET['keyword'];
        $params['type'] = 'video';
        $params['maxResults'] = 10;
        
        $videos = [];
        try {
            $searchResponse = $youtube->search->listSearch('snippet', $params);
            array_map(function ($searchResult) use (&$videos) {
                $videos[] = $searchResult;
            },$searchResponse['items']);
        } catch (Google_Service_Exception $e) {
            echo htmlspecialchars($e->getMessage());
            exit;
        } catch (Google_Exception $e) {
            echo htmlspecialchars($e->getMessage());
            exit;
        }
        return response()->json($videos);
    }
}