<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Google_Client;
use Google_Service_YouTube;

class YoutubeController extends Controller
{
    public function searchVideo() {

        // require_once __DIR__ . "/../../autoload.php";
        
        define("API_KEY","AIzaSyCDAAeUb4K76kh4xgy1Tv_F0r6nGGyt9iE");
        
        $client = new Google_Client();
        $client->setApplicationName("Dictation Manager");
        $client->setDeveloperKey("AIzaSyCDAAeUb4K76kh4xgy1Tv_F0r6nGGyt9iE");
        
        $youtube = new Google_Service_YouTube($client);
        
        $keyword = "pokemon";
        $params['q'] = $keyword;
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
        return $videos;
    }
}