<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Aws\S3\S3Client;  
use Aws\Exception\AwsException;
use App\Http\Requests\Ajax\User\DictationRequest;
use App\Dictation;
use Illuminate\Support\Facades\Auth;

class DictationController extends Controller
{

    public function index() {
        
        $user_id = Auth::id();
        $dictations = Dictation::all()->where('user_id', $user_id);
        return response()->json($dictations);
    }

    public function store(Request $request)
    {
      $dictation = new Dictation;
      $dictation->save($request->all());

      return response()->json($dictation);
    }

    public function update(DictationRequest $request, $id)
    {

        $status = 200;
        $message = null;
        
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
        $dictation = Dictation::find($id);
        $dictation->delete();
        return redirect('/');
    }

    public function getPresignedUrl(Request $request)
    {
        $s3Client = new \Aws\S3\S3Client([
            'credentials' => [
                'key' => env('AWS_ACCESS_KEY_ID', false),
                'secret' => env('AWS_SECRET_ACCESS_KEY', false),
            ],
            'region' => 'ap-northeast-1',
            'version' => 'latest'
        ]);

        $bucket = 'dictationmanager';
        $requestData = $request->all();
        $formInputs = [
            //acl とはアクセスコントロールリスト
            'acl' => 'public-read',
            'key' => 'local/' . $requestData['filename'] . '.' . $requestData['fileext'],
        ];
        $options = [
            ['acl' => 'public-read'],
            ['bucket' => $bucket],
            ['starts-with', '$key', 'local/'],
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