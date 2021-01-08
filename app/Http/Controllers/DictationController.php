<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Aws\S3\S3Client;  
use Aws\Exception\AwsException;

class DictationController extends Controller
{
    public function getPresignedUrl(Request $request)
    {
        $s3Client = new \Aws\S3\S3Client([
            'credentials' => [
                'key' => 'AKIA4ZW3CFNNSPHMEOQK',
                'secret' => '1aa{77JnoROH8#^',
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
            ['starts-with', 'key', 'hoge/'],
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
