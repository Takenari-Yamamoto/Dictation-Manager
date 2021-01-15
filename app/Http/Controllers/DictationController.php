<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Aws\S3\S3Client;  
use Aws\Exception\AwsException;
use App\Dictation;

class DictationController extends Controller
{

    public function index() {
        
        $dictations = Dictation::all();

    return $dictations;
    }

    public function store(Request $request)
    {
      $dictation = new Dictation;
      $dictation->content = $request->content;
      $dictation->user_id = $request->user()->id;
      $dictation->save();
      return redirect('api/dictations');
      
    }

    public function show($id)
    {
        $dictation = Dictation::find($id);
        return $dictation;
    }

    public function destroy($id)
    {
        $dictation = Dictation::find($id);
        $dictation->delete();
        return redirect('api/dictations');
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
            'key' => 'hoge/' . $requestData['filename'] . '.' . $requestData['fileext'],
        ];
        $options = [
            ['acl' => 'public-read'],
            ['bucket' => $bucket],
            ['starts-with', '$key', 'hoge/'],
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
}
