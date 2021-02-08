<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Aws\S3\S3Client;  
use Aws\Exception\AwsException;
use App\Dictation;
use Illuminate\Support\Facades\Auth;

class DictationController extends Controller
{

    public function index() {
        
        $user_id = Auth::id();
        $dictations = Dictation::all()->where('user_id', $user_id);
        return response()->json($dictations);
    }

    // 後で修正する
    public function store(Request $request)
    {
      $dictation = new Dictation;
      $dictation->id = $request->id;
      $dictation->content = $request->content;
      $dictation->title = $request->title;
      $dictation->user_id = $request->user()->id;
      $dictation->save();

      return response()->json($dictation);
    }

    public function update(Request $request, $id)
    {
        $update = [
            'content' => $request->content,
            'title' => $request->title
        ];
        Dictation::where('id', $id)->update($update);
    }

    public function show($id)
    {
        $dictation = Dictation::findOrFail($id);
        $this->authorize('view', $dictation);
        return $dictation;
    }

    public function destroy($id)
    {
        $dictation = Dictation::where('id', $id)->delete();
        return $dictation;
    }

    public function getPresignedUrl(Request $request)
    {
        $s3Client = new \Aws\S3\S3Client([
            'credentials' => [
                'key' => 'AKIA4ZW3CFNN252QQAZH',
                'secret' => '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',
            ],
            'region' => 'ap-northeast-1',
            'version' => 'latest'
        ]);

        $bucket = 'dictationmanager';
        $requestData = $request->all();
        $formInputs = [
            //acl とはアクセスコントロールリスト
            'acl' => 'public-read',
            'key' => 'dictation/' . $requestData['filename'] . '.' . $requestData['fileext'],
        ];
        $options = [
            ['acl' => 'public-read'],
            ['bucket' => $bucket],
            ['starts-with', '$key', 'dictation/'],
        ];
        $expires = '+20 minutes';
        $postObject = new \Aws\S3\PostObjectV4(
            $s3Client,
            $bucket,
            $formInputs,
            $options,
            $expires
        );

        $formAttributes = $postObject->getFormAttributes();
        $formInputs = $postObject->getFormInputs();

        return response()
            ->json([
                'url' => $formAttributes['action'],
                'fields' => $formInputs
            ]);
    }

    public function checkExist(Request $request) 
    {
        $theDictation = Dictation::where('id', $request->dictation_id)
            ->get()
            ->sortByDesc('created_at');
        return $theDictation;
    }
}