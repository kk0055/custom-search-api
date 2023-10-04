<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;

class SearchController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $apiKey = env('API_KEY');
        $id = env('SEARCH_ENGINE_ID');
        $query = request()->query('word');
        $url = "https://www.googleapis.com/customsearch/v1?key=$apiKey&cx=$id&q=$query";
        $response = Http::get($url);
        return $response;
    }
}
