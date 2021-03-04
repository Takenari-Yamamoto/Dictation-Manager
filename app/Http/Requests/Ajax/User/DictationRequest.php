<?php

namespace App\Http\Requests\Ajax\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class DictationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'present|max:70',
            'content' => 'present|max:65535'
        ];
    }

    public function messages()
    {
        return [
            'title.max' => 'Please input 70 characters or less',
            'content.max' => 'Please input 65535 characters or less'
        ];
    }

    /**
     * [override] バリデーション失敗時ハンドリング
     *
     * @param Validator $validator
     * @throw HttpResponseException
     * @see FormRequest::failedValidation()
     */
    protected function failedValidation(Validator $validator) {
        $response['status']  = 400;
        $response['statusText'] = 'Failed validation.';
        $response['errors']  = $validator->errors();
        throw new HttpResponseException(
            response()->json( $response, 200 )
        );
    }
}
